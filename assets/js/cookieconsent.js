// cookieconsent.js
window.cookieconsent.initialise({
  palette: {
    "popup": { "background": "#0C2A3E", "link": "#F0E4AA" },
    "button": { "background": "#0C2A3E" }
  },
  theme: "classic",
  type: "opt-in",
  content: {
    "message": "Ce site utilise des cookies pour vous offrir le meilleur service. En poursuivant votre navigation, vous acceptez l’utilisation des cookies.",
    "allow": "J'ai compris",
    "deny": "Je refuse",
    "link": "En savoir plus",
    "href": "https://docs.google.com/document/d/1gt-vXy-JcgTq5Y-EDevXUm2azehhwOtyzhOsmO--aWA/edit?usp=sharing",
    "policy": 'Cookies',
    "target": '_blank'
  },
  onStatusChange: (status) => {
    if (status == 'deny') {
      disableCookies();
      
    }
    if (status == 'allow') {
      enableCookies()
      
            
    }
  }
});
if (getCookie("cookieconsent_status") != 'deny') {
  // Par defaut, les cookies sont activés
 
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function enableCookies() {
  // Activer les cookies sur votre site
  console.log('cookie accept');
  

  // hide and disable the "Cookie" button
  var consentButton = document.querySelector('.cc-revoke');
  if (consentButton) {
    consentButton.setAttribute('style', 'display: none !important;');
    consentButton.setAttribute('disabled', 'disabled');
    
  }
}

function disableCookies() {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    if (!name.includes("cookieconsent_status")) {
      // Supprime le cookie de '.domain'
      document.cookie = name + "=;domain=." + window.location.hostname + ";max-age=0";
      // Supprime le cookie de 'domain'
      document.cookie = name + "=;domain=" + window.location.hostname + ";max-age=0";
    }
  }
}

