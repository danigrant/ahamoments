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
              {
                this.props.topCreators.map((c, index) => {
                  return (
                    <tr className="light-border-bottom">
                      <td>{index + 1}</td>
                      <td><img className="avatar avatar-sml-size-no-positioning" src={c.avatarUrl} /></td>
                      <td className="link-no-color-change"><Link href={`/explainer/${c.userID}`}>{c.displayName}</Link></td>
                      <td className="center font-color-light-grey">{c.ahaMomentCount}</td>
                      <td className="center font-color-light-grey">{c.explanationCount}</td>
                      <td className="center font-color-light-grey">{c.reactions.gotItCount}</td>
                      <td className="center font-color-light-grey">{c.reactions.laughingCount}</td>
                      <td className="center font-color-light-grey">{c.reactions.shockedCount}</td>
                    </tr>
                  )
                })
              }
            </table>
          </CardSection>
        </Card>
      </div>
    )
  }
}

export default Leaderboard
