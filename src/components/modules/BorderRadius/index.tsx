"use client";

import { useState } from "react";

import { cn, copyToClipboard } from "@/lib/utils";

import { Sliders } from "./Sliders";
import { ReturnTypeCss } from "./types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const BorderRadius = () => {
  const [value, setValue] = useState<ReturnTypeCss | null>(null);

  const handleChange = (css: ReturnTypeCss) => {
    setValue(css);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
      <Sliders onChange={handleChange} />

      <div className="flex flex-col justify-center items-center">
        <div
          className={cn("h-[300px] w-[300px] bg-primary my-5")}
          style={{
            ...value?.cssObject,
          }}
        />

        {value?.cssString && (
          <Card className="mt-10 w-full">
            <CardContent>
              <pre className="border-b hidden lg:block">{value?.cssString}</pre>
              <code className="border-b block lg:hidden mt-6">
                {value?.cssString}
              </code>

              <Button
                className="mt-6"
                onClick={() => copyToClipboard(value.cssString)}
              >
                Copy to clipboard
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
