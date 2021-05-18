import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import CreateIcon from '@material-ui/icons/Create';
import "./OrderNote.css"

export default function BuyNote() {
  return (
    <div>
      <FormControl className="Order__Note" >
        <InputLabel htmlFor="input-with-icon-pencil"/>
        <Input
          placeholder="Ghi chú"
          id="input-with-icon-pencil"
          startAdornment={
            <InputAdornment position="start">
              <CreateIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}