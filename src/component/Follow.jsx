import {FiArrowUpRight} from "react-icons/fi";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";


function Follow () {
    return (
        <div className = "px-[140px] py-[380px]">
            <div className="flex items-center justify-between">
                <h1 className="text-[60px]">FOLLOW US</h1>
                <h1 className="flex items-center justify-end text-[60px]">CHECK <FiArrowUpRight /></h1>
            </div>
                <div className="border-b-4 border-black px-[40px] py-[20px] max-w-[2800px]  mx-[5px]" ></div>
                <div className="py-[80px] grid grid-cols-4 gap-4">
                    <div>
                        <img src={img1} className="rounded-2xl w-full"/>    
                    </div>
                    <div className="py-[100px]">
                        <img src={img2} className="rounded-2xl w-full "/>    
                    </div>
                    <div className="py-[80px]">
                        <img src={img3} className="rounded-2xl w-full "/>    
                    </div>
                    <div className="py-[50px]">
                        <img src={img4} className="rounded-2xl w-full "/>    
                    </div>
                </div>
        </div>
    );
}

export default Follow;