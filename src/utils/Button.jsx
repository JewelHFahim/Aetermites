
const Button = ({ children, className }) => {
  return (
    <button
      className={`${className} text-[19px] font-bold rounded-[17px] py-[17px] px-[50px]`}
      style={{ boxShadow: "4px 4px 11px 0px rgba(55, 55, 55, 0.18)" }}
    >
      {children}
    </button>
  );
};

export default Button;