import React, { Fragment } from 'react'
import '../styles/globals.css'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {

  return (
  	<Fragment>
		      <Head>
		        <title>XT Test</title>
		      </Head>
		      <Component {...pageProps} />
		     
    </Fragment>
  	) 
}

export default MyApp
