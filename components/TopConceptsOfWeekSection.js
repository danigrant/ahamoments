import React from 'react'
import Card from './Card'
import TopConceptCardSection from './TopConceptCardSection'

class TopConceptsOfWeekSection extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card>
        {
          this.props.concepts.map(c => {
            return <TopConceptCardSection concept={c} />
          })
        }
      </Card>
    )
  }
}

export default TopConceptsOfWeekSection
