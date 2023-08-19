
import Categories from '../categories/Categories'
import TourCard from './TourCard';

const Tours = () => {
  return (
    <>
      <div className="w-full bg-bg-bg_light">
        <div className="bg-bg-bg_light">
          <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] bg-bg-white mx-auto">
            <h2 className="text-[32px] font-medium leading-10 tracking-wider my-[20px]">
              Tours
            </h2>
          </div>
        </div>
      <Categories></Categories>
      <TourCard></TourCard>
      </div>
    </>
  );
}

export default Tours