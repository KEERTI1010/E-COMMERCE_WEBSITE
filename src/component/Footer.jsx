import {FiArrowUpRight} from "react-icons/fi";

function Footer () {
    return (
        <div className="bg-black text-white px-[130px] pt-[70px] font-sans">
            <div className="grid grid-cols-2">

                <div>
                    <div>
                        <h1 className="text-[60px] font-bold">LOFT FUR</h1>
                        <h2 className="text-[30px]">LOFT FURNITURE</h2>
                    </div>
                    <div className="py-[120px]">
                        <h2 className="text-[30px] font-bold py-[10px]">FOLLOW US</h2>
                        <h2 className="text-[30px] py-[10px] flex gap-2">INSTAGRAM <FiArrowUpRight /></h2>
                        <h2 className="text-[30px] py-[10px] flex gap-2">PINTEREST <FiArrowUpRight /></h2>
                    </div>
                </div>


                <div className="grid grid-cols-3 text-[30px]">
                    <div>
                        <h2 className="py-[10px] font-bold">FOR COSTUMERS</h2>
                        <h2 className="py-[10px]">CATALOG</h2>
                        <h2 className="py-[10px]">PAY</h2>
                        <h2 className="py-[10px]">DELIVERY</h2>
                        <h2 className="py-[10px]">RETURN</h2>
                        <h2 className="py-[10px]">FAQ</h2>
                    </div>

                    <div>
                        <h2 className="py-[10px] font-bold">COMPANY</h2>
                        <h2 className="py-[10px]">ABOUT</h2>
                        <h2 className="py-[10px]">TESTIMONIALS</h2>
                        <h2 className="py-[10px]">CONTACT</h2>
                    </div>

                    <div>
                        <h2 className="py-[10px] font-bold">ASK a QUESTION</h2>
                        <h2 className="flex py-[10px] gap-2">CALL <FiArrowUpRight /></h2>
                        <h2 className="flex py-[10px] gap-2">TELEGRAM <FiArrowUpRight /></h2>
                        <h2 className="py-[10px]">INFO@LOFT.SITE</h2>
                        <h2 className="py-[10px]">+0 999 777 11 00</h2> 
                    </div>
                </div>
            </div>
            <div className="border-b-4 border-white px-[40px] max-w-[2800px]  mx-[5px]" ></div>
            <div className="py-[20px] grid-cols-3 text-[30px] flex items-center justify-between">
                <h2 className="py-[10px]">©2022 LOFT FUR</h2>
                <h2 className="py-[10px]">PRIVACY POLICY</h2>
                <h2 className="py-[10px]">DESIGN – ALARM</h2>
            </div>
        </div>
    );
}

export default Footer;