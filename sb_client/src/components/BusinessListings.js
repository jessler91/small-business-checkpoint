import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

 
const BusinessListings = (props) => {
    return (
        <Container maxWidth="lg" className="listings-container">
            <h4>Welcome Justin</h4>
            <div className="flex-container">
                flex area
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>business name</TableCell>
                        <TableCell>description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.listings.map((listing, index) => {
                        return (
                            <TableRow key={listing.id}>
                            <TableCell align="left">
                                {/* <Link to={`/details/${listing.id}`}>{listing.Name}</Link> */}
                            </TableCell>
                            <TableCell align="left">{listing.Description}</TableCell>
                            <TableCell align="left">{listing.Hours}</TableCell>
                            <TableCell align="left">{listing.Address}</TableCell>
                            {document.cookie === "loggedIn=true" ? (
                                <TableCell>
                                <DeleteIcon onClick={() => props.removeListing(index)} />
                                </TableCell>
                            ) : null}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default BusinessListings