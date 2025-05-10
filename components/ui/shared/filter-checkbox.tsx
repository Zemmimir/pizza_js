import React from "react";
import {Checkbox} from '../ui/checkbox/';
import { text } from "stream/consumers";
import { Value } from "@radix-ui/react-select";
import { Check, Filter } from "lucide-react";


export interface FilterCheckBoxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void; 
    checked?: boolean; 
}



import React from 'react';

interface FilterCheckBoxProps {
    text: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void; // Исправлено на onCheckedChange
    checked?: boolean;
}

export const FilterCheckBox: React.FC<FilterCheckBoxProps> = ({
    text,
    value,
    endAdornment,
    onCheckedChange,
    checked,
}) => {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox
                onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
                checked={checked}
                value={value}
                className="rounded-[8px] w-6 h-6"
                id={`checkbox-${String(value)}`} 
            />
            <label htmlFor={`checkbox-${String(value)}`}>{text}
                className = 'leading-none cursor-pointer flex-1'
                {text}
            </label>
            {endAdornment}
        </div>
    );
};




