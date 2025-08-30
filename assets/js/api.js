
async function fetchProfileData() {
    //const url = 'https://raw.githubusercontent.com/digitalinnovationone/js-developer-portfolio/main/data/profile.json';
    const url = 'https://raw.githubusercontent.com/ricardoorrico/js-developer-portfolio/blob/main/data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
