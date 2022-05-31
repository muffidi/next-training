// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container} style={{textAlign: 'center'}}>
      {/* <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
    
      <Link href={{pathname: '/news', query: {}}}>
        <h2>News</h2>
      </Link>

      <Link href={{pathname: '/about', query: {}}}>
        <h2>About</h2>
      </Link>
    </div>
  )
}
