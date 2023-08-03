const FooterColumn = () => {
  return (
    <div>
      <h2 className="text-[27px] font-medium text-[#EAEAEA] mb-[14px]">
        About Store
      </h2>
      <div className="w-[194px] h-[3px] bg-[#777] opacity-60"></div>
      <ul className=" mt-[28px] flex flex-col gap-[16.5px] font-medium text-[#FFF] opacity-60">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">Product</a>
        </li>
        <li>
          <a href="">About us</a>
        </li>
        <li>
          <a href="">Festival Offer</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
        <li>
          <a href="">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterColumn;
