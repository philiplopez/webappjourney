import express from 'express'
import {renderToString} from 'react-dom/server'
import htmlTemplate from './htmlTemplate'

const app = express()

app.get('/*', (request, response) => {
    response.send(renderToString(htmlTemplate()))
})

app.listen(8080, function () {
  console.log('Listening at http://localhost:8080/')
});