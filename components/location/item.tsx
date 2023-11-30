import useLocation from "@/hooks/use-location";
import { Location } from "@/types";
interface LocationItemProps {
  location: Location;
}
const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const locationStore = useLocation();
  return (
    <div
      className="flex flex-row gap-1 items-center hover:cursor-pointer hover:bg-[#FEDBC2] p-4 border rounded-sm"
      onClick={() => {
        locationStore.setActive(location);
      }}
    >
      <p className="bg-[#686868] text-white w-8 text-center border rounded-sm text-sm h-6">
        {location?.id}
      </p>
      <p className="text-xs leading-3">{location?.title}</p>
    </div>
  );
};

export default LocationItem;
