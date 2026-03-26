import img1 from "./Image (4).png";
import {FiArrowUpRight} from "react-icons/fi";

function About () {
    return (
        <div className = "px-[140px] py-[80px] flex justify-between items-center" >
            <div className = "flex gap-20 items-center">
                <img src={img1}  className="max-w-[1300px] h-[1600px] object-cover rounded-xl"/>
            </div>
            <div className = "px-[160px] text-[34px] py-[30px] leading-[36px]">
                <p>A great business, in our opinion, is built
                    around excellent people. Our qualified designers
                    are committed to realizing your particular vision
                    and are here to help you make the most of your 
                    space. able to handle any situation and level of your project.
                </p>
                <div className = " flex justify-between items-center mt-80">
                    <h1 className = "flex justify-between items-center gap-2 text-3xl">ABOUT <FiArrowUpRight /></h1>
                    <h1 className = "flex justify-between items-center gap-2 text-3xl">MANUFACTURING <FiArrowUpRight /></h1>
                </div>
                <div className="border-b-4 border-black px-[40px] py-[20px] max-w-[2800px]  mx-auto" ></div>
            </div>
        </div>
    
    );
}

export default About;