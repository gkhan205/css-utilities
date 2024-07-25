'use client';

import { useState, useEffect } from 'react';

import { Slider } from '@/components/ui/slider';

import { ReturnTypeCss } from './types';
import { Label } from '@/components/ui/label';

type Props = {
  onChange: (css: ReturnTypeCss) => void;
};

export const Sliders = ({ onChange }: Props) => {
  const [values, setValue] = useState<Record<string, number>>({
    topLeft: 10,
    topRight: 10,
    bottomLeft: 10,
    bottomRight: 10,
  });

  useEffect(() => {
    const style = createStyle(values);
    onChange(style);
  }, []);

  const handleChange = (field: string) => (num: number[]) => {
    setValue((prevState) => {
      const newState = {
        ...prevState,
        [field]: num[0],
      };

      const style = createStyle(newState);
      onChange(style);

      return newState;
    });
  };

  const createStyle = (values: Record<string, number>) => {
    const { topLeft, topRight, bottomLeft, bottomRight } = values;

    const cssString = `
    border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;
    -webkit-border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;
    -moz-border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%;
    `;

    const cssObject = {
      'border-radius': `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`,
    };

    return {
      cssString,
      cssObject,
    };
  };

  return (
    <div className='grid grid-cols-1 gap-10'>
      <Label htmlFor='top-left'>Top Left</Label>

      <Slider
        id='top-left'
        max={100}
        step={1}
        value={[values.topLeft]}
        onValueChange={handleChange('topLeft')}
      />

      <Label htmlFor='top-right'>Top Right</Label>

      <Slider
        id='top-right'
        max={100}
        step={1}
        value={[values.topRight]}
        onValueChange={handleChange('topRight')}
      />

      <Label htmlFor='bottom-right'>Bottom Right</Label>

      <Slider
        id='bottom-right'
        max={100}
        step={1}
        value={[values.bottomRight]}
        onValueChange={handleChange('bottomRight')}
      />

      <Label htmlFor='bottom-left'>Bottom Left</Label>
      <Slider
        id='bottom-left'
        max={100}
        step={1}
        value={[values.bottomLeft]}
        onValueChange={handleChange('bottomLeft')}
      />
    </div>
  );
};
