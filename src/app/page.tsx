import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Card className='pt-6'>
        <Link href='/border-radius'>
          <CardContent>Border Radius</CardContent>
        </Link>
      </Card>
    </main>
  );
}
