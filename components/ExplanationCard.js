import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import MultiAvatarUnit from './MultiAvatarUnit'
import AhaButton from './AhaButton'
import DontGetItButton from './DontGetItButton'
import ReactionButtonBar from './ReactionButtonBar'
import Link from 'next/link'

class ExplanationCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="explanation-card-wrapper">
        <Card>
          <CardSection>
            <img className="avatar avatar-sml" src="/images/temp-avatar5.jpg" />
            <p className="font-color-light-grey inline-block">
              <span className="link"><Link href="/explainer/@hasanminhaj">@hasanminhaj</Link> </span>
              explains
              <span className="link"> <Link href="/concept/reinmann-sums">Riemann Sums</Link> </span>
              through
              <span className="link"> spoken word</span>
            </p>
          </CardSection>
          <CardSection>
            <p>Williamsburg pop-up disrupt selvage street art knausgaard. Enamel pin bespoke bicycle rights, craft beer mustache chartreuse cronut cred actually. Jean shorts hexagon art party pop-up four loko scenester, retro four dollar toast meggings gluten-free.</p>
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
