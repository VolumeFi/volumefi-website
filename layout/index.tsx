import React from 'react'
import Head from 'next/head'

import LayoutHeader from './header'
import Footer from './footer'

export default function Layout({
  children,
  router,
}) {
  return (
    <>
      <Head>
        <title>Volume</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      </Head>

      <main className='layout-container'>
        <a id="back-to-top-anchor" href="/" />
        <LayoutHeader router={router} />
        {(
          React.cloneElement(children, {
            router,
          })
        )}
        <Footer />
      </main>
    </>
  )
}
