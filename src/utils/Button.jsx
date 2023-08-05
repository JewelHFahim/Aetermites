
const Button = ({ children, className, style }) => {
  return (
    <button
      className={`${className} text-[11px] lg:text-[19px] font-[700] rounded-[8px] w-[107px] h-[30px] lg:w-[193px] lg:h-[57px]`}>
      {children}
    </button>
  );
};

export default Button;