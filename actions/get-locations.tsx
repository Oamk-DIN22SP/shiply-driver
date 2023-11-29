import { Location } from "@/types";

const URL=`${process.env.BACKEND_API_URL}/locations`;

const getLocation = async (id: string): Promise<Location> => {
  const res = await fetch(`${URL}`);

  return res.json();
};

export default getLocation;
