"use client";

import { DisplayCode } from "@/components/shared/DisplayCode";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

import { ColorControls } from "./ColorControls";
import { Previewer } from "./Previewer";
import { SliderHandlers } from "./SliderHandlers";

export const BoxShadow = () => {
  const [values, setValues] = useState<Record<string, any>>({
    backgroundColor: "#ffffff",
    boxColor: "#2563eb",
    shadowColor: "#cccccc",
    horizontalOffset: 10,
    verticalOffset: 10,
    blur: 10,
    spread: 3,
    inset: false,
  });

  const handleChange = (field: string, value: any) => {
    setValues((prevState) => ({ ...prevState, [field]: value }));
  };

  const style = useMemo(() => {
    const {
      shadowColor,
      horizontalOffset,
      verticalOffset,
      blur,
      spread,
      inset,
    } = values;

    const value = `${inset ? "inset" : ""} ${verticalOffset}px ${horizontalOffset}px ${blur}px ${spread}px ${shadowColor}`;

    const cssString = `
  box-shadow: ${value};
  -webkit-box-shadow: ${value};
  -moz-box-shadow: ${value};
      `;

    const cssObject = {
      "box-shadow": `${value}`,
    };

    return {
      cssString,
      cssObject,
    };
  }, [values]);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-5")}>
      <Previewer values={values} css={style.cssObject} />
      <SliderHandlers values={values} onChange={handleChange} />
      <ColorControls values={values} onChange={handleChange} />

      {style?.cssString && (
        <div className="col-span-3">
          <DisplayCode css={style.cssString} />
        </div>
      )}
    </div>
  );
};
