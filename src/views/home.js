import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card';
import Navbar from '../components/navbar';

const Home = props => {
    return (
        <div>
            <Navbar />
            Home Page
            <Card title={`Fetch`} />
        </div>
    )
}

Home.propTypes = {

}

export default Home

