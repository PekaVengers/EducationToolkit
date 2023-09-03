import github from "../assets/images/github.png"

export default function Footer() {
  return (
    <footer className="flex bg-primary w-[100vw] justify-center items-center] py-2">
      <span className="text-white text-[1.5rem] mr-[2rem]">© 2023 CareerCompass. All rights reserved.</span>
      <a href="https://github.com/PekaVengers/EducationToolkit">
      <img src={github} alt="github icon" />
      </a>
    </footer>
  );
}