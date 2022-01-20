import React from "react";
import { Grid } from "@mui/material";

const ItemComponenent = (props) => {
    const price = _ => {
        let calcPrice = 0;
        props.materials.forEach( item => {
            calcPrice += item.price;
        });
        return calcPrice;
    }

    return (
        <Grid>Item price is {price} gil</Grid>
    )
}

export default ItemComponenent;