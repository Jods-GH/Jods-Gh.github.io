
window.onload = function(){

    let language = localStorage.getItem('language') || navigator.language || navigator.userLanguage || 'en-US';
    handleLanguage(language); //setting language

}

function handleLanguage(language){
    console.log(language);
    let location = window.location.href;
    let url = new URL(location);
    let pathName = url.pathname;
    let newPathname = `/${language}${pathName}`;
    let newUrl = `${url.origin}${newPathname}`;
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