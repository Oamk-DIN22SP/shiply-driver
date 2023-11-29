"use client";

import Image from "next/image";

const ReadyToPickUp = () => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src="/temp/ready_to_pickup.png"
          alt="Empty Cabinet"
          fill
          className="aspect-square rounded-md"
        />
      </div>
    </>
  );
};

export default ReadyToPickUp;
