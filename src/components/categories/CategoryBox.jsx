

const CategoryBox = ({label, iconUrl, isActive, onClick}) => {
  return (
    <div className="flex flex-col text-txt-primary_light gap-1 items-center justify-center h-full active:bg-btn-secondary focus:bg-btn-secondary cursor-pointer rounded p-2 group">
      <img
        className="w-[20px] h-[20px] text-txt-primary_light"
        src={iconUrl}
        alt=""
      />
      <div className="text-center text-base12 text-txt-primary_light group-active:text-bg-white group-active:underline">
        {label}
      </div>
    </div>
  );
}

export default CategoryBox