import React from 'react'
import Loading from '../Loading'
import { getFileURLFromFirebaseStorage } from '../../utils/firebase'

class EmbeddedAudio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaUrl: false
    }
  }
  async componentDidMount() {
    this.setState({
      mediaUrl: await getFileURLFromFirebaseStorage(this.props.audio)
    })
  }
  render() {
    if (!this.state.mediaUrl) {
      return <div>loading...</div>
    } else {
      return (
        <div className="center">
          <audio className="inline-explanation-audio" controls>
            <source src={this.state.mediaUrl} />
            Your browser does not support in-browser audio players.
          </audio>
        </div>
      )
    }
  }
}

export default EmbeddedAudio
