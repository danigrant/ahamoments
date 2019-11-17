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

const generateFilePathAndName = (fileType, userID, concept) => {
  let randomID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  return `/${concept}/${fileType}/${userID}/${randomID}`
}

module.exports = {
  conceptToDisplayName,
  explanationTypeToDisplayType,
  generateFilePathAndName
}
