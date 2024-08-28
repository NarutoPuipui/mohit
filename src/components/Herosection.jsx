// components/HeroSection.js
import Image from "next/image";
// import heroImage from "../public/hero-image.jpg"; // Replace with your image path
import  heroImage from "../../public/profile2.jpg"
export default function HeroSection() {
  return (
    <section className="bg-hero-pattern bg-cover rounded-xl text-white py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi! I'm Mohit Singh</h1>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-6">
            I am a passionate Frontend developer with expertise in creating amazing web
            applications. Let's build something awesome together!
          </p>
          
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="w-48 h-48 relative">
            <Image
              src={heroImage}
              alt="Hero"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
