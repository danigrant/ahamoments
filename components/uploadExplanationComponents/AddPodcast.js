import React from 'react'
import Card from '../Card'
import CardSection from '../CardSection'

class AddPodcast extends React.Component {
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
          <h2 className="font-med font-bold-med margin-top-sml"><a className="link" href="https://soundcloud.com/search" target="_blank">SoundCloud> link to podcast</h2>
          <p className="font-color-light-grey font-med font-bold-med">Head over to <a className="link" href="https://soundcloud.com/search" target="_blank">SoundCloud</a> and find the link to the podcast episode you're thinking of.</p>
          <input onChange={this.sendMediaLinkChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" placeholder="https://radiopublic.com/ ..." name="podcast-input" />
          <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
          <p className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</p>
          <textarea onChange={this.sendMediaGuidanceChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder="start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" rows="2"></textarea>
        </form>
      </div>
    )
  }
}

export default AddPodcast
