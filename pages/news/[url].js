import { useRouter } from "next/router";
import styles from '../../styles/Detail.module.css'
import Image from "next/dist/client/image";

function NewsDetail(){
    const router = useRouter();

    console.log(router)

    return (
        <div className={styles.heading}>
            <h1>News Details</h1>
            <h2>{router.query.title}</h2>
            <Image src={router.query.image} alt={router.query.title} width={900} height={500} />
            <p>{router.query.content}</p>

            <style jsx>
                {`
                div {
                    text-align: center;
                }`
                }
            </style>
        </div>
    )
}

export default NewsDetail