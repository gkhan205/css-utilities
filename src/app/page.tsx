import { Card, CardContent } from "@/components/ui/card";
import { Spline } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Link href="/border-radius">
          <Card className="pt-6 drop-shadow-lg">
            <CardContent>
              <div className="grid gap-4">
                <Spline size={60} className="text-primary" />
                <p className="font-semibold">CSS Border Radius Generator</p>
                <p className="font-light">
                  Generate CSS border radius individually for every corner of
                  your HTML elements
                </p>
                <Link
                  href="/border-radius"
                  className="font-light text-xs text-primary"
                >
                  Open {">"}
                </Link>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </main>
  );
}
