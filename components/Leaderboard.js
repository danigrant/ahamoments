import React from 'react'
import Header from '../components/Header'
import AppContainer from '../components/AppContainer'
import Card from '../components/Card'
import CardSection from '../components/CardSection'
import Link from 'next/link'

class Leaderboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Card>
          <CardSection>
            <table className="leaderboard-table font-bold-med">
              <tr className="light-border-bottom">
                <th></th>
                <th></th>
                <th></th>
                <th className="center">Aha Moments</th>
                <th className="center">Explanations</th>
                <th className="center"><img className="avatar-sml-size-no-positioning" src="/images/reactions/get-it-cat.png" /></th>
                <th className="center"><img className="avatar-sml-size-no-positioning" src="/images/reactions/laughing.png" /></th>
                <th className="center"><img className="avatar-sml-size-no-positioning" src="/images/reactions/shocked.png" /></th>
              </tr>
              <tr className="light-border-bottom">
                <td>1</td>
                <td><img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar.jpg" /></td>
                <td className="link-no-color-change"><Link href="/explainer/@barackobama">@barackobama</Link></td>
                <td className="center font-color-light-grey">200</td>
                <td className="center font-color-light-grey">100</td>
                <td className="center font-color-light-grey">50</td>
                <td className="center font-color-light-grey">40</td>
                <td className="center font-color-light-grey">30</td>
              </tr>
              <tr className="light-border-bottom">
                <td>2</td>
                <td><img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar2.jpg" /></td>
                <td className="link-no-color-change"><Link href="/explainer/@hasanminhaj">@hasanminhaj</Link></td>
                <td className="center font-color-light-grey">200</td>
                <td className="center font-color-light-grey">100</td>
                <td className="center font-color-light-grey">50</td>
                <td className="center font-color-light-grey">40</td>
                <td className="center font-color-light-grey">30</td>
              </tr>
              <tr className="light-border-bottom">
                <td>3</td>
                <td><img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar3.jpg" /></td>
                <td className="link-no-color-change"><Link href="/explainer/@trevornoah">@trevornoah</Link></td>
                <td className="center font-color-light-grey">200</td>
                <td className="center font-color-light-grey">100</td>
                <td className="center font-color-light-grey">50</td>
                <td className="center font-color-light-grey">40</td>
                <td className="center font-color-light-grey">30</td>
              </tr>
              <tr className="light-border-bottom">
                <td>4</td>
                <td><img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar4.jpg" /></td>
                <td className="link-no-color-change"><Link href="/explainer/@stephencolbert">@stephencolbert</Link></td>
                <td className="center font-color-light-grey">200</td>
                <td className="center font-color-light-grey">100</td>
                <td className="center font-color-light-grey">50</td>
                <td className="center font-color-light-grey">40</td>
                <td className="center font-color-light-grey">30</td>
              </tr>
              <tr className="light-border-bottom">
                <td>5</td>
                <td><img className="avatar avatar-sml-size-no-positioning" src="/images/temp-avatar5.jpg" /></td>
                <td className="link-no-color-change"><Link href="/explainer/@iamjohnoliver">@iamjohnoliver</Link></td>
                <td className="center font-color-light-grey">200</td>
                <td className="center font-color-light-grey">100</td>
                <td className="center font-color-light-grey">50</td>
                <td className="center font-color-light-grey">40</td>
                <td className="center font-color-light-grey">30</td>
              </tr>
            </table>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default Leaderboard
