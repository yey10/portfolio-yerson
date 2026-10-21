import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About, Expertise, Stack, Projects, Experience, Lab, Process, Contact, Footer } from "@/components/Sections";
export default function Page() {
  return (<><Navbar /><main><Hero /><About /><Expertise /><Stack /><Projects /><Experience /><Lab /><Process /><Contact /></main><Footer /></>);
}
