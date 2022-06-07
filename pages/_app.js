import Head from "next/head"
import { Router } from "next/router"
import nprogress from "nprogress"
import Layout from "../layout"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  nprogress.configure({ showSpinner: false })

  Router.events.on("routeChangeStart", () => {
    nprogress.start()
  })
  Router.events.on("routeChangeComplete", () => {
    nprogress.done()
  })

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
