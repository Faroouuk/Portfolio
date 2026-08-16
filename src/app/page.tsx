import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return <><Navbar /><main><Hero /><About /><FeaturedProjects /><Experience /><Skills /><Infrastructure /><Education /><Contact /></main><Footer /></>;
}
