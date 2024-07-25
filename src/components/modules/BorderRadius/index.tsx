'use client';

import { useState } from 'react';

import { cn, copyToClipboard } from '@/lib/utils';

import { Sliders } from './Sliders';
import { ReturnTypeCss } from './types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const BorderRadius = () => {
  const [value, setValue] = useState<ReturnTypeCss | null>(null);

  const handleChange = (css: ReturnTypeCss) => {
    setValue(css);
  };

  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <Sliders onChange={handleChange} />

        {value?.cssString && (
          <Card className='mt-10'>
            <CardContent>
              <pre className='border-b'>{value?.cssString}</pre>

              <Button
                className='mt-6'
                onClick={() => copyToClipboard(value.cssString)}>
                Copy to clipboard
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div
        className={cn('h-[500px] w-[500px] bg-blue-500 my-5')}
        style={{
          ...value?.cssObject,
        }}
      />
    </div>
  );
};
