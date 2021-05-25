import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import {useState} from "react";
import BoxDiscountBuy from "./BoxDiscountBuy"

export default function SaleOffBuy(props) {

    const{setDiscount,getDiscount} = useState(0);

    /* Xử lí giảm giá theo phần trăm */
    const {total}=props;

    /* Xử lí Popper(Hộp thoại)*/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = newPlacement => event => {
        setAnchorEl(event.currentTarget);
        setOpen(prev => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return (
        <div >
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography className="Box__Click">
                                <div >
                                    <BoxDiscountBuy total={total}/>
                                </div>
                                
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>

            <Grid >
                <Grid className="Sale__Off__Buy">
                    
                    <a type="button" color="default" onClick={handleClick('left')}>{total}</a>
                    
                </Grid>
            </Grid>
        </div>
    );
}
