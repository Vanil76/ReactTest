import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Home from "./Home.js"
import Sobre from "./Sobre.js"
import Produto from "./Produto.js"
import Contato from "./Contato.js"

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='sobre' element={<Sobre/>} />
        <Route path='produtos' element={<Produto/>} />
        <Route path='contato' element={<Contato/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App