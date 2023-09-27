import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div>
            <h4 className="text-center font-extrabold mt-80"> 404 error</h4>
            <Link className="flex  justify-center mt-5 items-center" to='/'><button className="bg-gray-500  py-6 text-4xl font-bold">Back</button></Link>
        </div>
        </div>
    );
};

export default Error;