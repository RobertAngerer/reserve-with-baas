import Link from 'next/Link'
import Script from 'next/script'
import Head from 'next/head'
import Layout from '../../components/layout'


export default function FirstPost () {
  return (
    <Layout> <Head>
      <title>First post</title>
    </Head>
      <h1>First post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  )
}