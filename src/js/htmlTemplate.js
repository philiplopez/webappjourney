import React from 'react'

// TODO: propTypes (content)
export default function HtmlTemplate(props) {
    return (
        <html>
            <head>
                <title>A Web Application Journey</title>
            </head>
            <body>
                <div id='appContainer' dangerouslySetInnerHTML={{__html: props.content}} />
            </body>
        </html>
    );
}