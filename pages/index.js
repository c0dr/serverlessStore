import Head from 'next/head'
import styles from '../styles/Home.module.css'
import products from '../static/products.json'
import Product from '../components/product'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const productElms = products.map(product => <Product data={product}/>);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          simpleStore
        </h1>


        {productElms}
        </main>

       
    </div>
  )
}
