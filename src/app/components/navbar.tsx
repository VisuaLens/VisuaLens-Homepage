import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="w-full">
            <div className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-sm border-b border-gray-700">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center font-black text-[25px]">
                        <Image 
                            src="https://avatars.githubusercontent.com/u/181518795?s=400&u=12f7bf9ff95faee4c6c94198f25ba7716613757f&v=4"
                            alt="VisuaLens Logo"
                            width={50} 
                            height={50} 
                        />
                        <h1 className="ml-2">VisuaLens</h1>
                    </div>
                    <div className="text-[15px]">
                        <ul className="flex items-center space-x-6">
                            <li>
                                <Link href="/">
                                    <a aria-label="Home">Home</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing">
                                    <a aria-label="Pricing">Pricing</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about">
                                    <a aria-label="About Us">About Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    <a aria-label="Contact Us">Contact Us</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contribute">
                                    <button className="bg-white text-black py-2 px-4 rounded-md font-bold" aria-label="Contribute">
                                        Contribute
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
