import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/Layout/Mayin/Layout'
import Mainn from '@/componet/CompanetMayin'


const inter = Inter({ subsets: ['latin'] })

export default function Home({ move3 ,move5 ,move4 }) {
  return (
  <>
  <div className='container'>

  <Layout>
    <Mainn props={move4}/>
  </Layout>
  </div>
  </>
  )
}


export async function getStaticProps() {
  const ress = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=95ecf50d83cc6a4046e34273fb02582d`
  );
  const move3 = await ress.json();
  const res4 = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=95ecf50d83cc6a4046e34273fb02582d`
  );
  const move4 = await res4.json();
  const res5 = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=95ecf50d83cc6a4046e34273fb02582d`
  );
  const move5 = await res5.json();

  return { props: { move5 , move3 ,move4 } };
}