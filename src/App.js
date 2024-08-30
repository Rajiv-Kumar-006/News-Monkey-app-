import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 6;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
              color='#f11946'
              progress={this.state.progress}
          />
          <Routes>

            <Route exact path="/" element={< News setProgress = {this.setProgress} apiKey={this.apiKey} keys="science" pageSize={this.pageSize} country="in" category="science"/>} />

            <Route exact path="/business" element={ < News ssetProgress = {this.setProgress} apiKey={this.apiKey}  keys="business" pageSize={this.pageSize}country="in" category="business" />} />

            <Route exact path="/entertainment" element={ < News setProgress = {this.setProgress} apiKey={this.apiKey} keys="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>  }  />

            <Route exact path="/general" element={ < News setProgress = {this.setProgress} apiKey={this.apiKey} keys="general" pageSize={this.pageSize} country="in" category="general"/> } />

            <Route exact path="/health" element={< News setProgress = {this.setProgress} apiKey={this.apiKey} keys="health" pageSize={this.pageSize} country="in" category="health" /> }/>

            <Route exact path="/science" element={< News setProgress = {this.setProgress} apiKey={this.apiKey} keys="science" pageSize={this.pageSize} country="in" category="science" /> } />

            <Route exact path="/sports" element={< News setProgress = {this.setProgress} apiKey={this.apiKey} keys="sports" pageSize={this.pageSize} country="in" category="sports" /> } />
            
            <Route exact path="/technology" element={< News setProgress = {this.setProgress} apiKey={this.apiKey} keys="technology" pageSize={this.pageSize} country="in" category="technology" />} />

          </Routes>
        </Router>
        
      </>
    );
  }
}

export default App;


