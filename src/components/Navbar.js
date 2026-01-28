import darkLogo from "../assets/darkLogo.svg"
import lightLogo from "../assets/lightLogo.svg"
import Image from "next/image";

const vendors = [
    "ot-store", "jwel-co"
]

function Navbar({ activeVendor = "ot-store", setActiveVendor }) {
    return (
        <div className="flex flex-row justify-between items-center py-4 w-full">
            <div className="shrink-0">
                <Image width={200} height={40} src={lightLogo} alt="logo" />
            </div>
            <nav className="flex flex-row items-center gap-4">
                {vendors.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveVendor && setActiveVendor(item)}
                        className={`relative text-[14px] font-semibold transition-all duration-300 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#159047] after:transition-all after:duration-300 capitalize whitespace-nowrap ${activeVendor === item
                                ? 'text-[#159047] after:w-full'
                                : 'text-gray-700 hover:text-[#159047] after:w-0 hover:after:w-full'
                            }`}
                    >
                        {item.replace('-', ' ')}
                    </button>
                ))}
            </nav>
        </div>
    );
}

export default Navbar;