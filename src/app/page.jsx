import Herosection from "@/components/Herosection.jsx";
import Navbar from "../components/Header.jsx";
import Education from "@/components/Education.jsx";
import Skills from "@/components/Skill.jsx";




export default function Home() {
  return (
    <main className="bg-black flex-col min-h-screen items-center justify-center p-10 px-15">
      
      <Herosection/>
      <Education/>
      <Skills/>
    </main>
  );
}
