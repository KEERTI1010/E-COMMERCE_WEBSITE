import img1 from "./Image (9).png";
import img2 from "./Image (10).png";
import img3 from "./Image (0).png";

import {FiArrowUpRight} from "react-icons/fi";

function Blog () {
    return (
        <div className = "px-[140px] " >
            <div className="flex items-center justify-between">
                <h1 className="text-[60px]">BLOG</h1>
                <h1 className="text-[60px] flex items-center justify-between" >READ<FiArrowUpRight /> </h1>    
            </div>
            <div className="border-b-4 border-black px-[40px] pb-[50px] max-w-[2800px]  mx-[5px]" ></div>

                <div className = "flex justify-between items-center">
                    <img src={img1} className="py-[80px] pt-[120px] w-[50%] rounded-xl"/>
                    <div className="">
                        <h1 className="font-bold text-[32px]">THE ULTIMATE SOFA BUYING GUDE</h1>
                            <p className="text-[32px] max-w-[1200px] pt-[30px] pb-[110px]">
                                The versatility of our living space is more crucial than ever. But buying a sofa might be a difficult undertaking. Your needs and the size of your living area will determine everything. However, don't worry; we are here to help you.
                            </p>
                            <h1 className="flex items-center justify-end text-[30px] gap-2 py-[20px]">ABOUT <FiArrowUpRight /></h1>
                        <div className="border-b-4 border-black px-[40px]  max-w-[2800px]  mx-auto" ></div>
                    </div>
                </div>

                <div className = "flex justify-between items-center ">
                    <img src={img2} className="py-[80px] w-[50%] rounded-xl"/>
                    <div className="">
                        <h1 className="font-bold text-[32px]">A BEDROOM MUST HAVE SOMETHING LIKE THIS</h1>
                            <p className="text-[32px] max-w-[1200px] pt-[30px] pb-[110px]">
Your level of comfort when getting into and out of bed can be greatly influenced by the bed frame you choose. It may significantly affect how you want your bedroom to feel and look.                            </p>
                            <h1 className="flex items-center justify-end text-[30px] gap-2 py-[20px]">ABOUT <FiArrowUpRight /></h1>
                        <div className="border-b-4 border-black px-[40px]  max-w-[2800px]  mx-auto" ></div>
                    </div>
                </div>

                <div className = "flex justify-between items-center ">
                    <img src={img3} className="py-[80px] w-[50%] rounded-xl"/>
                    <div className="">
                        <h1 className="font-bold text-[32px]">WHY IS A TV CONSOLE A MUST IN EVERY HOUSE?</h1>
                            <p className="text-[32px] max-w-[1200px] pt-[30px] pb-[110px]">
People do a lot of research to make sure they purchase the ideal television. And like the rest of us, you want to keep that gorgeous flat screen in your living room or bedroom on a table or stand.                            </p>
                            <h1 className="flex items-center justify-end text-[30px] gap-2 py-[20px]">ABOUT <FiArrowUpRight /></h1>
                        <div className="border-b-4 border-black px-[40px]  max-w-[2800px]  mx-[5px]" ></div>
                    </div>
                </div>
        </div>   

    );
}

export default Blog;