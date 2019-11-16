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

async function getTwitterEmbed(tweetUrl) {
  let twitterUser = tweetUrl.split('twitter.com/')[1].split('/')[0]
  let twitterStatus = tweetUrl.split('status/')[1].split('?')[0]
  let res = await fetch(`https://twitter-get-embed-code-proxy.herokuapp.com/twitter-embed-code?name=kylesamani&status=1148350276983824385`)
  // let res = await fetch(`https://twitter-get-embed-code-proxy.herokuapp.com/twitter-embed-code?name=${twitterUser}&status=${twitterStatus}`)
  let text = await res.text()
  console.log();
  return text
}

module.exports = {
  conceptToDisplayName,
  explanationTypeToDisplayType,
  generateFilePathAndName,
  getTwitterEmbed
}
