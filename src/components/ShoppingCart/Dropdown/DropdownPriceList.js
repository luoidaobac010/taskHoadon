import React from 'react';
import Select from 'react-select';



export default function DropdownPriceList() {

    const options = [
        { label:'Bảng giá chung', value:'Bảng giá chung' },
        
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


