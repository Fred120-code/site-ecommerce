import Button from "../Shared/Button"
import airpod from "../../assets/airpod_1.png"
import casque_3 from '../../assets/casque_3.png'
import pc_2 from '../../assets/pc_2.png'

/** 
import casque_2 from '../../assets/imgCategory/casque_2.png'
import casque_3 from '../../assets/imgCategory/casque_3.png'
import xbox_1 from '../../assets/imgCategory/xbox_1.png'
*/
const Category = () => {
  return (
    <div className='py-3'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/**first col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 z-[-2]
                    to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                            <p className="text-2xl font-semibold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                            <Button
                                text="Browse"
                                bgColor={"bg-primary"}
                                textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={airpod} alt="" className="w-[170px] h-[170px] absolute bottom-20 left-19 right-0 z-[-1]"/>
                </div>
                {/**second col */}
                <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 z-[-2]
                    to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                            <p className="text-2xl font-bold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Earphone</p>
                            <Button
                                text="Browse"
                                bgColor={"bg-white"}
                                textColor={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={casque_3} alt="" className="w-[220px] h-[220px] -right-4 absolute bottom-20 lg:top-[-10px] z-[-1]"/>
                </div>
                {/**third col */}
                <div className=" col-span-2 py-10 pl-5 bg-gradient-to-br from-primary z-[-2]
                    to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className="text-3xl text-gray-300 font-bold">Enjoy</p>
                            <p className="text-2xl font-bold mb-[2px]">with</p>
                            <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">lapTop</p>
                            <Button
                                text="Browse"
                                bgColor={"bg-white"}
                                textColor={"text-primary"}
                            />
                        </div>
                    </div>
                    <img src={pc_2} alt="" className="w-[290px] top-1/2 absolute -translate-y-1/2 -right-0 z-[-1]"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category