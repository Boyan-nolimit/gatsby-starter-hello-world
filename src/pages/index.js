import React, {useEffect, useState} from "react"
import {Link, graphql} from 'gatsby'
import Layout from "../components/Layout"
import {header, btn} from '../styles/home.module.css'
// import Img from "gatsby-image"

export default function Home({data}) {
    console.log(data)
    const {title, description} = data.site.siteMetadata
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    useEffect(() => {
        setText(title + " Added this")
    }, []);


    return (
        <Layout>
            <section className={header}>
                <div>
                    <h2>Design</h2>
                    <h3>Develop & Deploy</h3>
                    <p>UX designer & web developer based in Manchester.</p>
                    <Link className={btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <img src={'/banner.png'} alt={'site banner'} style={{maxWidth: "100%"}}/>
                <p>{text} - {description}</p>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <button className={btn} onClick={() => setCount(count - 1)}>-</button>
                    <p>{count}</p>
                    <button className={btn} onClick={() => setCount(count + 1)}>+</button>
                </div>
                {/*<Img fluid={data.file.childImageSharp.fluid} />*/}
            </section>
        </Layout>
    )
}

export const query = graphql`
    query SiteInfo {
      site {
        siteMetadata {
       
          description
          title
        }
      }
    }
`
