import img1 from "./Image (11).png";
import img2 from "./Image (12).png";


function Testimonial () {
    return (
        <div className = "p-[130px]">
            <div>
                <h1 className = "text-[60px]">TESTIMONIALS</h1>
            </div>
            <div className="border-b-4 border-black px-[40px] py-[30px] max-w-[2800px]  mx-auto" ></div>

            <div className = "text-[32px] grid grid-cols-2 gap-4 py-[130px]">

                <div className = "border border-black border-b-4 py-14 object-cove rounded-2xl">    
                <div className = "flex items-center">
                    <img src={img1} className="px-[60px] py-[40px] w-[250px]" />
                    <div className="flex flex-col">
                    <h1 className="font-bold ">JOHN DOE</h1>
                    <h1 classsName="text-black">Lorem ipsum</h1>
                    </div>
                </div>
                <p className="px-16">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.Suspendisse varius enim in eros 
                    elementum tristique.Duis cursus,mi quis viverra
                    ornare,eros dolor interdum nulla, ut commodo diam
                    libero vitae erat.
                </p>
                </div>

                <div className = "border border-black border-b-4 py-14 object-cove rounded-2xl">
                <div className = "flex items-center">
                <img src={img2}  className="px-[60px] py-[40px] w-[250px]" />
                    <div className="flex flex-col">
                    <h1 className="font-bold ">JANE DOE</h1>
                    <h1 classsName="text-black">Lorem ipsum</h1>
                    </div>
                </div>
                <p className="px-16">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.Suspendisse varius enim in eros 
                    elementum tristique.Duis cursus,mi quis viverra
                    ornare,eros dolor interdum nulla, ut commodo diam
                    libero vitae erat.</p>
                </div>

                <div className = "border border-black border-b-4 py-14 object-cover rounded-2xl">
                <div className = "flex items-center">
                    <img src={img2} className = "px-[60px] py-[40px] w-[250px]"/>
                    <div className = "flex flex-col">
                    <h1 className = "font-bold">JANE DOE</h1>
                    <h1 className ="text-black">Lorem ipsum</h1>
                    </div>
                </div>
                <p className = "px-16">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.Suspendisse varius enim in eros 
                    elementum tristique.Duis cursus,mi quis viverra
                    ornare,eros dolor interdum nulla, ut commodo diam
                    libero vitae erat.</p>
                </div>
            
                <div className = "border border-black border-b-4 py-14 object-cover rounded-2xl">
                <div className = "flex items-center">
                    <img src={img1} className = "px-[60px] py-[40px] w-[250px]"/>
                    <div className = "flex flex-col">
                    <h1 className = "font-bold">JOHN DOE</h1>
                    <h1 className ="text-black">Lorem ipsum</h1>
                    </div>
                </div>
                <p className = "px-16">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.Suspendisse varius enim in eros 
                    elementum tristique.Duis cursus,mi quis viverra
                    ornare,eros dolor interdum nulla, ut commodo diam
                    libero vitae erat.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;