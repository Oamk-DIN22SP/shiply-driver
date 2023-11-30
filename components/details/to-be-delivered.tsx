"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import useCabinet from "@/hooks/use-cabinet";

const ToBeDelivered = () => {
  const cabinetStore = useCabinet();

  const onPickUp = () => {
    // api call to update status
    cabinetStore.setState({ state: "picked-up" });
    // find id in store data and update status
    cabinetStore.data.find((cabinet) => {
      if (cabinet.id === cabinetStore.activeCabinetId) {
        cabinet.status = "empty-locker";
      }
    });
  };
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
        <Button onClick={onPickUp} className="w-fit mt-6 bg-[#872222]">
          Lock
        </Button>
        <small>Finalise the delivery!.</small>
      </div>
    </>
  );
};

export default ToBeDelivered;
