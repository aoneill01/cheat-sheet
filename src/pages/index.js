import React, { Fragment } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import shortcuts from "../shortcuts"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Keyboard Shortcuts Cheat Sheet</h1>
    <div className="grid">
      {shortcuts.map((category, i) => (
        <Fragment key={i}>
          <h2>{category.name}</h2>
          {category.commands.map((command, i) => (
            <Fragment key={i}>
              <div className="keys">
                {command.keys.map((key, i) => (
                  <span className="key" key={i}>
                    {key}
                  </span>
                ))}
              </div>
              <div className="description">{command.desc}</div>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </div>
  </Layout>
)

export default IndexPage
