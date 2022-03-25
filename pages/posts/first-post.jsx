import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script'
import ProfilePicture from '../../components/profilePicture';
import Layout from '../../components/layout';

export default function FirstPost() {
  return  (
    <Layout>
    <Head>
      <title>Första Posten</title>
    </Head>
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      onLoad={() =>
        console.log('script loaded correctly, FB is on the page')
      }
    />
    <h1>First Post</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    <ProfilePicture />
    </Layout>
  
  );
}