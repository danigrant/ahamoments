import React from 'react'
import Card from '../Card'
import CardSection from '../CardSection'

class UploadVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileToUpload: ''
    }
  }
  sendFileChangeToParent = (e) => {
    this.props.handleFileChange(e)
  }
  sendIntroTextChangeToParent = (e) => {
    this.props.handleIntroTextChange(e)
  }
  render() {
    return (
      <div>
        <form className="add-explanation-form">
          <h2 className="font-med font-bold-med">Optional Intro Text</h2>
          <textarea onChange={this.sendIntroTextChangeToParent} className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${this.props.currentConcept}s...`} rows="5"></textarea>
          <h2 className="font-med font-bold-med margin-top-sml">Upload Your Video</h2>
          {
            this.props.mode == "record" &&
            <p className="font-color-light-grey font-med font-bold-med">Record a video and then upload it here. In your video you can sing a song, do an interpretive dance, tell a joke or just explain it straight, Can’t wait to see what you come up with.</p>
          }
          <input onChange={this.sendFileChangeToParent} className="margin-top-sml font-med" type="file" name="photo-upload" accept="video/mp4,video/x-m4v,video/*" />
        </form>
      </div>
    )
  }
}

export default UploadVideo

// <form className="add-explanation-form">
//   <h2 className="font-med font-bold-med">Optional Intro Text</h2>
//   <textarea className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="text" placeholder={`Here is a fabulous way to understand ${router.query.id}s...`} rows="5"></textarea>
//   <h2 className="font-med font-bold-med margin-top-sml">Link to YouTube video</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="url" placeholder="https:// ..." />
//   <h2 className="font-med font-bold-med margin-top-sml">What part should someone listen to?</h2>
//   <h2 className="font-color-light-grey font-med font-bold-med">(i.e. start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00)</h2>
//   <input className="margin-top-sml font-med background-grey rounded-border light-border" type="text" name="how-to-consume" placeholder="Start at 0:10 and listen until 3:50 and then listen again from 4:05-5:00" />
// </form>
