import React, { Component } from 'react'
import loading from "./loading (1).gif"
export default class Spinner extends Component {
  render() {
    return (
      <div>
      <img src={loading} alt="loading"/>
      </div>
    )
  }
}
