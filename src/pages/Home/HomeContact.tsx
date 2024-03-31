import { cn } from '@/lib/utils';
import * as Constants from '@/constants';

import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
};

export function HomeContact({ className }: Props) {
  const email = 'wangtanngan@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/ngan-tan-wang-124a761b5/';
  const gitHub = 'https://github.com/ntan-wan';

  function handleLinkedIn() {
    window.open(`${linkedIn}`, '_blank', 'noreferrer,noopener');
  }
  function handleGithub() {
    window.open(`${gitHub}`, '_blank', 'noreferrer,noopener');
  }
  function handleEmail() {
    window.open(`mailto:${email}`, '_blank', 'noreferrer,noopener');
  }

  return (
    <div className={cn('c-page flex flex-col justify-center',className)} id={Constants.CONTACT}>
      <h3 className="text-center mb-4">Contact</h3>
      <h1 className='text-center'>Let's stay in touch!</h1>
      <p className="c-text-lead text-center">Have a question or want to discuss a project? Feel free to reach out!</p>

      <p className="text-center c-text-large">{email}</p>

      <div className="flex align-center justify-center gap-3 mt-8">
        <Button onClick={handleEmail} variant='outline' size="icon">
          <Icon name="Mail" size={24} />
        </Button>
        <Button onClick={handleLinkedIn} variant="outline" size="icon">
          <Icon name="Linkedin" size={24}/>
        </Button>
        <Button onClick={handleGithub} variant="outline" size="icon">
          <Icon name="Github" size={24} />
        </Button>
      </div>
    </div>
  );
}
