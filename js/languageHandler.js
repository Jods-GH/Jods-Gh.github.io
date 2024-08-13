const languageRegex = /^\/[a-z]{2}-[A-Z]{2}/;
window.addEventListener("load", (event) => {
    const languageLink = document.getElementById('linkToLanguage')
    languageLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        let language = languageLink.attributes['languageoflink'].value;
        localStorage.setItem('language', language);
        handleLanguage(language);
    });
});

function handleLanguage(language){
    let location = window.location.href;
    let url = new URL(location);
    let pathName = url.pathname;
    if (languageRegex.test(pathName)) {
        // Replace the existing language code with the new one
        pathName = pathName.replace(languageRegex, `/${language}`);
    } else {
        // If no language code is present, prepend the new one
        pathName = `/${language}${pathName}`;
    }

    let newUrl = `${url.origin}${pathName}${url.search}`;
    if( newUrl !== location){
        checkAndChangeToURL(newUrl);
    }
}

async function checkAndChangeToURL(url) { 
    try { 
      const response = await fetch(url); 
      if (response.ok) { 
        window.location.replace(url);
      }
      console.log("doing nothing");
    } catch (error) {
      console.log("doing nothing");
    }
}

let currentLanguage = localStorage.getItem('language') || navigator.language || navigator.userLanguage || 'en-US';
handleLanguage(currentLanguage); //setting language