import React from 'react'

// TODO: propTypes (content)
export default function HtmlTemplate(props) {
    return (
        <html>
            <head>
                <title>A Web Application Journey</title>
                <link rel="stylesheet" type="text/css" href="/static/styles.css" />
            </head>
            <body>
                <div id='appContainer' dangerouslySetInnerHTML={{__html: props.content}} />
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    );
}