import img1 from "./Image (13).png";
import {FiArrowUpRight} from "react-icons/fi";

function Features () {
    return (
        <div className = "px-[150px]  py-[80px]">
            <img src={img1} className="w-full rounded-xl"/>
            <div className="flex justify-between items-start mt-[60px]">
                <h1 className=" text-[60px] w-[40%] leading-tight">
                    HOMESTEAD FURNITURE
                </h1>
                <p className="text-[35px] py-[120px]">
                    An enthusiasm for creative living solutions develops into a bigger 
                    mission for ourselves and the rest of the planet. Discover new concepts, 
                    creative design inspiration, and forward-thinking ideas for contemporary,
                     multipurpose living by browsing our archive.
                </p>
                <br></br>
                <h1 className = "flex items-center gap-2 text-[35px]">ABOUT <FiArrowUpRight /></h1>
                <div className="border-b-4 border-black px-[540px] py-[620px] " ></div>
            </div>
        </div>
    );
}

export default Features;