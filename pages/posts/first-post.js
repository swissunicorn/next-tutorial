import Link from 'next/link'
import Head from 'next/head' // allows editing head
import Script from 'next/script' // optimizes scripts being fetched and executed
import Layout from '../../components/layout'

// Link vs <a>: Link is client-side while <a> forces full refreshes
// to link to an EXTERNAL page, use <a>

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => 
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}