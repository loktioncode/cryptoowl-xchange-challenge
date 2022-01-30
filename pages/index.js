import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Hero from '../components/hero'
import ShowcaseCollection from '../components/showcase'



export default function Home() {
  return (
    <Layout home>
        <h1> INDEX</h1>
    
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <ShowcaseCollection />
    </Layout>
  )
}
