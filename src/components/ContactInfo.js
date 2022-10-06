import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'

export default class ContactInfo extends Component {
  render() {
    return (
        <div>
            <Menu />
            <div className='header'>
              <h5>Contact Information</h5>
              <p>Email address: <a href="/">gracyngreen@gmail.com</a></p>
            </div>
        </div>
    )
  }
}