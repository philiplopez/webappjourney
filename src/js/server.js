import path from 'path'
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import HtmlTemplate from './htmlTemplate'
import routes from './routes'

const app = express()

const clientDistPath = path.resolve(__dirname, '../dist')
app.use('/static', express.static(clientDistPath))

app.get('/*', (request, response) => {
    console.log('GET received for: ', request.url);
    match({routes, location: request.url}, (error, redirectLocation, renderProps) => {
      if (error) {
        console.log(error)
      } else if (renderProps) {
        // TODO: errors, redirection, etc.; HTTP status codes
        const content = renderToString(<RouterContext {...renderProps} />)      
        response.send(renderToString(<HtmlTemplate content={content} />))
      }
    })
})

app.listen(8080, function () {
  console.log('Listening at http://localhost:8080/')
});
