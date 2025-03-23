import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

interface op {
    name: string;
    value: number;
}

interface dropdownProps {
    options: op[];
    selected: op;
    type: string;
    handleSelect: (pos: number) => void;
}

export default function Dropdown (props: dropdownProps) {
    const [selected, setSelected] = useState(props.selected.value);

    const handleSelect = (e: SelectChangeEvent<number>) => {
        let value = e.target.value;
        if (typeof value === 'string') {
            value = parseInt(value);
        }
        setSelected(value);
        props.handleSelect(value);
    };

    return (
        <FormControl
            className={`${props.type === 'algorithm' ? 'w-3/4' : 'w-1/4'} bg-blue-300 rounded-lg shadow-md p-2`}>
            <InputLabel
                id={`algorithm-select-label-${props.type}`}
                className="text-black text-sm font-semibold"
                htmlFor={`${props.type}-select`}
                style={{ transform: 'translateY(-8px)' }}>
                {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
            </InputLabel>
            <Select
                labelId={`algorithm-select-label-${props.type}`}
                id={`${props.type}-select`}
                className="text-black rounded-md bg-blue-300 hover:bg-blue-400 focus:bg-blue-400 focus:ring-2 focus:ring-blue-500"
                value={selected}
                label={`${props.type}`}
                onChange={handleSelect}
                variant="outlined"
                displayEmpty
                style={{ minWidth: '100%' }}
            >
                {props.options.map((option, idx) => (
                    <MenuItem
                        key={option.name}
                        value={option.value}
                        className="text-blue-200 hover:bg-blue-600"
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
}