import React from 'react'
import Header from '../../components/Header'
import AppContainer from '../../components/AppContainer'
import Card from '../../components/Card'
import CardSection from '../../components/CardSection'
import ExplanationCard from '../../components/ExplanationCard'
import Loading from '../../components/Loading'
import { getLoggedInUser, getUserByID } from '../../utils/firebase'
import { withRouter } from 'next/router'

class ProfilePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentProfileUser: {}
    }
  }
  async componentDidMount() {
    this.setState({
      currentProfileUser: await getUserByID(this.props.router.query.id),
    })
  }
  render() {
    const { router } = this.props
    {
      if (!this.state.currentProfileUser.displayName) {
        return (
          <Loading loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser} />
        )
      } else {
        return (
          <div>
            <Header loggedIn={this.props.loggedIn} loggedInUser={this.props.loggedInUser}/>
            <AppContainer>
              <h1 className="font-lrg font-bold-med inline-block">{this.state.currentProfileUser.displayName}</h1>
              <Card>
                <CardSection>
                  <div className="columns-parent-div">
                    <div className="column-50-p flex-center-contents-vertically flex-justify-flex-start">
                      <img className="avatar avatar-sml top-zero" src="/images/temp-avatar.jpg" />
                      <p className="font-bold-med font-med inline-block">{this.state.currentProfileUser.displayName}</p>
                    </div>
                    <div className="column-50-p flex-center-contents-vertically flex-justify-flex-end">
                      <p className="font-color-light-grey font-bold-med">{this.state.currentProfileUser.explanationCount} explanations • {this.state.currentProfileUser.ahaMomentCount} aha moments</p>
                    </div>
                  </div>
                </CardSection>
              </Card>
              <h1 className="margin-top-lrg font-lrg font-bold-med inline-block">Here are all the different ways {this.state.currentProfileUser.displayName} has explained things</h1>
              <div className="margin-top-sml">
                {
                  this.state.currentProfileUser.explanations.map(e => {
                    return <ExplanationCard key={e.explanationID} explanation={e} />
                  })
                }
              </div>
            </AppContainer>
          </div>
        )
      }
    }
  }
}

export default withRouter(ProfilePage)
