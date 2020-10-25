import React from 'react'
import PropTypes from 'prop-types'

const Card = props => {
    return (
        <div className="card text-white bg-primary mb-3" style={{maxWidth: "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string
}

export default Card
