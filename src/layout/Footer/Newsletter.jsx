const Newsletter = () => {
    return (
      <div className="">
        <h2 className="text-[27px] font-medium text-[#EAEAEA] mb-[14px]">
          Newsletter
        </h2>
        <div className="w-[194px] h-[3px] bg-[#777] opacity-60"></div>
        <p className="text-[13px]  mt-[28px] w-[240.5px] text-[#FFFFFFBB]">
          Sign up for our newsletter and be the first to receive the news about
          offers, new arrivals and amazing events.
        </p>
  
        <form>
          <div>
            <div className="  relative bg-white rounded-[3px] text-[11px] w-[240.5px] my-[35px] flex  justify-between">
              <input
                className=" w-full pl-[5px]  py-[9.5px]"
                type="email"
                placeholder="Your email address "
              />
              <button type="submit" className="bg-[#0E0E0E] text-white  px-[9.5px] rounded-[3px]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="text-[13px] font-light text-[#FFFFFFBB]">
            <input type="checkbox" />
  
            <sapn> I have read the information regarding </sapn>
  
            <p className="w-[240.5px]">
              the processing of my personal data by INGLOT SP. Z O.O. in the
              context of the newsletter.
            </p>
          </div>
        </form>
      </div>
    );
  };
  
  export default Newsletter;