const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h2 className="text-5xl font-bold text-center pt-12">
              I Grow By Helping People In Need
            </h2>
            <div className=" text-center mt-7">
              <input
                className="border p-2 w-96 rounded"
                type="text"
                placeholder="Search"
              />
              <button className="bg-red-600 p-2 rounded border text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
