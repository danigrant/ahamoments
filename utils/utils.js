const conceptToDisplayName = concept => {
  // replace - with space
  return concept.replace("-", " ")
}

//audio, photo, video, youtube, tweet, text, link
const explanationTypeToDisplayType = explanationType => {
  switch(explanationType) {
  case "audio":
    return "spoken word"
    break;
  case "photo":
    return "illustration"
    break;
  case "video":
    return "monologue"
    break;
  case "youtube":
    return "poetry"
    break;
  case "tweet":
    return "280 characters"
    break;
  case "text":
    return "biography"
    break;
  default:
    return "interpretive dance"
  }
}

module.exports = {
  conceptToDisplayName,
  explanationTypeToDisplayType
}
