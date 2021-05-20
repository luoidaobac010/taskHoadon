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
                                <label>Giảm giá  </label>
                                <Input className="text__right"  success inputProps={{ 'aria-label': 'description' }} />
                                <a type="button" className="Box__Click btn btn-success">VND</a>
                                <a type="button" className="Box__Click btn btn-default"> % </a>
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
