import React from "react";
import { Grid } from "@mui/material";

const InterMatComponent = (props) => {
    return (
        <Grid>
            <Grid>I'm an intermediate Mat! my price is {props.price} gil.</Grid>
            <Grid>My raw mats are {props.materials}</Grid>
        </Grid>
    )
}

export default InterMatComponent;