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
import { addAhaToDB, addDontGetItToDB, addReactionGotItToDB, addReactionLaughingToDB, addReactionShockedToDB } from '../utils/firebase'

class ExplanationCard extends React.Component {
  constructor(props) {
    super(props)
    this.handleAha = this.handleAha.bind(this)
    this.handleDontGetIt = this.handleDontGetIt.bind(this)
    this.handleReactionGotIt = this.handleReactionGotIt.bind(this)
    this.handleReactionLaughing = this.handleReactionLaughing.bind(this)
    this.handleReactionShocked = this.handleReactionShocked.bind(this)
  }
  async handleAha() {
    await addAhaToDB(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID)
    this.props.handleGoToNextCard()
    setTimeout(function(){ this.setState({ confetti: false }) }, 2000);
  }
  async handleDontGetIt() {
    await addDontGetItToDB(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID)
    this.props.handleGoToNextCard()
  }
  async handleReactionGotIt() {
    await addReactionGotItToDB(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID)
  }
  async handleReactionLaughing() {
    await addReactionLaughingToDB(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID)
  }
  async handleReactionShocked() {
    await addReactionShockedToDB(this.props.explanation.explanationID, this.props.loggedInUser.userID, this.props.explanation.authorUserID)
  }
  render() {
    let confettiConfig = {
      angle: 90,
      spread: 45,
      startVelocity: 45,
      elementCount: 50,
      dragFriction: 0.1,
      duration: 3000,
      stagger: 0,
      width: "10px",
      height: "10px",
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
    }
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
            <p className="margin-bottom-sml">{this.props.explanation.explanation.introText}</p>
            {
              this.props.explanation.explanation.mediaConsumptionGuidance &&
              <p className="margin-bottom-sml">{this.props.explanation.explanation.mediaConsumptionGuidance}</p>
            }
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
          </CardSection>
          <CardSection>
            <AhaButton handleAha={this.handleAha} />
            <DontGetItButton handleDontGetIt={this.handleDontGetIt} />
            <ReactionButtonBar className="float-right" handleReactionGotIt={this.handleReactionGotIt} handleReactionLaughing={this.handleReactionLaughing} handleReactionShocked={this.handleReactionShocked} />
          </CardSection>
        </Card>
      </div>
    )
  }
}



export default ExplanationCard
