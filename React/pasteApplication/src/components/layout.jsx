import React from 'react'
import Header from './header'
import { Outlet } from "react-router";
function layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default layout
