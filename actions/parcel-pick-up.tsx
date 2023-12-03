import { DEV_API_URL, PROD_API_URL } from "@/config/backend_config";

const parcelPickUp = async (
  cabinet_id: String,
  parcel_id: String,
) => {
  const response = await fetch(`${DEV_API_URL}/driver/pick-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cabinet_id,
      parcel_id,
    }),
  });
  const data = await response.json();
  return data;
};

export default parcelPickUp;
