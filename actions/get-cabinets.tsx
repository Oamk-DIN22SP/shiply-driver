import { Cabinets } from "@/types";

const URL=`${process.env.BACKEND_API_URL}/locations`;

const getCabinets = async (locationId: String) => {
  // const res = await fetch(`${URL}`);

  // return res.json();

  const demoData: Cabinets[] = [{
    id: "1",
    number: "1",
    status: "empty-locker",
  },
  {
    id: "2",
    number: "2",
    status: "ready-to-pickup",
  },
  {
    id: "3",
    number: "3",
    status: "to-be-delivered",
  }
]

  return demoData;
};

export default getCabinets;
