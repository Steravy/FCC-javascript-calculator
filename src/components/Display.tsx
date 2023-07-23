
interface DisplayProps {
    expression: string;
    setExpression: (value: string) => void;
    result: number;
}

const Display: React.FC<DisplayProps> = ({ expression, setExpression, result }: DisplayProps) => {


    return (

        <section id="display" className='flex flex-col mb-2  rounded-lg' >

            <article className='h-[3rem] flex flex-row items-center justify-end pr-2 text-md ' >
                <input value={expression} readOnly type="text" className="w-full border border-transparent focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-zinc-100 text-right text-md" />
            </article>

            <article className='h-[3rem] flex flex-row items-center justify-end pr-2 text-md ' >
                <input value={result} readOnly type="text" className="w-full border border-transparent focus:outline-none focus:ring-0 focus:border-transparent bg-transparent text-zinc-100 text-right text-xl" />
            </article>

        </section>
    )
}

export default Display;