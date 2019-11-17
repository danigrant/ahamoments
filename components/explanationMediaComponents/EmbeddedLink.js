
const EmbeddedLink = props => {
  return (
    <div>
      <a className="action-button button background-light-blue rounded-border" href={props.link} target="_blank">{props.link}</a>
    </div>
  )
}

export default EmbeddedLink
