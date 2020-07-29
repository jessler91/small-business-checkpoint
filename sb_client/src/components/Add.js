import React from 'react'
import { TextField,Button,Container } from '@material-ui/core'

const Add = (props) => {


  const handleTextChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  

  const _onSubmit = (event) => {
    event.preventDefault();
    const newListing = this.state;
    newListing.id = this.props.listings.length + 1;
    this.props.addListing(newListing);
    this.props.history.push('/listings');
  }

    return (
      <div className="addtoMyListings">
        <Container maxWidth="sm">
          <form className="add-form" onSubmit={_onSubmit}>
            

            <TextField
              required
              onChange={handleTextChange}
              value={formData.name || ''}
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

export default Add