import React from 'react'
import Link from 'gatsby-link'
import { renderP } from "../utils/helper";
import { temp } from '../data/temp'
const IndexPage = () => (
  <div>
      {temp.title}
      {renderP(temp.content)}
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
