import React from 'react'
import Loading from '../Loading'
import { getFileURLFromFirebaseStorage } from '../../utils/firebase'

class EmbeddedVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaUrl: false
    }
  }
  async componentDidMount() {
    this.setState({
      mediaUrl: await getFileURLFromFirebaseStorage(this.props.video)
    })
  }
  render() {
    if (!this.state.mediaUrl) {
      return <div>loading...</div>
    } else {
      return (
        <div className="center">
          <video className="inline-explanation-video" controls>
            <source src={this.state.mediaUrl} />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      )
    }
  }
}

export default EmbeddedVideo
