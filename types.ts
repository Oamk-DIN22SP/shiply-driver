export interface Location {
  id: string;
  title: string;
  address: string;
};

export interface Cabinets {
  id: string;
  number: string;
  status: string;
  location_id: string;
  parcel_id: string;
  code: string;
  tracking_number: string;
  pacel_destination: string;
};

export interface Parcel {
  id: string;
  status: string;
  parcel_details: string;
  tracking_number: string;
  security_code: string;
  sender_details: string;
  sender_email: string;
  receiver_email: string;
  receiver_details: string;
  receiver_location_id: string;
  sender_location_id: string;
  locker_id: string;

};