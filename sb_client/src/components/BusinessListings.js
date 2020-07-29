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
import { Link } from 'react-router-dom'



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
                    {console.log("props" + props)}
                    
                    {props.listings.map((listing, id) => {
                        return (
                            

                            <TableRow key={id}>
                            <TableCell align="left">
                                <Link to={`/details/${listing.id}`}>{listing.businessName}</Link>
                            </TableCell>
                            <TableCell align="left">{listing.description}</TableCell>
                            <TableCell align="left">{listing.hours}</TableCell>
                            <TableCell align="left">{listing.address}</TableCell>
                                {document.cookie === "loggedIn=true" ? (
                                    <TableCell>
                                        <DeleteIcon onClick={() => props.removeListing(id)} />
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





