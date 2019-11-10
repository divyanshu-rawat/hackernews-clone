import React, { Component } from 'react'

class Link extends Component {
  render() {
    return (
      <div>
        <div className='link'>
          {this.props.link.description} ({this.props.link.url})
        </div>
      </div>
    )
  }
}

export default Link