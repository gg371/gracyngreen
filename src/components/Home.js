import React, { Component } from 'react'
import '../PageFormat.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <section className="header">
            <div>
              <h5>Gracyn Green</h5>
            </div>
        </section>
      </div>
    )
  }
}