import { Hero } from '@/pages/Home/Hero';
import { TechStacks } from '@/pages/Home/TechStacks';
import { Projects } from '@/pages/Home/Projects';
import { Experience } from '@/pages/Home/Experience';
import { Contact } from '@/pages/Home/Contact';

export function Home() {
  return (
    <div>
      <Hero />
      <div className="c-page">
        <TechStacks />
        <Projects className="mt-12" />
      </div>
      <Experience />
      <Contact />
    </div>
  );
}
