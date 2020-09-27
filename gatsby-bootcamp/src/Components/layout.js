import React from "react"
// import { Link } from "gatsby"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import '../styles/index.scss';


const Layout = props => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
