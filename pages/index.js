import Head from 'next/head'
import PageLanding from '../src/components/PageLanding';


export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio Learn</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Sansita+Swashed:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <PageLanding />
    </>
  )
}
