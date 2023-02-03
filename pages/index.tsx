import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import DayliNews from '../components/DayliNews'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BAN CÁN SỰ ĐOÀN TẠI LIÊN BANG NGA</title>
        <meta name="description" content="LongMinhon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <Navbar /> */}
      <Banner />
      {/* <DayliNews /> */}
      {/* <Events /> */}
      {/* <PublicNews /> */}
      {/* <LienQuan /> */}
      {/* <Footer /> */}
    </div>
  )
}
