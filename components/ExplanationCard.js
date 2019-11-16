import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import MultiAvatarUnit from './MultiAvatarUnit'
import AhaButton from './AhaButton'
import DontGetItButton from './DontGetItButton'
import ReactionButtonBar from './ReactionButtonBar'
import Link from 'next/link'
import EmbeddedPhoto from './explanationMediaComponents/EmbeddedPhoto'
import EmbeddedAudio from './explanationMediaComponents/EmbeddedAudio'
import EmbeddedVideo from './explanationMediaComponents/EmbeddedVideo'
import EmbeddedTweet from './explanationMediaComponents/EmbeddedTweet'
import EmbeddedYouTube from './explanationMediaComponents/EmbeddedYouTube'
import EmbeddedPodcast from './explanationMediaComponents/EmbeddedPodcast'
import EmbeddedLink from './explanationMediaComponents/EmbeddedLink'
import { conceptToDisplayName, explanationTypeToDisplayType } from '../utils/utils'

class ExplanationCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="explanation-card-wrapper">
        <Card>
          <CardSection>
            <img className="avatar avatar-sml" src={this.props.explanation.authorAvatarUrl} />
            <p className="font-color-light-grey inline-block">
              <span className="link"><Link href={`/explainer/${this.props.explanation.authorUserID}`}><a>{this.props.explanation.authorDisplayName}</a></Link> </span>
              explains
              <span className="link"> <Link href={`/concept/${this.props.explanation.concept}`}><a>{conceptToDisplayName(this.props.explanation.concept)}</a></Link> </span>
              through
              <span className="link"> {explanationTypeToDisplayType(this.props.explanation.explanation.type)}</span>
            </p>
          </CardSection>
          <CardSection>
            <p>{this.props.explanation.explanation.introText}</p>
            {
              this.props.explanation.explanation.type == "tweet" &&
              <EmbeddedTweet tweet={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "audio" &&
              <EmbeddedAudio audio={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "link" &&
              <EmbeddedLink link={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "photo" &&
              <EmbeddedPhoto photo={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "podcast" &&
              <EmbeddedPodcast podcast={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "video" &&
              <EmbeddedVideo video={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.type == "youtube" &&
              <EmbeddedYouTube youtube={this.props.explanation.explanation.mediaLink}/>
            }
            {
              this.props.explanation.explanation.mediaConsumptionGuidance &&
              <p>{this.props.explanation.explanation.mediaConsumptionGuidance}</p>
            }
          </CardSection>
          <CardSection>
            <AhaButton />
            <DontGetItButton />
            <ReactionButtonBar className="float-right" />
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default ExplanationCard
