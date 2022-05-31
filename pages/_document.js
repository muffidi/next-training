import { Html, Head, NextScript, Main } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
            <title>Home</title>
            <meta name="description" content="Home" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}