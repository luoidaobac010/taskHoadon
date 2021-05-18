import React from 'react';
import Select from 'react-select';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import "./DropdownSaler.css"


export default function DropdownSaler() {
    const options = [
        { label:'ADMIN', value:'ADMIN' },
        { value: 'Hoàng - Kinh doanh', label: 'Hoàng - Kinh doanh' },
        { value: 'Hương - kế toán', label: 'Hương - kế toán' },
    ];

    function onChangeInput(value){
      console.log(value);
    }

    return (
        <Select
            onChange={onChangeInput}
            options={options}
            defaultValue={options[0]}
        />
    );
}
