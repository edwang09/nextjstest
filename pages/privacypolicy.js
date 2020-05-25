import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './privacypolicy.module.scss'
import axios from 'axios'
const APIendpoint = process.env.APIendpoint
// import fs from 'fs'
// import path from 'path'
import { MongoClient } from 'mongodb';
const client = new MongoClient('mongodb+srv://admin:ti21sNLGy1NuJ5s1@cluster0-8fgyu.mongodb.net/test?retryWrites=true&w=majority', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});



export async function getStaticProps() {
  // const content = await (await axios.get(`${APIendpoint}/content?page=privacypolicy`)).data.content
  // const fullPath = path.join(process.cwd(), "admin", "privacypolicy")
  // const fileContents = fs.readFileSync(fullPath, "utf8")
  // return {props:{ content: fileContents }}
  
  // const result = await axios.get(`${APIendpoint}/content?page=privacypolicy`)

  if (!client.isConnected()) {
    await client.connect()
  };
  const content = (await client.db('odrexpress').collection('content').findOne({name:"privacypolicy"})).content
  return {props:{ content }}
}
export default function Privacypolicy({ content }) {
  return (
    <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <section className={styles.termofuse}>
        <h2>Privacy Policy</h2>
          <div dangerouslySetInnerHTML={{__html: content}}></div>
      </section>
    </Layout>
  )
}