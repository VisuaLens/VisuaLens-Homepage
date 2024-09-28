

export default function NavBar() {
    return (
        <>
        <div className="font-sans font-semibold">
            <div className="flex float-left mr-4 p-4 font-black">
                <img src="" alt="" />
                <h1>VisuaLens</h1>
            </div>
            <div className="mr-4 float-right">
                <ul className="flex p-3 ">
                    <li className="float-right mr-4"><a href="">Home</a></li>
                    <li className="float-right mr-4"><a href="">Pricing</a></li>
                    <li className="float-right mr-4"><a href="">About Us</a></li>
                    <li className="float-right mr-4"><a href="">Contact Us</a></li>
                    <li><button className="bg-white text-black p-2 rounded-xl float-right"><a href="google.com">Contribute</a></button></li>




                </ul>
            </div>
        </div>
        </>
    )
}
