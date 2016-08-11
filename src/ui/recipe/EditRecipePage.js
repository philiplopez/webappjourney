import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router/lib/Link'

export default ({params: {recipeId}}) => (
  <div>
    <Helmet title='Edit Recipe' />
    <p>We should edit recipe with ID {recipeId} here...</p>
    <Link to={`/recipe/${recipeId}`}>View this Recipe</Link>
  </div>
)