import React from "react";
import { Grid } from "@mui/material";

const FinishedItemComponent = (props) => {    
    return (
        <Grid>
            <Grid>I'm a finished product with the price {props.price} gil.</Grid>
            <Grid>My intermediate mats are {props.materials}</Grid>
        </Grid>
    )
}

export default FinishedItemComponent;