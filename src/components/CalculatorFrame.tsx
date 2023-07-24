import { useState } from "react";
import Display from "./Display";
import KeyPad from "./KeyPad";


const CalculatorFrame = () => {

  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>('0');
  const et = expression.trim();

  const isOperator = (symbol: string) => {
    return /[*/+-]/.test(symbol);
  };

  const displayer = (symbol: string) => {
    if (symbol === "clear") {
      setResult("");
      setExpression("0");
    } else if (symbol === "negative") {
      if (result === "") return;
      setResult(
        result.toString().charAt(0) === "-" ? result.slice(1) : "-" + result
      );
    } else if (symbol === "percent") {
      if (result === "") return;
      setResult((parseFloat(result) / 100).toString());
    } else if (isOperator(symbol)) {
      setExpression(et + " " + symbol + " ");
    } else if (symbol === "=") {
      calculate();
    } else if (symbol === "0") {
      if (expression.charAt(0) !== "0") {
        setExpression(expression + symbol);
      }
    } else if (symbol === ".") {
      // split by operators and get last number
      const lastNumber = expression.split(/[-+/*]/g).pop();
      if (!lastNumber) return;
      console.log("lastNumber :>> ", lastNumber);
      // if last number already has a decimal, don't add another
      if (lastNumber?.includes(".")) return;
      setExpression(expression + symbol);
    } else {
      if (expression.charAt(0) === "0") {
        setExpression(expression.slice(1) + symbol);
      } else {
        setExpression(expression + symbol);
      }
    }
  };

  const calculate = () => {
    // if last char is an operator, do nothing
    if (isOperator(et.charAt(et.length - 1))) return;
    // clean the expression so that two operators in a row uses the last operator
    // 5 * - + 5 = 10
    const parts = et.split(" ");
    const newParts = [];

    // go through parts backwards
    for (let i = parts.length - 1; i >= 0; i--) {
      if (["*", "/", "+"].includes(parts[i]) && isOperator(parts[i - 1])) {
        newParts.unshift(parts[i]);
        let j = 0;
        let k = i - 1;
        while (isOperator(parts[k])) {
          k--;
          j++;
        }
        i -= j;
      } else {
        newParts.unshift(parts[i]);
      }
    }
    const newExpression = newParts.join(" ");
    if (isOperator(newExpression.charAt(0))) {
      setResult(eval(result + newExpression) as string);
    } else {
      setResult(eval(newExpression) as string);
    }
    setExpression("");
  };

  // const displayer = (numOrOperator: string) => {

  //   setExpression(sanitizeDecimal(expression));
  //   // setExpression(sanitizeQuantityOfZeros(expression));


  //   if (expression.startsWith('0') && expression[1] !== '.') {
  //     setExpression('')
  //   }

  //   if (expression[expression.length - 1] === '.' && numOrOperator === '.') {
  //     return
  //   }

  //   setExpression(expression => expression + numOrOperator);
  //   if (expression[expression.length - 1] === '=') {
  //     if (/[0-9]/.test(numOrOperator)) {
  //       setExpression(numOrOperator)
  //     }
  //     else {
  //       setExpression(result.toString() + numOrOperator)
  //     }
  //   }



  // }


  // const calculate = () => {
  //   // Number(math.evaluate(expression).toFixed(4));
  //   setResult(math.round(math.evaluate(expression), 4));
  //   setExpression(expression => expression + "=");
  // }

  const reset = () => {
    setExpression('0');
    setResult('0');
  }

  const clear = () => {
    console.log("clear");
    setExpression(expression => expression.slice(0, expression.length - 1));
    setResult('0');
  }

  return (

    <section className='flex flex-col w-[90%] md:w-[25%] border-2 rounded-lg shadow-xl' >

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