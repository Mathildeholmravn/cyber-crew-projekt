
const main = document.querySelector("main");

const updateUI = (pText, btnsText, imgPath, stageClass) => {

/* tilføjelse af nextStage */

const nextStage = (e) => {
    let pText, btnsText, imgPath, stageClass;

    console.log("Knap klikket:", e.target.textContent);

    switch(e.target.textContent){

/* STAGE 0 - Mistænkelig e-mail */
case "START SCENARIE NU":
    pText = "Du har modtaget en mail fra Statens Uddannelsesstøtte. Læs den grundigt og træf et valg baseret på din viden omkring cybersikkerhed.";
    btnsText = [
    "Jeg reagerer hurtigt og klikker på linket",
    "E-mailen virker mistænkelig - Jeg ignorerer den bare.",
    "Jeg sikrer mig at e-mailen ikke er falsk. Hellerer være på den sikre side!"]

    imgPath = "img/placeholder.png";
    break; 

/* STAGE 1 - Klik på link */
case "Jeg reagerer hurtigt og klikker på linket":
        pText = "Du klikker på linnket i mailen. Her bliver du bedt om at indtaste dine login-oplysninger. Indtaster du dine login-oplysninger?";
        btnsText = [
            "Du indtaster de nødvendige oplysninger",
            "Du bliver mistænksom og fortryder dit valg. Du lukker hurtigt browseren ned"
        ];
        imgPath = "img/personoplysningerscenarie.png";
        break; 

    /* STAGE  -  */
case "":
        btnsText = [
            "",
            ""
        ];
        imgPath = "img/";
        break; 


/* STAGE 2 */

/* STAGE 3 */

/* STAGE 4 */

    }
}





/* Hvad kalder man mon nedenstående del? */
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active"); 

    if (stageClass) {
        section.classList.add(stageClass);
    }

    if (imgPath !== undefined) {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = "billede af"; /* Skal rettes */
        section.append(img);
    }

    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p); 

    if (btnsText && btnsText.length > 0) {
        btnsText.forEach(text => {
            const button = document.createElement("button");
            button.classList.add("btn");
            button.textContent = text;
            button.addEventListener("click", nextStage);
            section.append(button);
        })
    }


    main.replaceChildren(section); /* Slet alt i den gamle section og lav en ny section */
}; 

let btns;

