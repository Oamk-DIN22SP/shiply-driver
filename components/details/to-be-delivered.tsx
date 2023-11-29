"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

const ToBeDelivered = () => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src="/temp/to_be_delivered.png"
          alt="Empty Cabinet"
          fill
          className="aspect-square rounded-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <Button onClick={() => {}} disabled={false} className="w-fit mt-6 bg-[#872222]">
          Lock
        </Button>
        <small>Finalise the delivery!.</small>
      </div>
    </>
  );
};

export default ToBeDelivered;
