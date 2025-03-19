/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css'
import ColorSelector from './components/ColorSelector';
import { roundThousand } from './utils';

function App() {

  const clientHeight = window.innerHeight;

  const cells = Array.from({ length: roundThousand((clientHeight / 20) * 100) }, () => 0);

  const [cellColor, setCellColor] = useState([]);

  const [toggle, setToggle] = useState({
    status: false,
    toggleX: null,
    toggleY: null
  });
  const [colorUser, setColorUser] = useState(null);

  const [isMouseActive, setIsMouseActive] = useState(false)

  const handlerClick = (index) => {

    if (cellColor.some(item => item.index == index)) {

      const newColorList = [...cellColor].filter((cellColor) => cellColor.index != index);

      setCellColor(newColorList);

      if (isMouseActive) {
        addNewColor(index)
      }
      return
    }
    addNewColor(index)
  }

  const handlerMouseOver = (index) => {
    if (isMouseActive) {
      handlerClick(index)
    }
  }

  const handlerContextMenu = (e) => {
    e.preventDefault();
    setToggle({
      status: true,
      toggleX: e.clientX,
      toggleY: e.clientY
    })
  }

  const addNewColor = (index) => {
    const newCellColor = {
      index,
      color: colorUser ?? 'red'
    }

    setCellColor((prev) => [...prev, newCellColor])
  }


  const handlerOnMouse = (e, update) => {
    if (e.button == 2) {
      return;
    }
    setIsMouseActive(update)
  }

  return (
    <main className='h-screen'
      // Fix right button make painting
      onMouseDown={(e) => handlerOnMouse(e, true)}
      onMouseUp={(e) => handlerOnMouse(e, false)}
      onContextMenu={handlerContextMenu}
    >
      <ul className='grid grid-cols-[repeat(100,1fr)]'>
        {
          cells.map((_, index) =>
            <li key={index} className={`border border-gray-200 col-span-1 text-black h-[20px]  overflow-hidden `}
              style={{
                backgroundColor: cellColor.filter((cellColor) => cellColor.index == index)[0]?.color ?? ''
              }}
              onClick={(e) => { handlerClick(index, e) }}
              onMouseOver={() => {
                handlerMouseOver(index)
              }}
            >
            </li>)
        }
      </ul>

      <ColorSelector toggle={toggle} setCellColor={setCellColor} setColorUser={setColorUser} colorUser={colorUser} setToggle={setToggle} x={toggle.toggleX} y={toggle.toggleY} />


    </main>
  )
}

export default App
