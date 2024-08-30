import React, { Component } from 'react'
import Loading from './Loading.gif' 
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center align-self-end'>
        <img className='my-2' src={Loading} alt="loading......" />
      </div>
    )
  }
}

export default Spinner
