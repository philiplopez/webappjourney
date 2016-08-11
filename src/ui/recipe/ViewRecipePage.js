import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router/lib/Link'

export default ({params: {recipeId, recipeSlug}}) => (
  <div>
    <Helmet title='Recipe: SOME RECIPE NAME' />
    <p>
    We should view recipe with ID {recipeId}
    {recipeSlug ? ` and slug '${recipeSlug}' ` : ' '}
    here
    </p>
    <Link to={`/r/edit/${recipeId}`}>Edit this Recipe</Link>
  </div>
)