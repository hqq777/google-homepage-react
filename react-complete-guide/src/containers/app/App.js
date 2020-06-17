import React, { Component } from 'react';
import './App.css';
import Header from '../../components/header/header';
import Content from '../../components/content/content';
import Footer from '../../components/footer/footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      maskDisplay: false,
      contentFocus: false,
    }
    this.maskClick = this.maskClick.bind(this);
  }

  maskClick() {
    this.setState(() => {
      return {
        maskDisplay: !this.state.maskDisplay,
      };
    });
  }

  render() {
    return (  
      <div className="App">
        {this.state.maskDisplay && <div id="mask" className="mask" maskStatus={this.state.maskDisplay} onClick={this.maskClick}></div>}
        <Header 
          maskStatus={this.state.maskDisplay} 
          contentStatus={this.state.contentFocus} 
          maskStatusChange={(maskDis) => this.maskStatusChange(maskDis)}
        />
        <Content 
          contentStatusChange={(conFocus) => this.contentStatusChange(conFocus)}
        />
        <Footer 
          maskStatus={this.state.maskDisplay} 
          contentStatus={this.state.contentFocus} 
          maskStatusChange={(maskDis) => this.maskStatusChange(maskDis)}
        />
      </div>
    );
  }
  maskStatusChange = (maskDis) => {
    console.log("app data");
    /* 
      avoid {child component change parent state 
    => parent re-render 
    => re-render child 
    => child component change parent state...}
    */
    if (this.state.maskDisplay !== maskDis) 
      this.setState(() => {
        return {maskDisplay: maskDis};
      });
  }
  contentStatusChange = (conFocus) => {
    console.log("content data");
    if (this.state.contentFocus !== conFocus) 
      this.setState(() => {
        return {contentFocus: conFocus};
      });
  }
}

export default App;
