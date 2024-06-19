import "@/styles/globals.scss";
import type {AppProps} from "next/app";
import {Montserrat} from "next/font/google"


const montserrat = Montserrat({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <main>
            <style jsx global>{`
                html, body {
                    font-family: ${montserrat.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </main>
    )
}
