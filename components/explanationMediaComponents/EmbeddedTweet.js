import React from 'react'
import Loading from '../Loading'
import { TwitterTweetEmbed } from 'react-twitter-embed';


class EmbeddedTweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetID: false
    }
  }
  async componentDidMount() {
    this.setState({
      tweetID: this.props.tweet.split('status/')[1].split('?')[0]
    })
  }
  render() {
    if (!this.state.tweetID) {
      return <div>loading...</div>
    } else {
      return (
        <div className="center">
          <TwitterTweetEmbed
            tweetId={this.state.tweetID}
          />
        </div>
      )
    }
  }
}

export default EmbeddedTweet
