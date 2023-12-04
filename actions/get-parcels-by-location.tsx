const URL = `${process.env.NEXT_PUBLIC_API_URL}/parcels/location`;

const getParcelsByLocation = async (location_id: string) => {
  const res = await fetch(`${URL}/${location_id}`);
  return res.json();
};

export default getParcelsByLocation;
