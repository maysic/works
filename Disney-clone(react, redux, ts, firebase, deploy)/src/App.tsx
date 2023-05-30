import React from 'react';
import {Routes, Route} from 'react-router-dom'
import SignInPage from './components/SignInPage/SignInPage';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import DetailPage from './components/DetailPage/DetailPage';

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={ <HomePage/> }/>
        <Route path='/home' element={ <SignInPage/> }/>
        <Route path='/detail/:id' element= {<DetailPage/>}/>
      </Routes>
    </>
  )
}


