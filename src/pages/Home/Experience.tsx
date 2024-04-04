import { cn } from '@/lib/utils';
import {motion} from 'framer-motion'
import * as Constants from '@/constants'

import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function Experience() {
  const experiences = [
    {
      position: 'Frontend Developer',
      date: 'Nov 2019 - Present',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sunt fugiat totam id, repudiandae architecto amet molestias doloremque veritatis dolorem.',
    },
    {
      position: 'Frontend Developer',
      date: 'Nov 2018 - 2019',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sunt fugiat totam id, repudiandae architecto amet molestias doloremque veritatis dolorem.',
    },
    {
      position: 'Frontend Developer',
      date: 'Nov 2019 - 2023',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sunt fugiat totam id, repudiandae architecto amet molestias doloremque veritatis dolorem.',
    },
  ];

  const animationDelay : number = 0.4;

  return (
    <div className='c-page flex flex-col justify-center' id={Constants.EXPERIENCE}>
      <h3 className="text-center mb-4">Experience</h3>
      {experiences.map((exp, i) => (
        <motion.div  
        initial={{ opacity: 0, y:20 }}
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        transition={{delay: animationDelay * i, duration:animationDelay}}
        key={exp.date}>
        <Card className={cn('bg-transparent mb-4')}>
          <CardHeader>
            <h4 className="flex items-center justify-between">
              {exp.position} <small className='text-right'>{exp.date}</small>
            </h4>
          </CardHeader>
          <CardContent>
            <div >
              <p className="c-text-muted">{exp.description}</p>
            </div>
          </CardContent>
        </Card>
        </motion.div>
      ))}
    </div>
  );
}
