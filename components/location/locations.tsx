"use client";

import { useEffect } from "react";
import useLocation from "@/hooks/use-location";
import getLocation from "@/actions/get-locations";
import LocationItem from "./item";
import getCabinets from "@/actions/get-cabinets";
import useCabinet from "@/hooks/use-cabinet";
import useParcel from "@/hooks/use-parcels";
import getParcelsByLocation from "@/actions/get-parcels-by-location";

const Locations = () => {
  // hook to get data from store
  const locationStore = useLocation();
  const cabinetStore = useCabinet();
  const parcelStore = useParcel();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const locations = await getLocation();
        locationStore.setState({ data: locations });
        locationStore.setActive(locations[0]);
        const cabinets = await getCabinets(locations[0].id);
        cabinetStore.setState({ data: cabinets });
        const parcels = await getParcelsByLocation(locations[0].id);
        parcelStore.setState({ data: parcels });
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-4">
      {locationStore?.data?.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
