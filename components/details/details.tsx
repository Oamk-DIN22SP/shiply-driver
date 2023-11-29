import DeliveryComplete from "./complete";
import Empty from "./empty";
import EmptyLocker from "./empty-locker";
import PickedUp from "./picked-up";
import PlacePercel from "./place-percel";
import ReadyToPickUp from "./ready-to-pickup";
import ToBeDelivered from "./to-be-delivered";

const Details = () => {
  return ( 
    <div>
      {/* <EmptyLocker /> */}
      {/* <Empty /> */}
      {/* <DeliveryComplete /> */}
      {/* <ReadyToPickUp /> */}
      {/* <PickedUp /> */}
      {/* <ToBeDelivered /> */}
      <PlacePercel />
    </div>
   );
}
 
export default Details;