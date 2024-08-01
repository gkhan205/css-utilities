import { Metadata } from "next";

import { BoxShadow } from "@/components/modules/BoxShadow";

export const metadata: Metadata = {
  title: "Box Shadow",
  description: "CSS Utilities by Ghazi",
};

export default function BoxShadowPage() {
  return (
    <>
      <BoxShadow />
    </>
  );
}
