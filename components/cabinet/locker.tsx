import { Cabinets } from "@/types";

interface LockerProps {
  cabinet: Cabinets;
}
const Locker: React.FC<LockerProps> = ({
  cabinet,
}) => {
  return ( 
    <div className="w-[80px] h-[80px] bg-[#D5F9B8] flex items-center justify-center rounded hover:cursor-pointer">
      {cabinet?.id}
    </div>
   );
}
 
export default Locker;