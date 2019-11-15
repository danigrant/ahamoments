import React from 'react'
import Card from './Card'
import TopCreatorCardSection from './TopCreatorCardSection'

class TopCreatorsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        {
          this.props.creators.map(c => {
            return <TopCreatorCardSection creator={c} />
          })
        }
      </Card>
    )
  }
}

export default TopCreatorsOfWeekSection
