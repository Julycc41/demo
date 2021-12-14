import { default as React, useState } from 'react'
export const IndexedDb = () => {
  const [state] = useState([1, 2, 3, 4, 5, 6, 7, 8])
  const [currentCount, setCurrentCount] = useState(1)

  // useEffect(() => {
  //   hotkeys('left,right', function (event, handler) {
  //     switch (handler.key) {
  //       case 'left':
  //         clickChangeCount(-1)
  //         break
  //       case 'right':
  //         clickChangeCount(+1)
  //         break
  //       default:
  //         break
  //     }
  //   })
  // }, [])

  // // window.addEventListener('keydown', e => {
  //   if (e.key === 'ArrowRight') {
  //     let index = state.findIndex((point: any) => currentCount === point)
  //     if (index + 1 >= state.length || index + 1 < 0) {
  //       console.log('到头')
  //       return
  //     } else {
  //       setCurrentCount(state[index + 1])
  //     }
  //   }
  // })

  const clickGo = (e: any) => {
    console.log(e)
  }

  return (
    <div
      className="indexed-db-wrapper"
      tabIndex="-1"
      onKeyDown={e => {
        clickGo(e)
      }}
      onKeyPress={e => {
        clickGo(e)
      }}
      onKeyUp={e => {
        clickGo(e)
      }}
    >
      {/* <input onKeyUp={clickGo}></input> */}
      111
      {currentCount}
    </div>
  )
}
