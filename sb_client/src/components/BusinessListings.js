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
            <h4>Welcome, {props.user.username}</h4>
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
                {props.listings.map((listing, idx) => (
                    <TableRow key={listing.id}>
                        {/* <TableCell component="th" scope="row">{listing.id}</TableCell> */}
                        <TableCell>{listing["businessName"]}</TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.deleteListing(idx)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default BusinessListings