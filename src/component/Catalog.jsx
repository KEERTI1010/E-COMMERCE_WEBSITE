import img1 from "./Image (5).png";
import img2 from "./Image (6).png";
import img3 from "./Image (7).png";
import img4 from "./Image (8).png";

function Catalog () {
    return (
        <div className="px-[140px] py-[40px]">
            <div className = " flex justify-between items-center">
                <h1 className ="text-[65px] ">SHOP</h1>
            </div>
            <div className="border-b-4 border-black  my-6" ></div>
            <div className = "grid grid-cols-2 gap-4  py-[100px]">
                <div>
                    <img src={img1} className = " w-full max-w-[1370px] h-[1150px] object-cover rounded-xl"/>
                </div>
                <div>
                    <img src={img2} className = "w-full max-w-[1370px] h-[1150px] object-cover rounded-xl"/>
                </div>
                <div>
                    <img src={img3} className = "w-full max-w-[1370px] h-[1150px] object-cover rounded-xl"/>
                </div>
                <div>
                    <img src={img4} className = "w-full max-w-[1370px] h-[1150px] object-cover rounded-xl"/>
                </div>
            </div>
        </div>
    );
}

export default Catalog;