import React from 'react';
import Select from 'react-select';

export default function DropdownShop() {

    const options = [
        { label:'Bán trực tiếp', value:'Bán trực tiếp' },
        { value: 'Khác', label: 'Khác' },
        { value: 'Thêm', label: 'Thêm' },
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
