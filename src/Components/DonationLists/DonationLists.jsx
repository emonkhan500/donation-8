import { useEffect, useState } from "react";
import DonationList from "../DonationList/DonationList";

const DonationLists = () => {
  const [donation, setDonation] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => setDonation(data));
    // console.log(donation)
  }, []);

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 my-24">
      
     {
      donation.map(donation =><DonationList donation={donation}></DonationList>)
     }
    </div>
  );
};

export default DonationLists;
