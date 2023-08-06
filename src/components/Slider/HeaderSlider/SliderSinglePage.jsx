const SliderSinglePage = ({data}) => {

    return (
        <div className="w-full lg:h-[78vh]">
           <img src={data.img} alt="" className="h-full w-full object-cover" />
        </div>
    );
};

export default SliderSinglePage;