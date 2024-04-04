import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

import StackIcon from 'tech-stack-icons';
import { Card, CardContent } from '@/components/ui/card';

export function TechStacks() {
  const techStacks: string[] = [
    'html5',
    'css3',
    'js',
    'vuejs',
    'reactjs',
    'nextjs',
    'bootstrap5',
    'tailwindcss',
    'auth0',
    'cloudinary',
    'github',
    'nodejs',
    'mongodb',
    'mysql',
  ];
  const animationDelay : number = 0.1

  return (
    <div>
      <h3 className="text-center">Tech Stacks</h3>
      <div className="mt-4 flex flex-wrap align-center justify-center gap-4">
        {techStacks.map((icon, i) => (
          <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{delay: animationDelay * i, duration:animationDelay}}
            key={icon}
          >
            <Card  className={cn('bg-slate-100')}>
              <CardContent className={cn('pt-6 ')}>
                <StackIcon style={{ width: 48 }} name={icon} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
