import { ReactNode } from "react";

const TopBar: React.FC<{ heading: ReactNode }> = ({ heading }) => {
  return (
    <div className="grid grid-cols-[20%_55%_20%] items-center gap-4 my-16">
      <div className="flex flex-col gap-2 w-auto">
        {heading}
        <p className="text-textGrey">4:45PM | 22nd October,2022</p>
      </div>

      <div>
        <input className="w-full h-10 px-5 rounded-md" />
      </div>
      <div className="flex justify-end gap-4">
        <div>
          <p className="text-darkBlue font-bold text-md">Tamara B</p>
          <p className="text-textGrey">Admin</p>
        </div>
        <img src="images/avatar.png" />
      </div>
    </div>
  );
};

export default TopBar;
