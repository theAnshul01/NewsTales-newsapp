import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route exact path="/general" element={<News key="general" country="in" category="general" heading="Top News"/>} ></Route>
            <Route exact path="/business" element={<News key="business" country="in" category="business" heading="Business News"/>}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" heading="Entertainment News"/>}></Route>
            <Route exact path="/health" element={<News key="health" country="in" category="health" heading="Health News"/>}></Route>
            <Route exact path="/science" element={<News key="science" country="in" category="science" heading="Science News"/>}></Route>
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" heading="Sports News"/>} ></Route>
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" heading="Technology News"/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    )
  }
}

