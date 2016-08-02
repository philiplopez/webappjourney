import React from 'react'

// TODO: propTypes (content)
export default function HtmlTemplate({head, content}) {
    return (
        <html>
            <head>
                {head.title.toComponent()}
                <link rel="stylesheet" type="text/css" href="/static/styles.css" />
            </head>
            <body>
                <div id='appContainer' dangerouslySetInnerHTML={{__html: content}} />
                <script src="/static/bundle.js"></script>
            </body>
        </html>
    );
}