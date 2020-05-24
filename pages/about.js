import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './about.module.scss'
import React from 'react';
import axios from 'axios'
const APIendpoint = process.env.APIendpoint
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  // const content = await (await axios.get(`${APIendpoint}/content?page=about`)).data.content
  const fullPath = path.join(process.cwd(), "admin", "about")
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return {props:{ content: fileContents }}
}
export default function About({ content }) {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <section className={styles.about}>
        <h2>About</h2>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
      </section>
    </Layout>
  )
}