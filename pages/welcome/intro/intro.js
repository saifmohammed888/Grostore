import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faMapMarker } from "@fortawesome/free-solid-svg-icons"

export default function Intro() {
    return (
        <div className="w-auto text-center md:text-left h-[40vh] mt-[2vh] m-auto md:mt-[10vh] md:ml-[5vw]">
            <span className="flex w-[200px] m-auto md:m-0 rounded-full text-yellow-500 items-center bg-[#2c342e] p-1">
                <FontAwesomeIcon className="w-[wvw] text-red-500 h-[2vw] mx-2" icon={faHeart} /> Your Trusted Store
            </span>
            <p className="text-white my-8 font-semibold text-3xl font-mono">Safety & Quality Delivered</p>
            <p className="text-white my-8 font-semibold font-mono text-3xl">To Your Door Step</p>
            <p className="text-white">
                Enter your pincode to verify delivery available to your place <br />
                Thanks for choosing us.
            </p>
            <section className="w-[90vw] sm:w-[400px] m-auto mt-5  bg-white h-[50px] p-2 md:mt-9 md:mx-0  rounded-full flex">
                <FontAwesomeIcon className="w-[50px] h-[30px] text-yellow-500" icon={faMapMarker} />
                <input type="text" className="w-[175px]mx-3  text-xl border-none outline-none h-[35px]" placeholder="Enter pincode:"></input>
                <button className="bg-yellow-600 w-[200px]  text-white font-bold rounded-full px-3">Check</button>
            </section>
        </div>
    )
}
