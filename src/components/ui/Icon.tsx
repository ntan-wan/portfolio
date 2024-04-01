import { icons } from 'lucide-react';

interface IProps  {
    name: keyof typeof icons;
    color?:string,
    size?:number
}

export function Icon  ({ name, color, size = 14 } :IProps) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}
