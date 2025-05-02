import { useState } from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NewRentalForm() {
    const [listingDetails, setListingDetails] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = () => {
        fetch("http://localhost:8000/api/rentals", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(listingDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data.message === "Rental successfully created"){
                navigate("/");
            }
            else{
                alert("Sorry, there was ann error while creating new listing.");
            }
        })
    }

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "row", margin: "2%" }}>
            <Button onClick={() => navigate("/")} variant="h6" fontFamily={"sans-serif"} sx={{ color: "#f16726", padding: "2%", paddingBottom: "0%" }}>
                Home
            </Button>
            <Typography variant="h4" fontFamily={"sans-serif"} sx={{ color: "#f16726", padding: "2%", paddingBottom: "0%" }}>
                Create a New Rental Listing
            </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", width: "40%", padding: "2%", gap: 3 }}>
                <TextField id="title" label="Title" variant="outlined" onChange={(e) => { setListingDetails((prev) => ({
                    ...prev,
                    listingTitle:e.target.value
                }))}}/>
                <TextField multiline rows={4} id="description" label="Description" variant="outlined" onChange={(e) => {
                    setListingDetails((prev) => ({
                        ...prev,
                        description:e.target.value
                    }))
                }}/>
                <TextField id="rent" label="Rent" variant="outlined" onChange={(e) => {setListingDetails((prev) => ({
                    ...prev,
                    rent:e.target.value
                }))}}/>
                <TextField multiline rows={4} id="address" label="Address" variant="outlined"  onChange={(e) => {
                    setListingDetails((prev) => ({
                    ...prev,
                    address:e.target.value
                }))}}/>
                <TextField id="numberofrooms" label="Number of Rooms" variant="outlined" onChange={(e) => setListingDetails((prev) => ({
                    ...prev,
                    numberOfRooms:e.target.value
                }))}/>
                <TextField id="Email" label="Email" variant="outlined" onChange={(e) => setListingDetails((prev) => ({
                    ...prev,
                    contactInfo:e.target.value
                }))}/>
                <Button variant="contained" sx={{background: "#f16726"}} onClick={handleSubmit}>Submit</Button>       
            </Box>
        </div>
    )
}