import React from "react";


interface ButtonProps {

    keyLabel: string | number;
    id: string;

}

const Button: React.FC<ButtonProps> = ({ keyLabel, id }: ButtonProps) => {

    return (

        <button id={id} className={`${keyLabel.toString() === '0' ? 'col-span-2' : 'col-span-1'} ${keyLabel === '=' ? 'row-span-2' : ''} border border-md border-black hover:border-zinc-100 hover:rounded-md hover:scale-100 transition `} >
            {keyLabel}
        </button>
    )
}

export default Button;