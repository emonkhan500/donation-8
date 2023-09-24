

const Banner = () => {
    return (
        <div style={{backgroundColor:'#FFFEF2'}} className="h-96">
          <h2 className="text-5xl font-bold text-center pt-12">I Grow By Helping People In Need</h2>
          <div className=" text-center mt-7">
            <input className="border p-2 w-96 rounded" type="text" placeholder="Search" />
            <button className="bg-red-600 p-2 rounded border text-white">Search</button>
            </div>  
        </div>
    );
};

export default Banner;