import Navbar from "../../components/navbar/navbar"
import Intro from "./intro/intro"
import Image from "next/image"
import { delivery } from "../../constants/images"

export default function Welcome() {
    return (
        <div className="w-screen h-[100vh] md:h-[90vh] bg-[#232229]">
            <section className="w-screen h-[100%]  bg-banner bg-cover bg-center bg-no-repeat relative">
                <Navbar />
                <Intro />
                <section className="md:w-[450px] md:h-[500px] h-[300px] w-[300px] bottom-5 absolute right-0">
                    <Image src={delivery} layout="fill" />
                </section>
            </section>
        </div>
    )
}
