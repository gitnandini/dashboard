import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import classNames from 'classnames'
const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'



export const Sidebar = () => {
  return (
    <div className ="bg-sky-200 w-60 p-3 flex flex-col">
       <div className="flex items-center gap-2 px-1 py-3">
          <span className= "w-10 h-10 center"><img src="https://ik.imagekit.io/zintlr/Zintlr_transparent_pKUC9UkrvP.png" alt="" /></span>
          <span className="text-neutral-800 text-lg"><strong>ZINTLR</strong></span>
       </div>
        <div className="flex-1 py-8 flex flex-col gap-0.5  text-neutral-800">
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                <SidebarLink key ={item.key} item ={item} />
                    
                
            ))}
        </div>
    <div className='flex flex-col gap-0.5 border-t border-neutral-700'>
      {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(item => (
        <SidebarLink key={item.key} item={item}/>
      ))}
    </div>
    </div>
  )
    
}

function SidebarLink({ item }){

  const {pathname} =useLocation()
  return (
    <Link to ={item.path} className={classNames(pathname === item.path ? 'bg-neutral-700 text-white': ' text-neutral-800', linkClasses)}>
      <span className='text-xl'>{item.icon}</span>
      {item.label}
    </Link>
  )
}
