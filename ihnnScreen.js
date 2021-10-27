//Making the refresh animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//Wie schnell der text eingeflogen kommt
//tl.fromTo(".main", { opacity: 0 }, { opacity: 1, duration: 1 });
//tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//starting with acutal page
let ihnn = [
    "gelogen",
    "betrogen",
    "gestohlen",
    "Drogen ausprobiert",
    "Handschellen getragen",
    "geprügelt",
    "jemanden wissentlich um Geld betrogen",
    "bei der Beichte gelogen",
    "Vandalismus betrieben",
    "mir gewünscht, mit jemanden den Körper tauschen zu können",
    "meine Eltern beklaut",
    "über jemanden Lügen verbreitet",
    "“Ich liebe dich” gesagt, obwohl ich es nicht so meinte",
    "meinen Ex ausspioniert?",
    "so getan, als hätte ich eine Nachricht nicht gelesen, weil ich nicht darauf antworten wollte.",
    "Kleidungsstück gekauft, getragen und am nächsten Tag zurückgebracht.",
    "mein Alter verleugnet, nur um jemanden näher kennenzulernen.",
    "mich selbst in den Schlaf geweint.",
    "vor einem Flug getrunken, um meine Nerven zu beruhigen.",
    "etwas zerstört, nur um mich an jemandem zu rächen.",
    "mich so sehr blamiert, dass ich mich bis heute dafür schäme.",
    "einen Film mehr als 15 Mal gesehen.",
    "eine falsche Identität im Internet benutzt.",
    "jemanden gleichzeitig geliebt und gehasst.",
    "einen Bungee-Sprung gemacht.",
    "etwas besonders Ekliges gegessen.",
    "etwas auf jemand anderen geschoben, das in Wirklichkeit ich gemacht habe.",
    " jemanden gedated, der eigenartig war.",
    "so getan, als würde ich vor einem Millionenpublikum stehen und singen.",
    "mehr als 200€ an einem Abend ausgegeben.",
    "so viel Angst gehabt, dass ich am ganzen Körper gezittert habe",
    "auf einer Party geweint.",
    "für jemanden gekocht.",
    "in der Öffentlichkeit gekotzt.",
    "beim Zahnarzt geweint.",
    "aus Eifersucht eine Szene gemacht.",
    "einen ganzen Tag lang geweint",
    "mit meinen Eltern über meine Sexualität gesprochen.",
    "jemanden nach seiner Telefonnummer gefragt und danach nie angerufen.",
    "per SMS mit jemandem Schluss gemacht.",
    "einen ganzen Tag am Computer gespielt.",
    "über meinen Ex gedacht: Wie konnte ich nur mit diesem Menschen zusammen sein?",
    "einen Horrorfilm alleine gekuckt.",
    "etwas verloren, weil ich so betrunken war.",
    "nie Unterwäsche vom anderen Geschlecht getragen.",
    "nie einen Liebesbrief geschrieben.",
    "nie einen Strafzettel gekriegt",
    "nie während eines Dates eine Ausrede benutzt, um das Treffen frühzeitig zu beenden.",
    "von Alkohol einen Blackout gehabt.",
    "nie ein Telefonat von mehr als 5 Stunden geführt.",
    "ein übles Gerücht über jemanden in die Welt gesetzt.",
    "nie einen Wutanfall gekriegt.",
    "den Wunsch gehabt, in eine andere Stadt zu ziehen.",
    "nie völlig nackt geschlafen",
    "versucht, das Passwort eines anderen zu erraten.",
    "davon geträumt, ein Charakter aus einem Buch/Film zu sein.",
    "vor der Polizei fliehen müssen.",
    "so getan, als wäre ich betrunken.",
    "die Sachen meines Partners angezogen.",
    "einen Knochenbruch gehabt.",
    "bei einem Film geweint.",
    "so heftig gelacht, dass ich pinkeln musste.",
    "das Geheimnis eines anderen ausgeplaudert (versehentlich oder absichtlich).",
    "den Wunsch gehabt, unsichtbar zu sein.",
    "eine Schlägerei mit einem Türsteher gehabt.",
    "das Herz eines anderen gebrochen.",
    "jemanden zufällig nackt gesehen, den ich nicht nackt hätte sehen sollen.",
    "etwas anderes als Klopapier benutzt.",
    "den Notruf gewählt.",
    "den Notruf gewählt.",
    "das Handy meines Partners durchsucht.",
    "für einen aus dieser Gruppe geschwärmt.",
    "nach Nacktfotos von Stars im Internet gesucht. ",
    "länger als eine Woche nicht geduscht.",
    "Drogen gekauft",
    "harte Drogen genommen (Koks, MDMA, LSD etc.)",
    "auf ein Date eingelassen, einfach aus dem Grund, weil ich nicht bezahlen wollte ",
    "versucht auf TikTok viral zu gehen",
    "nach einer wilden Nacht irgendwo draußen aufgewacht",
    "Verbindungsprobleme vorgetäuscht, um aus einem Zoom Meeting zu kommen",
    "mehr als eine Person in 24 Stunden geküsst. ",
    "ein Geschenk weiterverschenkt. ",
    "einen fiesen Kommentar auf Social Media verfasst. ",
    "vor Freude geweint. ",
    "jemanden geghostet. ",
    "geglaubt, dass es irgendwo spukt. ",
    "jemanden auf Instagram gestalkt. ",
    "Angst vor der Zukunft gehabt. ",
    "etwas vor Wut kaputt gemacht. ",
    "eine Verabredung abgesagt, weil ich zu faul war.",
    "ein Straßenschild geklaut.",
    "so getan als würde ich jemanden (nicht) kennen.",
    "einen Crush auf einen animierten Charakter gehabt.",
    "bei einem Bewerbungsgespräch gelogen.",
    "etwas gefrorenes angeleckt um zu überprüfen ob meine Zunge wirklich daran hängen bleibt.",
    "in der Schule/ Uni geweint.",
    "die völlig falschen Lyrics mitgesungen.",
    "mich ein bisschen eingepinkelt weil ich so krass lachen musste.",
    "aus Versehen die falsche Person angerufen und dann trotzdem so getan als ob ich eigentlich einen Grund hätte sie anzurufen.",
    "ein Möbelstück kaputt gemacht nur weil ich darauf saß. ",
    "eine Toilette verstopft.",
    "mich verletzt",
    "jemand anderen verletzt"
    ]
let textEl1 = document.getElementById("text1").innerHTML = get_random(ihnn)

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}