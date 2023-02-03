import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {

  return <> 
    <Navbar /> 
    <Component {...pageProps} />
    <Footer />
  </>
}
