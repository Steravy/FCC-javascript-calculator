import KeyPad from "./KeyPad";

const CalculatorFrame = () => {

    return (

        <section className='flex flex-col rounded-lg shadow-xl w-[90%] md:w-[25%]' >

            <article>
                Display
            </article>

            <article>
                <KeyPad />
            </article>
        </section>
    )
}

export default CalculatorFrame;