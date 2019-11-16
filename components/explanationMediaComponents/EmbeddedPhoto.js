// fetch photo from firebase
import React from 'react'
import Loading from '../Loading'
import { getFileURLFromFirebaseStorage } from '../../utils/firebase'

class EmbeddedPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mediaUrl: false
    }
  }
  async componentDidMount() {
    this.setState({
      mediaUrl: await getFileURLFromFirebaseStorage(this.props.photo)
    })
  }
  render() {
    if (!this.state.mediaUrl) {
      return <Loading />
    }
    return (
      <div className="center">
        <img className="inline-explanation-image" src={this.state.mediaUrl} />
      </div>
    )
  }
}

export default EmbeddedPhoto
