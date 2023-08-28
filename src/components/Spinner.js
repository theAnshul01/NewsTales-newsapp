import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="text-center my-3">
        <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
        </div>
        </div>
      </div>
    )
  }
}
