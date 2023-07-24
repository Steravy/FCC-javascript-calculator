import React, { useMemo } from "react";


interface ButtonProps {

    keyLabel: string | number;
    id: string;
    displayer: (value: string) => void;
    calculate: () => void;
    reset: () => void;
    clear: () => void;

}

const Button: React.FC<ButtonProps> = ({ keyLabel, id, displayer, calculate, reset, clear }: ButtonProps) => {


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


    const handleOperations = () => {

        switch (keyLabel) {
            case 'AC':
                return reset();
            case 'C':
                return clear();
            case '=':
                return calculate();
            default:
                return displayer(keyLabel.toString());
        }

    }



    return (

        <button onClick={() => handleOperations()} id={id} className={`${colSpan} ${rowSpan} text-xl border border-black hover:border-neutral-400 hover:scale-100 transition  ${keyColors}  ${keyLabel === 'AC' ? 'bg-red-700' : ''} ${keyLabel === 'C' ? 'bg-red-600' : ''} ${operatorsBgColor}`} >
            {keyLabel}
        </button>
    )
}

export default Button;