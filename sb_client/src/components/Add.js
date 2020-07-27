import React from 'react'
import { TextField,Button,Container } from '@material-ui/core'

const Login = (props) => {

  const _onSubmit = (e) => {
    e.preventdefault();
    console.log('booom')
    props.addListing()
  }

  const handleTextChange = () => {
    
  }

    return (
      <div className="addtoMyListings">
        <Container maxWidth="sm">
          <form className="add-form" onSubmit={_onSubmit}>
            

            <TextField
              required
              onChange={handleTextChange}
              value={props.user.username}
              placeholder='search address here'
              name="Search"
              label="address"
              type="text" 
            />

            <TextField
              required
              onChange={handleTextChange}
              value={props.listing.username}
              placeholder='search address here'
              name="Search"
              label="address"
              type="text" 
            />

            <TextField
              required
              onChange={handleTextChange}
              // value={props.state.username}
              placeholder='search address here'
              name="Search"
              label="address"
              type="text" 
            />

            <Button
              type="submit"
              className="mapslookup-button"
              variant="contained"
              color="primary"
            >Loookup</Button>

          </form>
        </Container>
      </div>
    );

}

export default Login