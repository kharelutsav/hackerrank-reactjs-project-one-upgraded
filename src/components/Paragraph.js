import React from 'react'

function Paragraph(props) {
    return (
        <div>
            <article>
                <h1>{props.head}</h1>
                <p>{props.body}</p>
            </article>
        </div>
    )
}

export default Paragraph
