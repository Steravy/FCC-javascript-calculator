
interface DisplayProps {
    expression: string;
    setExpression: (value: string) => void;
    result: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result }: DisplayProps) => {


    return (

        <section className='flex flex-col mb-2  rounded-lg' >

            <article id="display" className='h-[3rem] flex flex-row items-center justify-end pr-2 text-md ' >
                {expression}
                {/* <input value={expression} readOnly type="number" className="w-full border border-transparent focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-zinc-100 text-right text-md" /> */}
            </article>

            <article className='h-[3rem] flex flex-row items-center justify-end pr-2 text-md ' >
                {result}
                {/* <input value={parseFloat(result.toFixed(4))} readOnly type="number" className="w-full border border-transparent focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-zinc-100 text-right text-xl" /> */}
            </article>

        </section>
    )
}

export default Display;