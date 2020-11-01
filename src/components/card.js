import React from 'react'
import PropTypes from 'prop-types'

const Card = ({title, description, color}) => {
    return (
        <div className={`card text-white bg-${color} mb-3`} style={{maxWidth: "18rem"}}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
}

export default Card
