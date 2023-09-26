import { Link } from "react-router-dom";

const DonationList = ({ donation }) => {
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
    <Link to={`/donate/${id}`}>
    <div style={{ color: text_color, backgroundColor:card_bg }} className="max-w-sm ">
        <a href="#">
          <img className="rounded-t-lg w-full" src={picture} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
          <h5 style={{ color: text_color, backgroundColor: text_button_bg}} className="w-24 rounded text-center">
              {category}
            </h5>
          </a>
          <div className="flex gap-9">
            <p>
              <h5 style={{ color: text_color }}>{title}</h5>
            </p>
            <p>{price}</p>
          </div>
          <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div></Link>
  );
};

export default DonationList;
