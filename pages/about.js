import Head from "next/dist/shared/lib/head";

const About = () => {
    return (
        <div style={{textAlign: 'center'}}>
        <Head>
            <title>About</title>
            <meta name="description" content="About us" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
            <h1>This is About</h1> 
        </div>
    );
};

export default About;