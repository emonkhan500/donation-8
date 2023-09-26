import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getClickDonation } from "../../Utilitis/Utilitis";
import ShowDonation from "../ShowDonation/ShowDonation";

const Donation = () => {
  const donation = useLoaderData();
  const [donatedItem, setDonatedItem] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const saveDonationIds = getClickDonation();
    if (donation.length > 0) {
      const donated = [];
      for (const id of saveDonationIds) {
        const donate = donation.find((donate) => donate.id === id);
        if (donate) {
          donated.push(donate);
        }
      }
      setDonatedItem(donated);
    }
  }, []);

  const showSeeAllButton = donatedItem.length > 4 && dataLength !== donatedItem.length;

  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {donatedItem.slice(0, dataLength).map((donation) => (
          <ShowDonation donation={donation} key={donation.id} />
        ))}
      </div>
      {showSeeAllButton && (
        <div className="text-center mt-5">
          <button
            onClick={() => setDataLength(donatedItem.length)}
            className="btn bg-green-800 text-white text "
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
