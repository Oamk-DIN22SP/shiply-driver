"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

const EmptyLocker = () => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src="/temp/empty.png"
          alt="Empty Cabinet"
          fill
          className="aspect-square rounded-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button onClick={() => {}} disabled={false} className="w-fit mt-6 bg-[#42820F]">
          Proceed
        </Button>
        <small>Leads to boxes and delivery number input.</small>
      </div>
    </>
  );
};

export default EmptyLocker;
