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

            <li className="w-10 h-10">
                <input type="color" className="opacity-0 h-0 w-0" ref={colorRef} onChange={(e) => {
                    setColorUser(e.target.value)
                }} />
                <button
                    className="w-10 cursor-pointer border rounded-full h-10"
                    onClick={() => {
                        colorRef.current.click();
                    }}
                    style={{
                        backgroundColor: colorUser ?? 'red'
                    }}

                    title='Color personalizado'
                >

                </button>
            </li>

            <li onClick={() => {
                setColorUser('#00C950')
                handlerToggle()
            }} className='w-10 cursor-pointer border h-10 bg-green-500'>
            </li>
            <li onClick={() => {
                setColorUser('#00A6F4')
                handlerToggle()
            }} className='w-10 cursor-pointer border h-10 bg-sky-500'>
            </li>
            <li onClick={() => {
                setColorUser('#2B7FFF')
                handlerToggle()
            }} className='w-10 cursor-pointer border h-10 bg-blue-500'>
            </li>
            <li onClick={() => {
                setColorUser('#F0B100')
                handlerToggle()
            }} className='w-10 cursor-pointer border h-10 bg-yellow-500'>
            </li>
            <li onClick={() => {
                setColorUser('#AD46FF')
                handlerToggle()
            }} className='w-10 cursor-pointer border h-10 bg-purple-500'>
            </li>

            <li className="h-10">
                <button className="bg-red-600 cursor-pointer rounded px-2 h-full " onClick={handlerClear}>
                    Borrar todo
                </button>
            </li>

        </ul >
    )

}