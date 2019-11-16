import React from 'react'
import Card from '../Card'
import CardSection from '../CardSection'

class AddLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileToUpload: ''
    }
  }
  sendIntroTextChangeToParent = (e) => {
    this.props.handleIntroTextChange(e)
  }
  sendMediaLinkChangeToParent = (e) => {
    this.props.handleMediaLinkChange(e)
  }
  render() {
    return (
      <div>
        <form className="add-explanation-form">
          <h2 className="font-med font-bold-med">Optional Intro Text</h2>
          <textarea onChange={this.sendIntroTextChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${this.props.currentConcept}s...`} rows="5"></textarea>
          <h2 className="font-med font-bold-med margin-top-sml">Link</h2>
          <input onChange={this.sendMediaLinkChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" placeholder="https:// ..." name="link-input" />
        </form>
      </div>
    )
  }
}

export default AddLink
