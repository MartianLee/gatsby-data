import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {
  // 컴포넌트에서 useStaticQuery는 한 번만 쓸 수 있다.
  const data = useStaticQuery(graphql`
    query SiteInfo2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Porfolio Projects</Link>
      </div>
    </nav>
  )
}
