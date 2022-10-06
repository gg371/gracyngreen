import React, { Component } from 'react'
import Menu from "../Menu"
import '../../PageFormat.css'
import {LinkContainer} from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button'

export default class NZExperience extends Component {
  render() {
    return (
        <div>
            <Menu />
            <LinkContainer to='/Pictures' style={{
                backgroundColor: '#ef9273', 
                color: '#0d0d0d', 
                borderColor: '#0d0d0d',
                margin: '1rem',
                }}>
                    <Button>
                        Back
                    </Button>
            </LinkContainer>
            <div className='header'>
              <h5>Study Abroad Fall 2022 in New Zealand</h5>
            </div>
        </div>
    )
  }
}