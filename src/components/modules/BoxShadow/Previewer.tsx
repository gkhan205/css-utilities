"use client";

import { cn } from "@/lib/utils";

type Props = {
  values: Record<any, any>;
  css: Record<string, string>;
};

export const Previewer = ({ values, css }: Props) => {
  return (
    <div
      className={cn(
        "h-auto w-full border border-gray-200 flex items-center" +
          " justify-center rounded-md",
      )}
      style={{
        backgroundColor: values.backgroundColor,
      }}
    >
      <div
        className={cn("h-[200px] w-[200px] bg-blue-600 rounded-md")}
        style={{
          backgroundColor: values.boxColor,
          ...css,
        }}
      />
    </div>
  );
};
