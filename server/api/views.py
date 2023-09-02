from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from PyPDF2 import PdfReader
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.embeddings import HuggingFaceInstructEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationalRetrievalChain
from langchain.llms import HuggingFaceHub

conversation = None

@api_view(["GET"])
def index(request):
  return Response("Success")

def get_pdf_text(file_content):
  text = ""
  pdf_reader = PdfReader(file_content)
  for page in pdf_reader.pages:
    text += page.extract_text()
  return text

def get_text_chunks(text):
  text_splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=1000,
    chunk_overlap=200,
    length_function=len
  )
  chunks = text_splitter.split_text(text)
  return chunks

def get_vector_store(text_chunks):
  embeddings = HuggingFaceInstructEmbeddings(model_name='hkunlp/instructor-xl')
  vector_store = FAISS.from_texts(texts=text_chunks, embedding=embeddings)
  return vector_store

def get_conversation_chain(vector_store):
  # llm = ChatOpenAI()
  llm = HuggingFaceHub(repo_id="google/flan-t5-xxl", model_kwargs={"temperature": 0.5, "max_length": 512})
  memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)
  conversation_chain = ConversationalRetrievalChain.from_llm(
    llm=llm,
    retriever=vector_store.as_retriever(),
    memory=memory
  )
  return conversation_chain

def handle_user_input(user_input):
  global conversation
  # conversation = request.session.get('conversation')
  response = conversation({'question': user_input})
  print(response['answer'])
  return response

class PDFSummary(APIView):
  def get(self, request):
    return Response({"success": "pdf uploaded successfully"})

  def post(self, request):
    global conversation
    pdf_file = request.FILES.get('source-file')
    raw_text = get_pdf_text(pdf_file)
    text_chunks = get_text_chunks(raw_text)
    vector_stores = get_vector_store(text_chunks)
    conversation = get_conversation_chain(vector_stores)
    # request.session['conversation'] = conversation
    # user_input = "What are the skills?"
    # handle_user_input(user_input)
    return Response({"success": "pdf uploaded successfully"})
  
class AnswerQuestions(APIView):
  def post(self, request):
    global conversation
    question = request.data.get('question')
    response = handle_user_input(question)
    return Response({"history": response["chat_history"]})
