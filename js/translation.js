const selectedEnglish = document.getElementById("eng");
const selectedFrench = document.getElementById("fra");
const selectedGerman = document.getElementById("ger");
const hidden = "display:none;";
const shown = "display:block;";

const allEnglishText = document.getElementsByClassName("eng");
const allFrenchText = document.getElementsByClassName("fra");
const allGermanText = document.getElementsByClassName("ger");

//SHOW ALL ENGLISH TEXT
function showEnglishText() {
    for (element in allEnglishText) {
       allEnglishText[element].style = shown;
    }
    for (element in allFrenchText) {
      allFrenchText[element].style = hidden;
    }
    for (element in allGermanText) {
      allGermanText[element].style = hidden;
    }
  }
  //SHOW ALL French TEXT
  function showFrenchText() {
    for (element in allEnglishText) {
      allEnglishText[element].style = hidden;
    }
    for (element in allFrenchText) {
      allFrenchText[element].style = shown;
    }
    for (element in allGermanText) {
      allGermanText[element].style = hidden;
    }
  }
  //SHOW ALL German TEXT
  function showGermanText() {
    for (element in allEnglishText) {
      allEnglishText[element].style = hidden;
    }
    for (element in allFrenchText) {
      allFrenchText[element].style = hidden;
    }
    for (element in allGermanText) {
      allGermanText[element].style = shown;
    }
  }

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
    selectedEnglish.classList.add("langSelected");
    selectedFrench.classList.remove("langSelected");
    selectedGerman.classList.remove("langSelected");
   
    showEnglishText();
  });
  
//French-> ALL OTHERS SWITCHED OFF
selectedFrench.addEventListener("click", () => {
    selectedFrench.classList.add("langSelected");
    selectedEnglish.classList.remove("langSelected");
    selectedGerman.classList.remove("langSelected");
   
    showFrenchText();
  });
   
  //German-> ALL OTHERS SWITCHED OFF
  selectedGerman.addEventListener("click", () => {
    selectedGerman.classList.add("langSelected");
    selectedFrench.classList.remove("langSelected");
    selectedEnglish.classList.remove("langSelected");
   
    showGermanText();
  });
  

//Storing the selected language in Local Storage of user's browser
//Even if the page is refreshed, the browser will “remember” which language was selected last

//ENGLISH-> ALL OTHERS SWITCHED OFF
selectedEnglish.addEventListener("click", () => {
    selectedEnglish.classList.add("langSelected");
    selectedFrench.classList.remove("langSelected");
    selectedGerman.classList.remove("langSelected");
   
    showEnglishText();
    localStorage.setItem("languageActive", "english");
  });
   
//French-> ALL OTHERS SWITCHED OFF
selectedFrench.addEventListener("click", () => {
    selectedFrench.classList.add("langSelected");
    selectedEnglish.classList.remove("langSelected");
    selectedGerman.classList.remove("langSelected");
   
    showFrenchText();
    localStorage.setItem("languageActive", "french");
  });
   
//German-> ALL OTHERS SWITCHED OFF
    selectedGerman.addEventListener("click", () => {
    selectedGerman.classList.add("langSelected");
    selectedFrench.classList.remove("langSelected");
    selectedEnglish.classList.remove("langSelected");
   
    showGermanText();
    localStorage.setItem("languageActive", "german");
  });

//Access local storage to recover last language 
//LOCAL STORAGE ADDON
switch (localStorage.getItem("languageActive")) {
 
    case "english":
      selectedEnglish.classList.add("langSelected");
      showEnglishText();
      break;
 
    case "french":
      selectedFrench.classList.add("langSelected");
      showFrenchText();
      break;
 
    case "german":
      selectedGerman.classList.add("langSelected");
      //console.log("German on");
      showGermanText();
      break;
      
    // if there is nothing in local storage, e.g. the user visits the site for the first time,
    // we launch a ``default'' language (here: eglish) 
    default:
      //default ENGLISH text shown, all others disabled
      //default -> no local storage exists
      selectedEnglish.classList.add("langSelected");
      showEnglishText();
  }
