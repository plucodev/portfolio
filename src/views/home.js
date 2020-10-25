import React from 'react'
import PropTypes from 'prop-types'
import Card from '../components/card';

const Home = props => {
    return (
        <div>
            Home Page
            <Card title={`Fetch`} />
        </div>
    )
}

Home.propTypes = {

}

export default Home

