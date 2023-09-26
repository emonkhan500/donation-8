import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../../Utilitis/Utilitis";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  // console.log(donation)
  
const handleDonation =()=>{
saveDonation(idInt);
  toast('You donation complete');

}

  return (
    <div className="px-36">
      <div className="relative flex justify-center items-center">
                <img className="w-10 md:w-[1320px] md:h-[700px] object-cover" src={donation.details_picture} alt="" />   
                <div className="md:w-[735] lg:w-[1320px] lg:h-[130px] lg:top-[570px] lg:rounded-b lg:absolute lg:inset-0 lg:bg-black lg:opacity-40 lg:left-[148px]"></div>

                    
            </div>
            <div>
              <button onClick={handleDonation} className="rounded px-4  text-white lg:left-[346px] btn bg-red-600 lg:top-[710px] absolute">Donate $290</button>
            </div>
      <p className="text-4xl font-bold mt-14 mb-6">{donation.title}</p>
      <p className="mb-32">{donation.description}</p>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
