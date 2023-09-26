const ShowDonation = ({ donation }) => {
  // console.log(donation)
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_button_bg,
    text_color,
    description,
    price,
  } = donation;
  return (
    <div>
      <div style={{ color: text_color, backgroundColor:card_bg }} className="">
        <a
          href="#"
          className="flex flex-col items-center  md:flex-row md:max-w-xl rounded-lg   "
        >
          <img
            className="rounded-t-lg w-full h-full md:w-48 mr-4"
            src={picture}
            alt="Placeholder Image"
          />
          <div className="flex flex-col justify-between leading-normal ">
          <h3 style={{ color: text_color, backgroundColor: text_button_bg}} className="w-24 rounded text-center">{category}</h3>
          <h2 className="text-black text-2xl font-bold">{title}</h2>
          <h2>{price}</h2>
          <button  style={{ color: text_color, backgroundColor: text_button_bg}} className="mt-3 px-2 py-2  mb-7  rounded">View details</button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ShowDonation;
