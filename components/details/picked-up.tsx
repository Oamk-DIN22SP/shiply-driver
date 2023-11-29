"use client";

import Image from "next/image";

const PickedUp = () => {
  return (
    <>
      <div className="aspect-square relative">
        <Image
          src="/temp/picked_up.png"
          alt="Empty Cabinet"
          fill
          className="aspect-square rounded-md"
        />
      </div>
    </>
  );
};

export default PickedUp;
