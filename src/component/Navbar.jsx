function Navbar () {
    return (
        <div className="bg-white flex justify-between items-center px-8 py-0">
            <h1 className="font-bold text-4xl"> Loft Fur </h1>
                <div className="flex items-center gap-8 text-xl">
                    <p className="cursor-pointer"> About </p>
                    <p className="cursor-pointer"> Catalog </p>
                </div>
                <div className="flex items-center py-2 gap-8">
                    <button className="bg-black text-2xl text-white px-6 py-2 gap-2 font-medium rounded-lg"> Contact </button>
                </div>
        </div>
    );
}

export default Navbar;
