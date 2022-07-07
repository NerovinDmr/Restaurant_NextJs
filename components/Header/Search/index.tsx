import React from 'react'
import Image from "next/image";
import style from './styles.module.scss'
export const Search:React.FC = () => {
  return (
    <div >
        <form className={style.search_form} method="get">
          <span  className={style.location_icon} >
            <Image src="/images/Path_33958.svg" width={20} height={20} />
          </span>
          <input className={style.search} placeholder="Search" type="search" />
          <span className={style.search_icon}>
            <Image src="/images/Search.svg" width={20} height={20} />
          </span>
        </form>
      </div>
  )
}
