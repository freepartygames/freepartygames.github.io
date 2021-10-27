//Making the refresh animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//Wie schnell der text eingeflogen kommt
//tl.fromTo(".main", { opacity: 0 }, { opacity: 1, duration: 1 });
//tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//starting with acutal page
let pflichten = [
    "Küss deinen linken/rechten Nachbarn auf die Wange oder den Mund.",
    "Zeig uns deine Google Suchhistorie.",
    "Imitiere einen brunftigen Hirsch.",
    "Tausche dein Oberteil mit dem Spieler links/rechts von dir.",
    "Leg dich in die Mitte, schließ die Augen und lass dich eine Minute lang von allen kitzeln.",
    "Mach 10 Liegestütze.",
    "Mach ein Selfie von der Gruppe und poste es auf Instagram/Facebook/Snapchat.",
    "Mach der Person links/rechts von dir ein ernstgemeintes Kompliment.",
    "Teste wessen Haare am besten riechen.",
    "Imitiere eine Person aus der Runde. Die anderen müssen erraten, wer es ist.",
    "Trink das Getränk von dem Spieler links/rechts von dir auf ex. ",
    "Beleidige die Person links/rechts von dir." ,
    "Schick einer Person per Whatsapp ein Kompliment." ,
    "Zeig allen ein peinliches Foto von dir." ,
    "Zeig allen deine letzte Whatsapp.",
    "Zeig allen das letzte Foto was du geschossen hast." ,
    "Umarme die Person gegenüber so herzlich wie möglich. ",
    "Flirte eine Runde mit der Person links/rechts von dir.",
    "Erzähl der Person gegenüber, was du besonders attraktiv an ihr findest.",
    "Schrei 20 schlimme Schimpfwörter.",
    "Schütte dir einen Drink ein, ohne die Hände zu benutzen." ,
    "Ruf die fünft letzte Nummer die du gewählt hast an, frag die Person wie das folgende Lied heißt und sing es ihr vor, bis sie den Titel nennt." ,
    "Du bist für eine Runde der Buttler. Achte darauf, dass alle Gäste immer genug zu trinken haben und behandle sie mit ausreichend Respekt.",
    "Du hast dich schlecht verhalten. Stell dich eine Runde in die Ecke und schäm dich.",
    "Stell dich in die Mitte, schließ deine Augen und lass dich von einem zufälligen Mitspieler küssen.",
    "Du musst fünf Minuten lang mit der Person deiner Wahl Händchen halten.",
    "Der Spieler rechts von dir darf dir ein Gebräu aus allen möglichen Zutaten mischen und du musst es trinken.",
    "Umarme die Person, die dir gegenüber sitzt.",
    "Die Gruppe darf sich ein Lied aussuchen, du musst dazu tanzen!",
    "Zeige uns deinen Bauch.",
    "Spiele 1 Runde lang Gollum aus Herr der Ringe nach.",
    "Sing dein aktuelles Lieblingslied laut vor der Gruppe.",
    "Kuss auf die Wange/die Augen /die Nasse eine anders geschlechtliche Person.",
    "Umarme die Person, die dir gegenüber sitzt.",
    "Lass dir von dem Mitspieler links eine krasse Frisur stylen.",
    "Lass dir die Augen verbinden und erkenne einen Mitspieler am Geruch.",
    "Mach eine Person in der Gruppe deiner Wahl nach.",
    "Mache fünf Liegestütze.",
    "Rede drei Runden mit einem Akzent!",
    " Denke an etwas in deinem Zimmer. Buchstabiere es nun mit der Nase und mach so lange weiter, bis jemand aus der Gruppe errät, was du zu buchstabieren versuchst.",
    "Flirte einen Mitspieler an, so als wäre er/sie der heißeste Typ/Mädel, den du je gesehen hast. Gib alles!",
    "Iss etwas und tue so, als wäre es das Leckerste, was du je gegessen hast.",
    "Für einen Jungen: Trage Make-up auf. Für ein Mädchen: Entferne dein Make-up.",
    "Lass dich zehn Sekunden lang durchkitzeln.",
    "Führe eine Unterhaltung mit einem Stuhl und tu so, als ob er antworten würde.",
    "Mach den Moonwalk von Michael Jackson nach.",
    "Finde heraus, wessen Haare am besten riechen.",
    "Mach jemanden aus der Runde pantomimisch nach. Die anderen müssen erraten, wer es ist!",
    "Die Person, die Gegenüber sitzt, musst du zum Lachen bringen.",
    "Mache einer Person deiner Wahl aus der Runde einen Heiratsantrag.",
    "Spiele eine Sterbeszene.",
    "Bewerte im Stil von Dieter Bohlen 2 Runden lang jede Aktion deiner Mitspieler.",
    "Laufe einmal um die Gruppe herum und belle wie ein Hund.",
    "Lass jemanden ein Klebeband auf einen beliebigen Teil deines Körpers kleben und es abreißen.",
    "Mache jedem in der Runde ein Kompliment.",
    "Bring jeden in der Gruppe zum Lächeln; mach so lange weiter, bis jeder einmal gelächelt hat.",
    "Lass dir die Augen verbinden und erkenne einen Mitspieler am Geruch.",
    "Lass dir die Augenbrauen von einem Mitspieler zupfen.",
    "Führ dich wie ein Arschloch auf und mache mit einer Person deiner Wahl Schluss.",
    "Schminke dich mit Lebensmitteln aus der Küche.",
    "Füttere eine Person deiner Wahl mit Sprühsahne.",
    "Überzeuge jemanden davon, dich als Sklaven zu kaufen – indem du ihm Dienste anbietest, die du aber auch einhalten musst!",
    "Leck einen Gegenstand deiner Wahl ab.",
    "Male deine Traumfrau / deinen Traummann so originalgetreu wie möglich auf.",
    "Mache mir eine (versaute / witzige / romantische) Liebeserklärung.",
    "Mache einer Person deiner Wahl aus der Runde einen Heiratsantrag."
    ]
let titleEl = document.getElementById("title").innerHTML = get_random(pflichten)
let refreshBtn = document.getElementById("refresh-btn")

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

refreshBtn.addEventListener('click', function(){
    window.location.reload()
})