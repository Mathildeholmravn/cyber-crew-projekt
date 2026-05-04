/* Burger Menu Toggle */
const bars = document.getElementById("bars");
const menu = document.getElementById("menu");

bars.addEventListener("click", () => {
    menu.classList.toggle("active");
    bars.setAttribute("aria-expanded", menu.classList.contains("active"));
});

const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");
const main = document.querySelector(".scenario-main");


/* Funktion der opdaterer UI */
const updateUI = (h3Text, pText, btnsText, imgPath) => {



/* Sektioner */
    const section = document.createElement("section");
    section.classList.add("stage");
    section.classList.add("active"); 

    /* h3 */
    const h3 = document.createElement("h3");
    h3.textContent = h3Text;
    section.append(h3);

    /* Billede */
    if(imgPath != undefined) {
        const img = document.createElement("img");
        img.src = imgPath;
        img.alt = "Stage billede";
        section.append(img);
    }

    /* p */
    const p = document.createElement("p");
    p.textContent = pText;
    section.append(p);

    /* Knapper */
    btnsText.forEach(text => {
        const button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", nextStage);
        section.append(button);
    })

    main.replaceChildren(section); /* Slet alt i den gamle section og lav en ny section */
}; 

/* tilføjelse af nextStage */
/* \n\n = linkeskift i tekst */

const nextStage = (e) => {
    let h3Text, pText, btnsText, imgPath;

    console.log("Knap klikket:", e.target.textContent);
    switch(e.target.textContent){

/* STAGE 0 - Mistænkelig e-mail */
case "START SCENARIE NU":
    h3Text = "PHISING SCENARIE";
    pText = "Du har modtaget en mail fra Statens Uddannelsesstøtte. Læs den grundigt og træf et valg baseret på din viden omkring cybersikkerhed.";
    btnsText = [
    "Jeg reagerer hurtigt og klikker på linket.",
    "E-mailen virker mistænkelig - Jeg ignorerer den bare.",
    "Jeg sikrer mig at e-mailen ikke er falsk. Hellere være på den sikre side!"]

    imgPath = "img/forstørrelsesglasscenarie.png";
    break; 

/* STAGE 1 - Klik på link */
case "Jeg reagerer hurtigt og klikker på linket.":
        h3Text = "DU KLIKKER PÅ LINKET!";
        pText = "Du klikker på linket i mailen. Her bliver du bedt om at indtaste dine login-oplysninger. Indtaster du dine login-oplysninger?";
        btnsText = [
            "Du indtaster de nødvendige oplysninger.",
            "Du bliver mistænksom og fortryder dit valg. Du lukker hurtigt browseren ned."
        ];
        imgPath = "img/personoplysningerscenarie.png";
        break; 

/* STAGE 2 - Tjek af detaljer */
case "Jeg sikrer mig at e-mailen ikke er falsk. Hellere være på den sikre side!":
        h3Text = "DETEKTIV MODE";
        pText = "Du tjekker om: Afsenderens e-mail adresse virker officiel og troværdig, sproget virker autogenereret eller mangelfuldt, virker mailen presserende og truende? og bliver du bedt om at videre give følsomme oplysninger?\n\nE-mailen opfylder alle ovenstående punkter og du konkluderer at e-mailen må være falsk. Hvad gør du nu?";
        btnsText = [
            "Jeg har ikke tænkt mig at åbne dette link!Jeg ignorerer mailen og kommer videre med min dag.",
            "Forbandet svindlere! Jeg må sørge for at anmelde e-mailen!"
        ];
        imgPath = "img/forstørrelsesglasscenarie.png";
        break; 


/* STAGE 3 - Mistænksomhed og fortydelse */
case "Du bliver mistænksom og fortryder dit valg. Du lukker hurtigt browseren ned.":
        h3Text = "HMM...DET VIRKER MISTÆNKELIGT!";
        pText = "Godt at du reagerede på din mavefornemmelse! Hackerne nåede heldigvis ikke at få fat i dine værdiefulde og personlige oplysninger. Hvad gør du nu?";
        btnsText = [
            "Jeg ignorerer mailen og kommer videre med min dag.",
            "Forbandet svindlere! Jeg må sørge for at anmelde e-mailen!"
        ];
        imgPath = "img/forstørrelsesglasscenarie.png";
        break; 

/* Rød afslutning: De blev phisked! */
case "Du indtaster de nødvendige oplysninger.":
    h3Text = "PAS PÅ DINE OPLYSNINGER!";
    pText = "Du har indtastet dine oplysninger og hackerne kan nu logge ind på dine konto og misbruge dine personlige oplysninger.\n\nDu kan begrænse skaden ved at:\n• Skifte dine kodeord med det samme\n• Kontakte support og Statens Uddannelsesstøtte\n• Anmelde phising-angrebet\n\nSelv hvis du laver fejl, kan du stadig nå at reagere. Bliv en del af Cyber Crew. Sammen passer vi på hinanden."
    btnsText = ["START FORFRA"];
    imgPath = "img/forstørrelsesglasscenarie.png";
    break;

/* Orange afslutning: De blev phisked! */
case "E-mailen virker mistænkelig - Jeg ignorerer den bare.":
case "Jeg har ikke tænkt mig at åbne dette link!Jeg ignorerer mailen og kommer videre med min dag.":
case "Jeg ignorerer mailen og kommer videre med min dag.":
    h3Text = "DU ER SIKKER!";
    pText = "Du er stadig sikker! Men dine medstuderende er måske ikke.\n\nHer er nogle tips:\n• Husk at være skeptisk over for mails der presser dig\n• Check altid afsenderens e-mail adresse\n• Se efter stavefejl og autogenereret sprog\n\nBliv en del af Cyber Crew. Sammen passer vi på hinanden.";
    btnsText = ["START FORFRA"];
    imgPath = "img/haenderklapperikonscenarie.png";
    break;


/* Grøn afslutning: De blev phisked! */
case "Forbandet svindlere! Jeg må sørge for at anmelde e-mailen!":
    h3Text = "DU ER SIKKER! GODT KLARET";
    pText = "Ved at anmelde e-mailen blev phising-kampangen stoppet og du hjalp med at beskytte dine medstuderende!\n\nDu har nu en vigtig rolle i at sikre vores fælles cyber-fremtid.\n\nBliv en del af Cyber Crew. Vi hjælper hinanden til en sikker cyber fremtid.";
    btnsText = ["START FORFRA"];
    imgPath = "img/haenderklapperikonscenarie.png";
    break;

/* Start forfra */
case "START FORFRA":
    h3Text = "PHISHING SCENARIE";
    pText = "Du har modtaget en mail fra Statens Uddannelsesstøtte. Læs den grundigt og træf et valg baseret på din viden omkring cybersikkerhed.";
    btnsText = [
    "Jeg reagerer hurtigt og klikker på linket.",
    "E-mailen virker mistænkelig - Jeg ignorerer den bare.",
    "Jeg sikrer mig at e-mailen ikke er falsk. Hellere være på den sikre side!"]

    imgPath = "img/forstørrelsesglasscenarie.png";
    break; 

    }   
     updateUI(h3Text, pText, btnsText, imgPath);
}       

for (const btn of btns) {
    console.log("Tilføjer listener til knap:", btn.textContent);
    btn.addEventListener("click", nextStage);
}
    




