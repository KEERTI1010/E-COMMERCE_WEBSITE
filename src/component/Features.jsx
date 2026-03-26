import img1 from "./Image (13).png";
import { FiArrowUpRight } from "react-icons/fi";

function Features () {
    return (
        <div className="px-[150px] py-[10px]">

            <img src={img1} className="w-full rounded-xl" />

            <div className="flex justify-between items-start mt-[140px]">

                <h1 className="text-[60px] w-[40%] ">
                    HOMESTEAD FURNITURE
                </h1>

                <div className="w-[40%]">

                    <p className="text-[33px] ">
                        An enthusiasm for creative living solutions develops into a bigger 
                        mission for ourselves and the rest of the planet. Discover new concepts, 
                        creative design inspiration, and forward-thinking ideas for contemporary,
                        multipurpose living by browsing our archive.
                    </p>

                    <div className="mt-[260px]">
                        <div className="flex items-center justify-end">
                            <span className="text-[32px] flex items-center justify-end gap-2">
                                ABOUT <FiArrowUpRight />
                            </span>
                        </div>
                        <div className="border-b border-black mt-2"></div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Features;