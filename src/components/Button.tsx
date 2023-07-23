import React, { useMemo } from "react";


interface ButtonProps {

    keyLabel: string | number;
    id: string;

}

const Button: React.FC<ButtonProps> = ({ keyLabel, id }: ButtonProps) => {

    const operatorsBgColor = useMemo(() => {

        if (keyLabel === '/' || keyLabel === '*' || keyLabel === '-' || keyLabel === '+') {

            return 'bg-neutral-600';
        } else {
            return 'bg-neutral-700';

        }
    }, [keyLabel])

    const colSpan = useMemo(() => {

        return keyLabel.toString() === '0' ? 'col-span-2' : 'col-span-1';
    }, [keyLabel])

    const rowSpan = useMemo(() => {

        return keyLabel === '=' ? 'row-span-2' : '';
    }, [keyLabel])

    const keyColors = useMemo(() => {



        switch (keyLabel) {
            case 'AC':
                return 'bg-red-700';
            case 'C':
                return 'bg-red-600';
            case '=':
                return 'bg-sky-950';
            default:
                return 'bg-neutral-700';
        }
    }, [keyLabel])

    return (

        <button id={id} className={`${colSpan} ${rowSpan} border border-black hover:border-zinc-100 hover:scale-100 transition  ${keyColors}  ${keyLabel === 'AC' ? 'bg-red-700' : ''} ${keyLabel === 'C' ? 'bg-red-600' : ''} ${operatorsBgColor}`} >
            {keyLabel}
        </button>
    )
}

export default Button;