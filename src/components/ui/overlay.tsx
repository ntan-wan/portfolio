import { cn } from '@/lib/utils';
import {motion} from 'framer-motion';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Overlay({ children, className }: Props) {
  return (
    <motion.div 
      className={cn('bg-gray-800 opacity-50 absolute w-full h-full', className)}
    >
      {children}
    </motion.div>
  );
}
