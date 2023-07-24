import * as math from "mathjs";
import { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";


const CalculatorFrame = () => {


  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<number>(0);

  // const displayer = (numOrOperator: string) => {

  //     // if (expression.startsWith('0') && numOrOperator === '0') {
  //     //     return
  //     // }
  //     if(expression.length === 1 && expression[0] !== '0' ) {
  //         return
  //     }
  //     if (expression[expression.length - 1] === '.' && numOrOperator === '.') {
  //         return
  //     }
  //     setExpression(expression => expression + numOrOperator);
  //     if (expression[expression.length - 1] === '=') {
  //         if (/[0-9]/.test(numOrOperator)) {
  //             setExpression(numOrOperator)
  //         } else {
  //             setExpression(result.toString() + numOrOperator)
  //         }
  //     }

  // }


  const displayer = (numOrOperator: string) => {
    if (expression.endsWith('=')) {
      setExpression("");
      setResult(0);
    } else {
      setExpression((prevExpression) => {
        // User Story #10: Prevent multiple zeros at the beginning of the number
        if (prevExpression === '0' && numOrOperator === '0') {
          return '0';
        }

        // User Story #11: Allow only one dot in one number
        if (numOrOperator === '.' && prevExpression.includes('.')) {
          return prevExpression;
        }

        // User Story #12: Perform calculations on numbers containing decimal points
        let updatedExpression = prevExpression + numOrOperator;
        if (numOrOperator === '=') {
          setExpression("");
          setResult(0);
        }

        // User Story #13: Handle consecutive operators (excluding '-')
        const operators = ['+', '-', '*', '/'];
        const lastChar = updatedExpression[updatedExpression.length - 1];
        const secondLastChar = updatedExpression[updatedExpression.length - 2];
        if (
          operators.includes(numOrOperator) &&
          operators.includes(lastChar) &&
          lastChar !== '-' &&
          operators.includes(secondLastChar)
        ) {
          updatedExpression = updatedExpression.slice(0, -2) + numOrOperator;
        }

        return updatedExpression;
      });
    }
  };


  const calculate = () => {
    setResult(math.evaluate(expression));
    setExpression(expression => expression + "=");
  }

  const reset = () => {
    setExpression('0');
    setResult(0);
  }

  const clear = () => {
    console.log("clear");
    setExpression(expression => expression.slice(0, expression.length - 1));
    setResult(0);
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