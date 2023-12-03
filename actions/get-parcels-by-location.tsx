import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const getParcelsByLocation = async (location_id: string) => {
  const res = await fetch(`${DEV_API_URL}/parcels/location/${location_id}`);
  return res.json();
};

export default getParcelsByLocation;
