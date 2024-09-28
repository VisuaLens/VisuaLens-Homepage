import Image from 'next/image';

export default function NavBar() {
    return (
        <>
            <nav className="w-full">
                <div className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-gray-700">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <div className="flex items-center font-black text-[25px]">
                        <Image 
                src="https://avatars.githubusercontent.com/u/181518795?s=200&v=4" // Externe Bild-URL
                alt="Beispielbild" 
                width={50} // Breite auf 50px setzen
                height={50} // Höhe auf 50px setzen
            />
                            <h1>VisuaLens</h1>
                        </div>
                        <div className="text-[15px]">
                            <ul className="flex items-center space-x-6">
                                <li><a href="">Home</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">About Us</a></li>
                                <li><a href="">Contact Us</a></li>
                                <li>
                                    <button className="bg-white text-black py-2 px-4 rounded-md font-bold">
                                        <a href="google.com">Contribute</a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}