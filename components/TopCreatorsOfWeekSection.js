import React from 'react'
import Card from './Card'
import CardSection from './CardSection'
import Link from 'next/link'

class TopCreatorsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar5.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <Link href="/explainer/@iamjohnoliver">
                  <h2 className="link-no-color-change">@iamjohnoliver</h2>
                </Link>
              </div>
              <div className="row">
                <p className="font-color-light-grey">124 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <Link href="/explainer/@barackobama">
                  <h2 className="link-no-color-change">@barackobama</h2>
                </Link>
              </div>
              <div className="row">
                <p className="font-color-light-grey">121 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar2.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <Link href="/explainer/@hasanminhaj">
                  <h2 className="link-no-color-change">@hasanminhaj</h2>
                </Link>
              </div>
              <div className="row">
                <p className="font-color-light-grey">114 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar3.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <Link href="/explainer/@trevornoah">
                  <h2 className="link-no-color-change">@trevornoah</h2>
                </Link>
              </div>
              <div className="row">
                <p className="font-color-light-grey">102 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
        <CardSection>
          <div className="columns-parent-div">
            <div className="column-20-p flex-horizontal-center">
              <img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar4.jpg" />
            </div>
            <div className="column-80-p">
              <div className="row">
                <Link href="/explainer/@stephencolbert">
                  <h2 className="link-no-color-change">@stephencolbert</h2>
                </Link>
              </div>
              <div className="row">
                <p className="font-color-light-grey">84 Explanations</p>
              </div>
            </div>
          </div>
        </CardSection>
      </Card>
    )
  }
}

export default TopCreatorsOfWeekSection
