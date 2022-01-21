import Link from 'next/link'
import Script from 'next/script'
import ProfilePicture from '../../components/avatar'
import Layout from '../../components/layout' // global styles

export default function FirstPost() {
  return (
    <>
     <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, run any JS function after loading`)
        }
      />
      
      <h1>First Post</h1>
      <ProfilePicture />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
