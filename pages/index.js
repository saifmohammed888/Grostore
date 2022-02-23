import Head from "next/head"
import Welcome from "./welcome/welcome"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Grostore</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta name="description" content="Get your groceries at your doorstep" />
                <meta property="og:site_name" content="Ethius Technologies" />
                <meta property="og:title" content="Ethius Technologies" />
                <meta property="og:description" content="Providing End to End Solutions to Computer Hardware and Software" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/saif-freelance2/image/upload/v1645607384/Grostore/logo/GROSTORE-nobg_gxhxpt.webp"
                />
                <meta property="og:type" content="website" />
                <meta property="og:updated_time" content="1440432930" />
                <link
                    rel="shortcut icon"
                    href="https://res.cloudinary.com/saif-freelance2/image/upload/v1645607384/Grostore/logo/GROSTORE-nobg_gxhxpt.webp"
                    type="image/x-icon"
                />
                <link href="/dist/output.css" rel="stylesheet"></link>
            </Head>

            <main className="bg-red-500 w-screen h-[54vh]">
                <Welcome />
            </main>
        </div>
    )
}
