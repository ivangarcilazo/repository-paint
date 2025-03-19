import { useEffect, useRef, useState } from "react"

export default function ColorSelector({ setColorUser, setToggle, setCellColor, x, y, toggle, colorUser }) {

    const colorRef = useRef(null)

    const [isShowing, setIsShowing] = useState(false)

    const handlerToggle = async () => {

        setIsShowing(false)

        setTimeout(() => {
            setToggle({
                status: false,
                toggleX: null,
                toggleY: null
            })
        }, 300);
    }

    const handlerClear = () => {
        const select = confirm('¿Seguro quieres borrar tu lienzo?');

        if (select) {
            setCellColor([])
        }
    }

    useEffect(() => {
        if (toggle.status) {
            setIsShowing(true)
        }
    }, [toggle.status])


    if (!toggle.status) {
        return null
    }

    return (
        <ul
            className={`fixed h-fit flex items-center justify-center px-2 gap-2 shadow-xl bg-white rounded py-2 transition-all ${isShowing ? 'opacity-100' : 'opacity-0'} transition-all `}
            onMouseLeave={handlerToggle}
            style={{
                top: y,
                left: x
            }}
        >

            <li className="w-10 h-10 relative">
                <input type="color" className="opacity-0 h-0 w-0" ref={colorRef} onChange={(e) => {
                    setColorUser(e.target.value)
                }} />
                <button
                    className="w-10 cursor-pointer border rounded h-10 grid place-content-center absolute top-0 left-0 "
                    onClick={() => {
                        colorRef.current.click();
                    }}
                    style={{
                        backgroundColor: colorUser ?? 'red'
                    }}

                    title='Color personalizado'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>

                </button>
            </li>

            <li onClick={() => {
                setColorUser('#00C950')
                handlerToggle()
            }} className='w-10 cursor-pointer rounded border h-10 bg-green-500'>
            </li>
            <li onClick={() => {
                setColorUser('#00A6F4')
                handlerToggle()
            }} className='w-10 cursor-pointer rounded border h-10 bg-sky-500'>
            </li>
            <li onClick={() => {
                setColorUser('#2B7FFF')
                handlerToggle()
            }} className='w-10 cursor-pointer rounded border h-10 bg-blue-500'>
            </li>
            <li onClick={() => {
                setColorUser('#F0B100')
                handlerToggle()
            }} className='w-10 cursor-pointer rounded border h-10 bg-yellow-500'>
            </li>
            <li onClick={() => {
                setColorUser('#AD46FF')
                handlerToggle()
            }} className='w-10 cursor-pointer rounded border h-10 bg-purple-500'>
            </li>

            <li className="h-10">
                <button className="bg-gray-900 cursor-pointer px-2 h-full rounded-full " onClick={handlerClear}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </button>
            </li>

        </ul >
    )

}