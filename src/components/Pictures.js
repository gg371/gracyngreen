import React, { Component } from 'react'
import Menu from "./Menu"
import '../PageFormat.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {LinkContainer} from 'react-router-bootstrap'

export default class Pictures extends Component {
  render() {
    return (
        <div>
            <Menu />
            <h7 className="pictureHeader">Experiences:</h7>
            <div className="card-list">
              <Card style={{ width: '18rem', margin: '1rem', minWidth: '18rem'}}>
                <Card.Img variant="top" src={require("../images/Task 1.3.jpg")} alt="Image of color scheme" />
                <Card.Body>
                  <Card.Title>Study Abroad Fall 2022 in New Zealand</Card.Title>
                  <Card.Text>
                    These are some pictures from my study abroad experience :)
                  </Card.Text>
                  <Card.Text>
                    Location: Auckland, New Zealand
                  </Card.Text>
                  <Card.Text>
                    When: July 2022 - November 2022
                  </Card.Text>
                  <LinkContainer to='/NZExperience' style={{backgroundColor: '#ef9273', color: '#0d0d0d', borderColor: '#0d0d0d'}}>
                    <Button >
                        Go to page
                    </Button>
                  </LinkContainer>
                </Card.Body>
            </Card>
          </div>
        </div>
    )
  }
}