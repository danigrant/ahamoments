import React from 'react'
import Loading from '../Loading'
import ReactPlayer from 'react-player'

class EmbeddedPodcast extends React.Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {

  }
  render() {
    return (
      <div className="soundcloud-widget-wrapper">
        <ReactPlayer url={this.props.podcast} playing={false} controls={true} />
      </div>
    )
  }
}

export default EmbeddedPodcast

/*

https://radiopublic.com/ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo/s1!e4eae
https://embed.radiopublic.com/e?if=ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo&ge=s1!e4eae7b857c0e17d9476e56dd2b156cadb393386


<iframe sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups" scrolling=no width="100%" height="185" frameborder="0" src="https://embed.radiopublic.com/e?if=ThisAmerLife:dHJlbmRpbmctaW4tc2VhcmNo&ge=s1!e4eae7b857c0e17d9476e56dd2b156cadb393386"></iframe>


*/
