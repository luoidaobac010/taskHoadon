import React from 'react';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

export default function SaleOffBuy(props) {
 
    const {totalPrice} = props;

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
                                    <label>
                                        <span className="name__label col-md-4">  Giảm giá  </span>
                                        <span className="text__right col-md-4"> <Input defaultValue="0"  success inputProps={{ 'aria-label': 'description' }} /> </span>
                                        <a type="button" className="Box__Click btn btn-success col-md-2">VND</a>
                                        <a type="button" className="Box__Click btn btn-default col-md-2"> % </a>
                                    </label>
                                </div>
                                
                            </Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>

            <Grid >
                <Grid className="Sale__Off__Buy">
                    
                    <a type="button" color="default" onClick={handleClick('left')}>{totalPrice}</a>
                    
                </Grid>
            </Grid>
        </div>
    );
}
