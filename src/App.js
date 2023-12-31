import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {

  state = {
    progress : 0,
  }

  setProgress = (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div >
        <BrowserRouter>
        <LoadingBar color='#f11946' progress={this.state.progress} height={3} onLoaderFinished={() => this.setProgress(0)}  />
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} key="general" country="in" category="general" heading="Top News"/>} ></Route>
            <Route exact path="/general" element={<News setProgress = {this.setProgress} key="general" country="in" category="general" heading="Top News"/>} ></Route>
            <Route exact path="/business" element={<News setProgress = {this.setProgress} key="business" country="in" category="business" heading="Business News"/>}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} key="entertainment" country="in" category="entertainment" heading="Entertainment News"/>}></Route>
            <Route exact path="/health" element={<News setProgress = {this.setProgress} key="health" country="in" category="health" heading="Health News"/>}></Route>
            <Route exact path="/science" element={<News setProgress = {this.setProgress} key="science" country="in" category="science" heading="Science News"/>}></Route>
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} key="sports" country="in" category="sports" heading="Sports News"/>} ></Route>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} key="technology" country="in" category="technology" heading="Technology News"/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      
    )
  }
}

