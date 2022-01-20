import React from "react";
import { Grid } from "@mui/material";

const RawMatComponent = (props) => {
    return (
        <Grid>I'm a raw mat with the price {props.price} gil</Grid>
    )
}

export default RawMatComponent;