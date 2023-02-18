import { useState } from 'react'
import s from './Users.module.css'

const Paginator = (props) => {


  let portionSize = 3

  let pageNumbers = Math.ceil(props.totalUsersCount/portionSize)



  let pages = []

  for(let i=1;i<=pageNumbers;i++){
    pages.push(i)
  }

    let portionCount = Math.ceil(pageNumbers/portionSize)

    let [portionNumber,setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1)*portionSize+1
    let rightPortionPageNumber = portionNumber * portionSize



  return(
    <div>

      { portionNumber>1 &&
         <button onClick={ ()=> {setPortionNumber(portionNumber-1)} } >{"<"}</button> }

      {
        pages
        .filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
        .map(p=> <button className={ props.currentPage === p && s.active } key={p} onClick={()=>props.onPageChanged(p)}>{p}</button> )
      }


      { portionCount>portionNumber && <button onClick={ ()=>{setPortionNumber(portionNumber+1)} } >{">"}</button> }

    </div>
  )
}

export default Paginator