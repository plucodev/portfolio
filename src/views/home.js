import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card';
import Navbar from '../components/navbar';

const tutorials = [
    {
        tutorial: "useContext",
        description: "useContext description",
        color: "primary"
    },
    {
        tutorial: "useEffect",
        description: "useEffect description",
        color: "secondary"
    },
    {
        tutorial: "useParams",
        description: "useParams description",
        color: "info"
    },
    {
        tutorial: "useState",
        description: "useState description",
        color: "danger"
    },
]

const Home = props => {
    return (
        <div>
            <Navbar />
            Home Page
            {tutorials.map((item, index) =>

                <Card key={index} color={item.color} title={item.tutorial} description={item.description} />
            )}
        </div>
    )
}

Home.propTypes = {

}

export default Home

