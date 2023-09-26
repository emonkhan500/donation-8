
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import { getClickDonation } from '../../Utilitis/Utilitis';

const Pi = () => {
  const [localStorageData, setLocalStorageData] = useState([]);

  // Fetch the stored donation data from localStorage when the component mounts
  useEffect(() => {
    const storedDonationAmounts = getClickDonation();
    setLocalStorageData(storedDonationAmounts);
  }, []);

  const totalDonations = 12;
  const dynamicDonations = localStorageData.length; // Length of data from localStorage
  const remainingDonations = totalDonations - dynamicDonations;

  // Calculate the percentages
  const totalDonationsPercentage = (remainingDonations / totalDonations) * 100;
  const dynamicDonationsPercentage = (dynamicDonations / totalDonations) * 100;

  const data = [
    { name: 'Total Donations', value: totalDonations },
    { name: 'Dynamic Donations', value: dynamicDonations },
  ];

  const colors = ['#FF6384', '#36A2EB'];

  return (
    <div className='container mx-auto'>
      <PieChart width={1380} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={750}
          cy={200}
          outerRadius={150}
          fill="#8884d8"
          label={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p className='text-center'>
        Total Donations Percentage: {totalDonationsPercentage.toFixed(2)}%
      </p>
      <p className='text-center'>
        Dynamic Donations Percentage: {dynamicDonationsPercentage.toFixed(2)}%
      </p>
    </div>
  );
};

export default Pi;