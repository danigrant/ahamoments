import React from 'react'

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="searchbox-wrapper light-border rounded-border">
        <form className="rounded-border">
          <i className="material-icons font-color-light-grey">search_rounded</i>
          <input className="rounded-border" autoComplete="off" name="q" placeholder="Find your next aha moment…" />
        </form>
      </div>
    )
  }
}

export default SearchBox
