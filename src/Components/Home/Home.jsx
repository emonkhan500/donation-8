import { useState } from "react";
import Banner from "../Banner/Banner";
import DonationList from "../DonationLists/DonationLists";


const Home = () => {
    const [value, setValue]=useState('')
    
    return (
        <div>
            <Banner setValue={setValue}></Banner>
            <DonationList value={value}></DonationList>
        </div>
    );
};

export default Home;