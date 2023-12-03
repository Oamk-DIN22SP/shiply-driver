import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const parcelDrop = async (
  parcel_id: String,
  tracking_number: String,
  cabinet_id: String,
  location_id: String,
) => {
  const response = await fetch(`${DEV_API_URL}/driver/drop-off`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parcel_id, 
      tracking_number, 
      cabinet_id, 
      location_id
    }),
  });
  const data = await response.json();
  return data;
};

export default parcelDrop;
