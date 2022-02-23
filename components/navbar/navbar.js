import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { logo } from "../../constants/images"

export default function Navbar() {
    let [toggle, setToggle] = useState(false)

    return (
        <div className="w-screen h-auto p-1 flex justify-between items-center">
            <section className="flex justify-between text-lg italic items-center text-white">
                <Image src={logo} width="100" height="100" className="rounded-full" />
                <p className="">GROSTORE</p>
            </section>
            <section className="hidden md:flex items-center">
                <ul className="text-gray-300 w-auto flex items-center justify-between text-lg ">
                    <li className="mx-3  md:mx-6 hover:text-yellow-600  hover:scale-125 transition duration-200">
                        <Link href="/">HOME</Link>
                    </li>
                    <li className="mx-3  md:mx-6 hover:text-yellow-600  hover:scale-125 transition duration-200">
                        <Link href="/">CATEGORIES</Link>
                    </li>
                    <li className="mx-3  md:mx-6 hover:text-yellow-600  hover:scale-125 transition duration-200">
                        <Link href="/">OFFERS</Link>
                    </li>
                    <li className="w-[4vh] h-[4vh] p-2 bg-white rounded-full mx-3  md:mx-6 hover:text-red-600  hover:scale-125 transition duration-200">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-yellow-600" />
                    </li>
                    <li className="mx-3  md:mx-6 text-white ">
                        <button className="bg-yellow-600 px-4 py-2 rounded-full">REGISTER NEW</button>
                    </li>
                </ul>
            </section>
            <section className="w-[20px] h-[20px] text-white mx-2 block md:hidden">
                {toggle ? (
                    <FontAwesomeIcon
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        icon={faClose}
                        className="text-yellow-500"
                    />
                ) : (
                    <FontAwesomeIcon
                        onClick={() => {
                            setToggle(!toggle)
                        }}
                        icon={faBars}
                    />
                )}
            </section>
            {toggle ? (
                <section className="block text-white bg-banner h-screen text-lg z-10 md:hidden absolute bg-transparent bg-center bg-cover w-screen top-[14vh]">
                    <ul>
                        <li className="m-4 hover:text-yellow-600">
                            <Link href="/">HOME</Link>
                        </li>
                        <li className="m-4 hover:text-yellow-600">
                            <Link href="/">CATEGORIES</Link>
                        </li>
                        <li className="m-4 hover:text-yellow-600">
                            <Link href="/">OFFERS</Link>
                        </li>
                        <li className="m-4 hover:text-yellow-600">
                            <Link href="/">CART</Link>
                        </li>
                        <li className="m-4 hover:text-yellow-600">
                            <Link href="/">REGISTER</Link>
                        </li>
                    </ul>
                </section>
            ) : (
                <></>
            )}
        </div>
    )
}
