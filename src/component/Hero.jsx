import img1 from "./Image.png";
import img2 from "./Image (1).png";
import img3 from "./Image (2).png";
import img4 from "./Image (3).png";
import {FiArrowUpRight} from "react-icons/fi";


function Hero () {
    return (
        <div className = "px-[130px] py-[150px]">
            <div className="text-[248px] leading-[190px] font-medium py-[100px] px-[40px]">
                <div className="flex items-center gap-8 ">
                    <span>WE</span>
                    <img src={img1} className="w-[1250px] h-[200px]  rounded-s-xl"/>
                    <span>CREATE</span>
                </div>
                
                <div className="flex items-center gap-8 py-[60px] ">
                    <span>FURNITURE</span>
                    <img src={img2} className="w-[1220px] h-[200px] rounded-s-xl"/>
                </div>
                
                <div className="flex items-center gap-8 py-[10px]" >
                    <span>FOR</span>
                    <span>YOUR</span>
                    <img src={img3} className="w-full max-w-[1000px] h-[210px]  rounded-s-xl"/>
                    <span>HOME</span>
                </div>
                
                <div className="flex items-center gap-8 py-[30px]" >
                    <span>AND</span>
                    <img src={img4} className=" max-w-[300px] h-[200px] rounded-s-xl" />
                    <span>BUSINESS</span>
                    <button className="ml-2 bg-black text-white text-[68px] px-[75px] py-[4px] rounded-3xl flex items-center gap-4">BROWSE <FiArrowUpRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Hero;