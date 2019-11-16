import React from 'react'
import Loading from '../Loading'
import { getTwitterEmbed } from '../../utils/utils'

class EmbeddedTweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      embedHTML: false
    }
  }
  async componentDidMount() {
    this.setState({
      embedHTML: await getTwitterEmbed(this.props.tweet)
    })
  }
  render() {
    if (!this.state.embedHTML) {
      return <Loading />
    }
    return (
      <div className="center">
        {this.state.embedHTML}
      </div>
    )
  }
}

export default EmbeddedTweet
