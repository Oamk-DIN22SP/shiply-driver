"use client";

import Image from "next/image";

const DeliveryComplete = () => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src="/temp/complete.png"
          alt="Delivery Complete"
          fill
          className="aspect-square rounded-md"
        />
      </div>
    </>
  );
};

export default DeliveryComplete;
