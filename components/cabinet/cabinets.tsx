"use client";
import Locker from "./locker";
import CabinetStaticInfo from "./static-info";
import useCabinet from "@/hooks/use-cabinet";

const Cabinets = () => {
  const cabinetStore = useCabinet();
  return (
    <div>
      <CabinetStaticInfo />
      <div className="py-4 flex gap-4 flex-wrap items-center justify-center">
        {cabinetStore?.data?.map((cabinet) => (
          <Locker key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>
    </div>
  );
};

export default Cabinets;
