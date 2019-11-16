import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import UploadImage from './uploadExplanationComponents/UploadImage'
import UploadVideo from './uploadExplanationComponents/UploadVideo'
import UploadAudio from './uploadExplanationComponents/UploadAudio'
import AddTweet from './uploadExplanationComponents/AddTweet'
import AddPodcast from './uploadExplanationComponents/AddPodcast'
import AddLink from './uploadExplanationComponents/AddLink'
import AddYouTube from './uploadExplanationComponents/AddYouTube'
import WriteText from './uploadExplanationComponents/WriteText'
import { saveExplanationWithFileToDB, saveWrittenExplanationToDB, saveExternalLinkExplanationToDB } from '../utils/firebase'
import { withRouter } from 'next/router'

class AddExplanationCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: false, // photo, video, audio, podcast, youtube, tweet, link, text
      fileToUpload: '',
      introText: '',
      mediaLink: '',
      mediaConsumptionGuidance: '',
      showAddExplanationSection: false,
      activeElement: "none" // write, podcast, youtube, recordVideo, recordAudio, tweet, uploadVideo, uploadPhoto, draw, link
    }
  }
  handleFileChange = (e) => {
    this.setState({fileToUpload: e.target.files[0]});
  }
  handleIntroTextChange = (e) => {
    this.setState({introText: e.target.value});
  }
  handleMediaLinkChange = (e) => {
    this.setState({mediaLink: e.target.value});
  }
  handleMediaGuidanceChange = (e) => {
    this.setState({mediaConsumptionGuidance: e.target.value});
  }
  handleSubmit = (e) => {
    const { router } = this.props
    e.preventDefault()
    if (this.state.type == "photo" || this.state.type == "video" || this.state.type == "audio") {
      saveExplanationWithFileToDB(this.state.introText, this.state.fileToUpload, this.state.activeElement, this.props.loggedInUser.userID, router.query.id)
    } else if (this.state.type == "text") {
      saveWrittenExplanationToDB(this.state.introText, this.props.loggedInUser.userID, router.query.id)
    } else if (this.state.type == "podcast" || this.state.type == "youtube" || this.state.type == "tweet" || this.state.type == "link") {
      saveExternalLinkExplanationToDB(this.state.introText, this.state.mediaLink, this.state.mediaConsumptionGuidance, this.state.activeElement, this.props.loggedInUser.userID, router.query.id)
    }
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
                {
                  !this.state.showAddExplanationSection &&
                  <div onClick={() => { this.setState({ showAddExplanationSection: true }) }} className="action-button button background-purple rounded-border font-med font-bold-extra float-right">Contribute</div>
                }
                {
                  this.state.showAddExplanationSection &&
                  <div onClick={() => { this.setState({ showAddExplanationSection: false, typeSelected: false, activeElement: "none" }) }} className="font-med font-bold-extra float-right"><i className="material-icons">close_rounded</i></div>
                }
              </div>
            </div>
          </CardSection>
          {
            this.state.showAddExplanationSection &&
            <CardSection>
              <h2 className="font-med">
                <span className="link">@barackobama </span>
                explains
                <span className="link"> {router.query.id} </span>
                through
                <span className="link"> spoken word</span>
              </h2>
              <div className="media-type-selection-section margin-top-sml">
                <div onClick={() => { this.setState({ type: "text", activeElement: "write" }) }} className={this.state.activeElement == "write" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Write Something</div>
                <div onClick={() => { this.setState({ type: "podcast", activeElement: "podcast" }) }} className={this.state.activeElement == "podcast" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Podcast Snippet</div>
                <div onClick={() => { this.setState({ type: "youtube", activeElement: "youtube" }) }} className={this.state.activeElement == "youtube" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>YouTube Clip</div>
                <div onClick={() => { this.setState({ type: "video", activeElement: "recordVideo" }) }} className={this.state.activeElement == "recordVideo" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Record Your Own Video</div>
                <div onClick={() => { this.setState({ type: "audio", activeElement: "recordAudio" }) }} className={this.state.activeElement == "recordAudio" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Record Your Own Audio</div>
                <div onClick={() => { this.setState({ type: "tweet", activeElement: "tweet" }) }} className={this.state.activeElement == "tweet" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Tweet</div>
                <div onClick={() => { this.setState({ type: "video", activeElement: "uploadVideo" }) }} className={this.state.activeElement == "uploadVideo" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Upload A Video</div>
                <div onClick={() => { this.setState({ type: "photo", activeElement: "uploadPhoto" }) }} className={this.state.activeElement == "uploadPhoto" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Upload A Photo</div>
                <div onClick={() => { this.setState({ type: "photo", activeElement: "draw" }) }} className={this.state.activeElement == "draw" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Draw Something And Upload It</div>
                <div onClick={() => { this.setState({ type: "link", activeElement: "link" }) }} className={this.state.activeElement == "link" ? "background-purple action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml" : "background-dark-grey action-button button rounded-border font-med font-bold-med margin-right-sml margin-bottom-sml"}>Link To Something On The Web</div>
              </div>
            </CardSection>
          }
          {
            this.state.showAddExplanationSection && this.state.type &&
            <div>
              <CardSection>
                {
                  this.state.type == "text" &&
                  <WriteText handleTextChange={this.handleIntroTextChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "podcast" &&
                  <AddPodcast handleIntroTextChange={this.handleIntroTextChange} handleMediaLinkChange={this.handleMediaLinkChange} handleMediaGuidanceChange={this.handleMediaGuidanceChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "youtube" &&
                  <AddYouTube handleIntroTextChange={this.handleIntroTextChange} handleMediaLinkChange={this.handleMediaLinkChange} handleMediaGuidanceChange={this.handleMediaGuidanceChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "video" &&
                  <UploadVideo handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "audio" &&
                  <UploadAudio handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "tweet" &&
                  <AddTweet handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "photo" &&
                  <UploadImage handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
                }
                {
                  this.state.type == "link" &&
                  <AddLink handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} handleIntroTextChange={this.handleIntroTextChange} handleFileChange={this.handleFileChange} currentConcept={router.query.id} />
                }
              </CardSection>
              <CardSection>
                <div onClick={this.handleSubmit} className="action-button button background-purple rounded-border font-med font-bold-med">Submit!</div>
              </CardSection>
            </div>
          }
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
