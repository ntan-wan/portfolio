import { icons } from 'lucide-react';

// type LucideIcon
type Props = {
    name:string, 
    color?:string,
    size?:number
}

export function Icon  ({ name, color, size = 14 } :Props) {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
}
