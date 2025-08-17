import Button from "../Shared/Button";
import airpod from "../../assets/airpod_1.png";
import watch4 from "../../assets/watch4.png";
import pc_2 from "../../assets/pc_2.png";

const Category = () => {
  return (
    <div className="py-3">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/**first col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-black/90 
                    to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={airpod}
              alt=""
              className="w-[170px] h-[170px] absolute bottom-20 left-19 right-0"
            />
          </div>
          {/**second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandYellow 
                    to-brandYellow text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div className="z-10">
              <div className="mb-4">
                <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                <p className="text-2xl font-bold mb-[2px]">ith</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={watch4}
              alt=""
              className="w-[200px] h-[210px] -right-2 absolute bottom-15 lg:top-[-1px]"
            />
          </div>
          {/**third col */}
          <div
            className=" sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary 
                    to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end "
          >
            <div className="z-10">
              <div className="mb-6">
                <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                <p className="text-2xl font-bold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  LapTop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={pc_2}
              alt=""
              className="w-[390px] top-1/2 absolute -translate-y-1/2 -right-0 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
