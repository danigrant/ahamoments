const Card = props => {
  return (
    <div className="card-wrapper light-border drop-shadow rounded-border">
      {props.children}
    </div>
  )
}

export default Card
