
const EmbeddedLink = props => {
  return (
    <div>
      <a className="word-wrap action-button button background-light-blue rounded-border" href={props.link} target="_blank">{props.link}</a>
    </div>
  )
}

export default EmbeddedLink
