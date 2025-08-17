import Button from "../Shared/Button";
import casque_10 from "../../assets/casque_10.png";
import xbox_1 from "../../assets/xbox_1.png";
import watch1 from "../../assets/watch1.png";

const Category = () => {
  return (
    <div className="py-3">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/**first col */}
          <div
            className=" sm:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/90
                    to-gray-100/90 text-white rounded-3xl relative h-[320px] flex items-end"
          >
            <div>
              <div className="mb-4">
                <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                <p className="text-2xl font-bold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  lapTop
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={xbox_1}
              alt=""
              className="w-[290px] top-1/2 absolute -translate-y-1/2 -right-0 
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/**second col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-green-400/90 
                    to-green-400/70 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="text-3xl text-white font-bold">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-50 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-green-400/90"}
                />
              </div>
            </div>
            <img
              src={watch1}
              alt=""
              className="w-[190px] h-[170px] absolute bottom-0 left-19 right-0 
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
          {/**third col */}
          <div
            className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90
                    to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start"
          >
            <div>
              <div className="mb-4">
                <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                <p className="text-2xl font-bold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Earphone
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img
              src={casque_10}
              alt=""
              className="w-[150px] absolute bottom-0 left-19 right-0 
                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
