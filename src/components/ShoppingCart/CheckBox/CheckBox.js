import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default function CheckBox() {
    return (
        <FormControl component="fieldset" className="Check__Box">
            <FormGroup aria-label="position" row>
                <FormControlLabel
                    value="check"
                    control={<Checkbox color="primary" />}
                    label="Giao hàng"
                    labelPlacement="check"
                />
            </FormGroup>
        </FormControl>
    );
}
