import React from 'react'
import Loading from '../Loading'
import YouTube from 'react-youtube';


class EmbeddedYouTube extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      youtubeVideoID: false
    }
  }
  async componentDidMount() {
    this.setState({
      youtubeVideoID: this.props.youtube.split('v=')[1].split('&')[0]
    })
  }
  render() {
    if (!this.state.youtubeVideoID) {
      return <div>loading...</div>
    } else {
      return (
        <div className="center">
          <YouTube videoId={this.state.youtubeVideoID} />
        </div>
      )
    }
  }
}

export default EmbeddedYouTube
