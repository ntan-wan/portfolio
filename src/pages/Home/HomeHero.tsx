import { motion } from 'framer-motion';
import * as Constants from '@/constants';
import { cn } from '@/lib/utils';

import avatar from '@assets/imgs/avatar-developer-2.png';
import { Button, buttonVariants } from '@/components/ui/button';
import resume from '@/assets/resume.pdf';

export function HomeHero() {
  const bounceAnimation = { y: [-8, 20, -8] };
  const bounceTransition = {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 0,
  };

  function handleClick(label: string) {
    const getElement = (id: string): Element | null => {
      return document.querySelector(`#${id}`);
    };
    const scrollToView = (element: Element) => {
      element.scrollIntoView({ behavior: 'smooth' });
    };
    const element = getElement(label);
    if (element) {
      scrollToView(element);
    }
  }

  return (
    <div className="c-page flex flex-col align-center justify-center" id={Constants.HOME}>
      <motion.div animate={bounceAnimation} transition={bounceTransition} className="flex justify-center">
        <img src={avatar} className="rounded-full w-10/12 sm:w-6/12 md:w-3/12" />
      </motion.div>

      <motion.h1
        className="mt-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        I find joy in coding <br />
        and dedicate myself to crafting software.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="!mt-6 c-text-muted text-center"
      >
        I am a law degree holder who transitioned to the field of software development, merging legal expertise with a
        dedication to crafting innovative solutions. With a background in law, I bring a unique perspective to
        development, fostering creativity and problem-solving in the dynamic landscape of technology
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        className="mt-6 flex justify-center gap-4"
      >
        <a download href={resume} className={cn(buttonVariants(), 'cursor-pointer')}>
          Download cv
        </a>
        <Button variant="outline" onClick={() => handleClick(Constants.CONTACT)}>
          Get In Touch
        </Button>
      </motion.div>
    </div>
  );
}
