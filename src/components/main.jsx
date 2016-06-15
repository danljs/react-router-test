'use strict'
import React from 'react'
class Main extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

  render() {
    return (
      <div>
        <div>Main</div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Main