import {FiArrowUpRight} from "react-icons/fi";

function Navbar () {
    return (
        <div className="bg-white">
            <div className=" flex justify-between items-center px-[130px] py-[30px]">
                <h1 className="font-bold  text-[70px]"> Loft Fur </h1>
                    <div className="flex items-center gap-10 text-3xl">
                        <p className="cursor-pointer"> About </p>
                        <p className="cursor-pointer"> Catalog </p>
                    </div>
                    <div className="flex items-center py-2 ">
                        <button className="bg-black text-4xl text-white px-[50px] py-[24px]  flex items-center gap-2  rounded-2xl"> CONTACT <FiArrowUpRight /> </button>
                    </div>
            </div>
            <div className="border-b-2 border-black px-[40px] max-w-[2800px]  mx-auto"></div>
        </div>
    );
}

export default Navbar;
