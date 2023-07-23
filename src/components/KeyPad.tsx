import buttonLables from "../utils/buttonLables";
import Button from "./Button";

const KeyPad = () => {

    const { numbersKey, operatorsKey } = buttonLables;

    return (

        <section className={`flex flex-col `} >

            <article>

            </article>

            <article className={`grid grid-cols-4 h-[50vh] justify-center align-center`} >
                {
                    numbersKey.map(key => (
                        <Button key={key.id} keyLabel={key.key} id={key.id} />
                    ))
                }
            </article>

        </section>

    )
}

export default KeyPad;