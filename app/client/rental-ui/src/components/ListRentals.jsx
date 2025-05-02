import { useEffect, useState } from "react";
import {Box, Button, Card, CardContent, CardMedia, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ListRentals() {
    const [rentals, setRentals] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8000/api/rentals")
            .then(response => response.json())
            .then(data => setRentals(data))
            .catch(error => console.error("Error fetching rentals:", error));
    }, []);

    return (
        <>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "2%" }}>
                <Typography variant="h4" fontFamily="sans-serif" sx={{ color: "#f16726" }}>
                    Rental Listings
                </Typography>

                <Button variant="contained" onClick={()=>navigate("/newlisting")} sx={{ backgroundColor: "#f16726"}}>
                    Add New Rental
                </Button>
            </Box>

            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",justifyContent: "end", padding: "2%",}}>
                {rentals.map((rental) => (
                    <Card key={rental.id} sx={{ maxWidth: 350, margin: 2}}>
                        <CardMedia
                            component="img"
                            height="200"
                            /* I have used a static image here for simplicity. */
                            image="/static/example-image.jpg"
                            alt="No Picture available"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {rental.listingTitle}
                            </Typography>
                            <Typography>
                                {rental.description}
                            </Typography>
                            <Typography>
                                ${rental.rent}/Month
                            </Typography>
                            <Typography>
                                {rental.address}
                            </Typography>
                            <Typography>
                                {rental.numberOfRooms}-bed
                            </Typography>
                            <Typography>
                                Contact: {rental.contactInfo}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
