import React, { Component } from 'react'

export default class ErrorHandler extends Component {
    constructor(){
        super();
        this.state = {
            hasError: false
        }
    }
    componentDidCatch(error, info){
        this.setState({hasError: true});
        console.log(error, info);
    }
  render() {
    if(this.state.hasError){
        return(
            <h1>Something went wrong...</h1>
        );
    }

    return (
        <React.Fragment>
            {this.props.children}
        </React.Fragment>
    )
  }
}
