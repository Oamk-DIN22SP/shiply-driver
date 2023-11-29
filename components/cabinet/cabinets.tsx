import Locker from "./locker";
import CabinetStaticInfo from "./static-info";

const Cabinets = () => {
  return (
    <div>
      <CabinetStaticInfo />
      <div className="py-4 flex gap-4 flex-wrap items-center justify-center">
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
        <Locker />
      </div>
    </div>
  );
};

export default Cabinets;
