import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './faq.module.scss'
import React from 'react';
import axios from 'axios'


export default class Faq extends React.Component {
  state = {
    APIendpoint : "http://localhost:3000/api",
    content:""
  }

  componentDidMount(){
    axios.get(`${this.state.APIendpoint}/content?page=faq`).then(res => {
        if (res.data ){
            console.log(res.data)
            this.setState({content:res.data.content})
        }
    }).catch(err=>{
        console.log(err)
    })
}
  render(){
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
          <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        </section>
      </Layout>
    )
  }
  
}
