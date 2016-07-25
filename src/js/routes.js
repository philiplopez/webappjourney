import React from 'react'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'

import AppLayout from './ui/AppLayout'
import HomePage from './ui/HomePage'
import AboutPage from './ui/AboutPage'

export default (
    <Route path="/" component={AppLayout}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
    </Route>
)