import { useEffect, useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";
import * as math from "mathjs";


const CalculatorFrame = () => {


    const [expression, setExpression] = useState<string>("");
    const [result, setResult] = useState<number>(0);

    const displayer = (operator: string) => {
        setExpression(expression => expression + operator);
        console.log(operator)
    }

    const calculate = () => {
        setResult(eval(expression));
        setExpression(expression => expression + "=");
    }

    const reset = () => {
        setExpression("");
        setResult(0);
    }

    const clear = () => {
        console.log("clear");
        setExpression(expression => expression.slice(0, expression.length - 1));
    }

    return (

        <section className='flex flex-col rounded-lg shadow-xl w-[90%] md:w-[25%]' >

            <article>
                <Display result={result} setExpression={setExpression} expression={expression} />
            </article>

            <article>
                <KeyPad
                    displayer={displayer}
                    reset={reset}
                    calculate={calculate}
                    clear={clear}
                />
            </article>
        </section>
    )
}

export default CalculatorFrame;