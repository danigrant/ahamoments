import React from 'react'
import Loading from '../Loading'
import { TwitterTweetEmbed } from 'react-twitter-embed';


class EmbeddedTweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      embedHTML: false
    }
  }
  async componentDidMount() {
  }
  render() {
    return (
      <div className="center">
        <TwitterTweetEmbed
          tweetId={'1148350276983824385'}
        />
      </div>
    )
  }
}

export default EmbeddedTweet
