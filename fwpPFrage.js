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
    "Tausche dein Oberteil mit dem Spieler links/rechts von dir.",
    "Trinke einen Shot.",
    "Tanze 60 Sekunden sexy zu einem Lied.",
    "Nimm einen Eiswürfel und steck ihn dir in die Hose.",
    "Schick jemandem der nicht mitspielt ein Bild von deinen nackten Füßen." ,
    "Lass einen Spieler an deiner Achsel riechen.",
    "Stell dich in die Mitte, schließ deine Augen und lass dich von einem zufälligen Mitspieler küssen.",
    "Kuss auf die Wange/die Augen /die Nasse eine anders geschlechtliche Person.",
    "Tausche mit einer Person deiner Wahl, die Kleidung (am besten eine Frau mit einem Mann und umgekehrt).",
    "Zieh allen die Socken aus und Stopf sie in deine Hose / und oder deinen BH.",
    "Benimm dich wie eine Nutte oder ein Stricher und versuch jemanden dazu zu bringen, dich zu kaufen.",
    "Überzeuge jemanden davon, dich als Sklaven zu kaufen – indem du ihm Dienste anbietest, die du aber auch einhalten musst!",
    "Leck einen Gegenstand deiner Wahl ab.",
    "Frau: zieh dir den BH aus und bring ihn mir.",
    "Mann: zieh dir deine Boxershorts aus und gib sie mir.",
    "Flüster einer Person deiner Wahl versaute Sachen ins Ohr und versuch sie anzuturnen.",
    "Verkaufe mir dein Geschlechtsteil wie ein Produkt aus der Supermarkt / Elektrofachhandel / Gemüsestand / Autohaus.",
    "Gib eine Erotik-Kontaktanzeige auf!",
    "Setze dich einer Person deiner Wahl auf den Schoß – oder setze sie auf deinen Schoß und spiele einen Orgasmus vor.",
    "Bestimme einen Mitspieler, der dir einen Zungenkuss gibt.",
    "Küsse eine Person gleichen Geschlechts so gut du kannst.",
    "Greife einer Person deiner Wahl in die Hose.",
    "Strippe für mich so gut du kannst.",
    "Öffne mit deinen Lippen und Zähnen die Hose eines Mitspielers deiner Wahl.",
    "Erzähle eine versaute Geschichte und benutze möglichst viele schmutzige Wörter.",
    "Demonstriere mit einem Mitspieler deine Lieblingssexstellung und kommentiere alles.",
    "Führ mit einer Banane oder Gartengurke den perfekten Blowjob vor.",
    "Zieh einem Mitspieler deiner Wahl möglichst verführerisch und erotisch das T-Shirt aus und küsse ihn /sie vom Bauchnabel bis zum Hosenbund.",
    "Mache ein erotisches Foto von einem Mitspieler deiner Wahl.",
    "Versuch eine Person deiner Wahl zu verführen und gehe dabei soweit du willst…"
    ]
let titleEl = document.getElementById("title").innerHTML = get_random(pflichten)
let refreshBtn = document.getElementById("refresh-btn")

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

refreshBtn.addEventListener('click', function(){
    window.location.reload()
})