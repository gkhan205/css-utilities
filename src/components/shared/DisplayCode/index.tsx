"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { copyToClipboard } from "@/lib/utils";

type Props = {
  css: string;
};

export const DisplayCode = ({ css }: Props) => {
  return (
    <Card className="mt-10 w-full">
      <CardContent>
        <pre className="border-b hidden lg:block">{css}</pre>
        <code className="border-b block lg:hidden mt-6">{css}</code>

        <Button className="mt-6" onClick={() => copyToClipboard(css)}>
          Copy to clipboard
        </Button>
      </CardContent>
    </Card>
  );
};
