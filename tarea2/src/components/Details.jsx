import React from 'react'

const Details = (props) => {
    return (
        <div>
            <p>
                <b>
                {props.Genero}
                </b>
            </p>
            <p>
                <b>
                {props.Estado}
                </b>
            </p>

        </div>
    )
}

export default Details