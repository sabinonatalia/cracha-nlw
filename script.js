const LinkSocialMedia = {
  github: "sabinonatalia",
  youtube: "rocketseat",
  facebook:"rocketseat",
  instagram:"rocketseat_oficial",
  twitter:"rocketseat"
  
}

function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

  function getGithubProfilesInfos(){
    const url = "https://api.github.com/users/`${LinksSocialMedia.github}`"
  }

  getGithubProfilesInfos()