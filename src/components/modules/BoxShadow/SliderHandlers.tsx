"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

type Props = {
  values: Record<any, any>;
  onChange: (field: string, value: any) => void;
};

export const SliderHandlers = ({ values, onChange }: Props) => {
  const handleChange = (field: string) => (num: number[]) => {
    onChange(field, num[0]);
  };

  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 gap-10 mt-10">
          <Label className="mb-[-20px]">
            Horizontal Offset: <strong>{values.horizontalOffset} px</strong>
          </Label>

          <Slider
            max={32}
            min={-32}
            step={1}
            value={[values.horizontalOffset]}
            onValueChange={handleChange("horizontalOffset")}
          />

          <Label className="mb-[-20px]">
            Vertical Offset: <strong>{values.verticalOffset} px</strong>
          </Label>

          <Slider
            max={32}
            min={-32}
            step={1}
            value={[values.verticalOffset]}
            onValueChange={handleChange("verticalOffset")}
          />

          <Label className="mb-[-20px]">
            Blur: <strong>{values.blur} px</strong>
          </Label>

          <Slider
            max={32}
            min={-32}
            step={1}
            value={[values.blur]}
            onValueChange={handleChange("blur")}
          />

          <Label className="mb-[-20px]">
            Spread: <strong>{values.spread} px</strong>
          </Label>
          <Slider
            max={32}
            min={-32}
            step={1}
            value={[values.spread]}
            onValueChange={handleChange("spread")}
          />
        </div>
      </CardContent>
    </Card>
  );
};
