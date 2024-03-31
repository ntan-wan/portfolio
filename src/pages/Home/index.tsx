import { HomeHero } from '@/pages/Home/HomeHero';
import { HomeTechStacks } from '@/pages/Home/HomeTechStacks';
import { HomeProjects } from '@/pages/Home/HomeProjects';
import { HomeExperience } from '@/pages/Home/HomeExperience';
import { HomeContact } from '@/pages/Home/HomeContact';

export function Home() {
  return (
    <div>
      <HomeHero />
      <div className="c-page">
        <HomeTechStacks />
        <HomeProjects className="mt-12" />
      </div>
      <HomeExperience />
      <HomeContact />
    </div>
  );
}
