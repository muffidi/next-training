import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { news } from './data'

export default function News() {
  return (
    <div className={styles.container} >
      <Head>
        <title>News List</title>
        <meta name="description" content="News List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <h1>News</h1>

      { news && news.map((item) => (
        <ul key={item.id}>
          <Link href ={{
            pathname: `/news/${item.url}`,
            query: { title: item.title, content: item.content, image: item.image},
          }}
          as={`/news/${item.url}`}
          >
            <li>{item.title}</li>
          </Link>
        </ul>
      ))}
    </div>
  )
}
