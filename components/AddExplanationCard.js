import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import UploadImage from './uploadExplanationComponents/UploadImage'
import { saveExplanationWithFileToDB } from '../utils/firebase'
import { withRouter } from 'next/router'

class AddExplanationCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: '', // photo, video, audio, podcast, youtube, tweet, link, text
      fileToUpload: '',
      introText: '',
      mediaLink: '',
      mediaConsumptionGuidance: '',
    }
  }
  handleFileChange = (e) => {
    this.setState({fileToUpload: e.target.files[0]});
  }
  handleIntroTextChange = (e) => {
    this.setState({introText: e.target.value});
  }
  handleSubmit = (e) => {
    const { router } = this.props
    e.preventDefault()
    saveExplanationWithFileToDB(this.state.introText, this.state.fileToUpload, this.state.type, this.props.loggedInUser.userID, router.query.id)
  }
  render() {
    const { router } = this.props
    return (
      <div>
        <Card>
          <CardSection>
            <div className="columns-parent-div">
              <div className="column-80-p">
                <p className="font-color-light-grey">Add your own explanation and give someone an aha moment.</p>
              </div>
              <div className="column-20-p">
                <div className="action-button button background-purple rounded-border font-med font-bold-extra float-right">Contribute</div>
              </div>
            </div>
          </CardSection>
          <CardSection>
            <h2 className="font-med">
              <span className="link">@barackobama </span>
              explains
              <span className="link"> {router.query.id} </span>
              through
              <span className="link"> spoken word</span>
            </h2>
            <div className="media-type-selection-section margin-top-sml">
              <div onClick={() => { this.setState({ type: "text" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Write Something</div>
              <div onClick={() => { this.setState({ type: "podcast" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Podcast Snippet</div>
              <div onClick={() => { this.setState({ type: "youtube" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">YouTube Clip</div>
              <div onClick={() => { this.setState({ type: "video" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Record Your Own Video</div>
              <div onClick={() => { this.setState({ type: "audio" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Record Your Own Audio</div>
              <div onClick={() => { this.setState({ type: "tweet" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Tweet</div>
              <div onClick={() => { this.setState({ type: "video" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Upload A Video</div>
              <div onClick={() => { this.setState({ type: "photo" }) }} className="action-button button background-purple rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Upload A Photo</div>
              <div onClick={() => { this.setState({ type: "photo" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Draw Something And Upload It</div>
              <div onClick={() => { this.setState({ type: "link" }) }} className="action-button button background-dark-grey rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml">Link To Something On The Web</div>
            </div>
          </CardSection>
          <CardSection>
            <UploadImage handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
          </CardSection>
          <CardSection>
            <div onClick={this.handleSubmit} className="action-button button background-purple rounded-border font-med font-bold-med">Submit!</div>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default withRouter(AddExplanationCard)


// <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>
