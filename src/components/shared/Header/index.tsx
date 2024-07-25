'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

export const Header = () => {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={cn('py-3 bg-background drop-shadow-md')}>
      <nav className='flex gap-10 items-center container'>
        <Link href='/'>
          <p className='text-5xl font-black text-primary'>CUG</p>
          <p className='text-xs'>CSS Utility Generator</p>
        </Link>

        <div className='ms-auto flex gap-5'>
          <Input
            placeholder='Search Tool'
            className='w-96 dark:bg-gray-800 hidden md:block'
          />
          <Button variant='ghost' onClick={handleThemeChange}>
            {theme === 'light' ? <Moon /> : <Sun />}
          </Button>
        </div>
      </nav>
    </div>
  );
};
