import React from 'react'
import Card from '../Card'
import CardSection from '../CardSection'

class AddYouTube extends React.Component {
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
  sendMediaGuidanceChangeToParent = (e) => {
    this.props.handleMediaGuidanceChange(e)
  }
  render() {
    return (
      <div>
        <form className="add-explanation-form">
          <h2 className="font-med font-bold-med">Optional Intro Text</h2>
          <textarea onChange={this.sendIntroTextChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${this.props.currentConcept}s...`} rows="5"></textarea>
          <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
          <input onChange={this.sendMediaLinkChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" placeholder="https://youtube.com/watch ..." name="video-input" />
          <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
          <p className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</p>
          <textarea onChange={this.sendMediaGuidanceChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder="start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" rows="2"></textarea>
        </form>
      </div>
    )
  }
}

export default AddYouTube
