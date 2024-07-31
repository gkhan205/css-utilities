"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  values: Record<any, any>;
  onChange: (field: string, value: any) => void;
};

export const ColorControls = ({ onChange, values }: Props) => {
  const handleChange = (field: string) => (event: any) => {
    const { value } = event.target;
    onChange(field, value);
  };

  const handleInsetChange = (value: boolean) => {
    onChange("inset", value);
  };

  return (
    <Card>
      <CardContent className="mt-6 grid gap-5">
        <div>
          <Label>
            Background Color: <strong>{values.backgroundColor}</strong>
          </Label>
          <Input
            type="color"
            value={values.backgroundColor}
            onChange={handleChange("backgroundColor")}
          />
        </div>
        <div>
          <Label>
            Box Color: <strong>{values.boxColor}</strong>
          </Label>
          <Input
            type="color"
            value={values.boxColor}
            onChange={handleChange("boxColor")}
          />
        </div>
        <div>
          <Label>
            Shadow Color: <strong>{values.shadowColor}</strong>
          </Label>
          <Input
            type="color"
            value={values.shadowColor}
            onChange={handleChange("shadowColor")}
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="inset" onCheckedChange={handleInsetChange} />
          <label
            htmlFor="inset"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Inset
          </label>
        </div>
      </CardContent>
    </Card>
  );
};
