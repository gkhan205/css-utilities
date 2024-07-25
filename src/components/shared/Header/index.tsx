import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Header = () => (
  <div className={cn('py-3 mb-5 container')}>
    <Link href='/'>Home</Link>
  </div>
);
