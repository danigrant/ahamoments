const ReactionButtonBar = props => {
  return (
    <div className="reaction-button-bar-wrapper rounded-border inline-block float-right light-border">
      <div onClick={props.handleReactionGotIt} className="reaction-button inline-block">
        <img className="avatar-sml-size-no-positioning grow" src="/images/reactions/get-it-cat.png" />
      </div>
      <div onClick={props.handleReactionLaughing} className="reaction-button inline-block">
        <img className="avatar-sml-size-no-positioning grow" src="/images/reactions/laughing.png" />
      </div>
      <div onClick={props.handleReactionShocked} className="reaction-button inline-block">
        <img className="avatar-sml-size-no-positioning grow" src="/images/reactions/shocked.png" />
      </div>
    </div>
  )
}

export default ReactionButtonBar
