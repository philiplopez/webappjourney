import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import {AppLayout, HomePage, AboutPage} from './ui/site'
import {FilterRecipesPage, ViewRecipePage, EditRecipePage} from './ui/recipe'

export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="recipes" component={FilterRecipesPage} />
        <Route path="recipe/:recipeId(/:recipeSlug)" component={ViewRecipePage} />
        <Route path="r/edit/:recipeId" component={EditRecipePage} />
    </Route>
)
