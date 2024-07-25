import { Metadata } from 'next';

import { BorderRadius } from '@/components/modules/BorderRadius';

export const metadata: Metadata = {
  title: 'Border Radius',
  description: 'CSS Utilities by Ghazi',
};

export default function BorderRadiusPage() {
  return <BorderRadius />;
}
