import React from 'react'

const List = () => {
    let arr = [10 ,20, 30, 40, 50];
    let res = arr.map((e,i) => {
        return <p key={i}>{i}, Element: {e}</p>
    })
  return (
    <div>
      {/* {JSON.stringify(arr)} */}
      <div>
      {res}
      </div>
    </div>
  )
}


export default List
