import { Location } from "@/types";

const URL=`${process.env.BACKEND_API_URL}/locations`;

const getLocation = async () => {
  // const res = await fetch(`${URL}`);

  // return res.json();

  const demoData: Location[] = [{
    id: "1",
    title: "Location 1",
  },
  {
    id: "2",
    title: "Location 2",
  }]

  return demoData;
};

export default getLocation;
