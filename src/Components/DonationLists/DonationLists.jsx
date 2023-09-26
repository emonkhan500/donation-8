import { useEffect, useState } from "react";
import DonationList from "../DonationList/DonationList";

const DonationLists = ({value}) => {
  const [donation, setDonation] = useState([]);
  const [filterdonation, setFilterDonation] = useState([]);
  useEffect(()=>{

   const newDonation= donation.filter((item)=>item.category.includes(value) )
   
   setFilterDonation(newDonation)
  },[value] )
  
  
  useEffect(() => {
    fetch("donation.json")
      .then((res) => res.json())
      .then((data) => {setDonation(data) ,setFilterDonation(data)} );
     

    
  }, []);

  return (
    <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container mx-auto gap-6 my-24">
      
     {
      filterdonation?.map(donation =><DonationList donation={donation}></DonationList>)
     }
    </div>
  );
};

export default DonationLists;
