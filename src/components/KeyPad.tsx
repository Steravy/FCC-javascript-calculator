import buttonLables from "../utils/buttonLables";
import Button from "./Button";

interface KeyPadProps {
    calculate: () => void;
    reset: () => void;
    clear: () => void;
    displayer: (value: string) => void;
}

const KeyPad: React.FC<KeyPadProps> = ({ displayer, calculate, reset, clear }: KeyPadProps) => {

    const { numbersKey } = buttonLables;
    // const [displayer, calculate, reset, clear] = actions;

    return (

        <section className={`flex flex-col `} >

            <article>

            </article>

            <article className={`grid grid-cols-4 h-[50vh] justify-center align-center`} >
                {
                    numbersKey.map(key => (
                        <Button
                            displayer={displayer}
                            key={key.id}
                            keyLabel={key.key}
                            id={key.id}
                            reset={reset}
                            calculate={calculate}
                            clear={clear}
                        />

                    ))
                }
            </article>

        </section>

    )
}

export default KeyPad;