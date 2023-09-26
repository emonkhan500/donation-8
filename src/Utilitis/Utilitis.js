const getClickDonation = (id) => {
  const clickDonation = localStorage.getItem("donation");
  if (clickDonation) {
    return JSON.parse(clickDonation);
  }
  return [];
};

const saveDonation = id =>{
const clickDonations = getClickDonation();

const exists = clickDonations.find( donationId => donationId === id );
if(!exists){
    clickDonations.push(id);
    localStorage.setItem("donation", JSON.stringify(clickDonations))
}
}


export { getClickDonation , saveDonation};
