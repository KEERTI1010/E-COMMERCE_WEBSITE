import {FiArrowUpRight} from "react-icons/fi";
import img1 from "./Rectangle (2).png";
import img2 from "./Rectangle (3).png";
import img3 from "./Rectangle (4).png";
import img4 from "./Rectangle (5).png";

function SaleCard () {
    return (
        <div className = "px-[140px] py-[80px]" >
            <div className = "flex justify-between items-center">
                <h1 className = "text-6xl">NEW</h1>
                <h1 className = "text-4xl flex items-center gap-3">BROWSE <FiArrowUpRight /></h1>
            </div>
            <div className="border-b-2 border-black px-[40px] py-[30px] max-w-[2800px]  mx-auto" ></div>

            <div className = "flex justify-between items-center">
                <div className = "py-[130px]">
                    <img src={img1} className = "w-[600px] py-8"/>
                    <p className = "text-4xl py-8">Name of the item</p>
                    <p className = "text-4xl">$500</p>
                </div>

                <div>
                    <img src={img2} className = "w-[600px] py-8"/>
                    <p className = "text-4xl py-8">Name of the item</p>
                    <p className = "text-4xl">$500</p>
                </div>

                <div>
                    <img src={img3} className ="w-[600px] py-8"/>
                    <p className = "text-4xl py-8">Name of the item</p>
                    <p className = "text-4xl">$500</p>
                </div>

                <div>
                    <img src={img4} className = "w-[600px] py-8"/>
                    <p className = "text-4xl py-8">Name of the item</p>
                    <p className = "text-4xl">$500</p>
                </div>
            </div>
            <div className="border-b-2 border-black px-[40px] py-[10px] max-w-[2800px]  mx-auto" ></div>
        </div>
    )
}

export default SaleCard;