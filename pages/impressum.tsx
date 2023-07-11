import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import {CMS_NAME, EXAMPLE_PATH} from '../lib/constants'
import Post from '../interfaces/post'
import Header from "../components/header";
import ImpressumContent from "../components/impressum-content";

export default function Impressum() {

  return (
    <>
      <Layout>
        <Head>
          <title>{`Jowita's Impressum`}</title>
        </Head>
        <Container>
          <Header />
          <ImpressumContent />
          This website was created out of a starter blog next.js template. For original source code visit
          <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-bold hover:underline"
          >GitHub
          </a>
        </Container>
      </Layout>
    </>
  )
}
