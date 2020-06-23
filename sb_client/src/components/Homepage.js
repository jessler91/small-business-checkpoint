 
import React, { Component } from 'react'
import { Container, Divider, Switch } from '@material-ui/core'

class Homepage extends Component {


    render() {
        return (
            <div className="text-gray">
                <Container maxWidth="sm">
                    <h1 style={{ textAlign: 'center' }}>mySmallBusinessListings</h1>
                    <p style={{ textAlign: 'center' }}>
                    Webpage: mySmallBusinessListings.com
                    </p>
                    <Divider />
                    <p style={{ textAlign: 'center' }}>
                    Store a list of your favorite local businesses.
                    </p>
                </Container>
            </div>
        )
    }
}

export default Homepage