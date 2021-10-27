//Making the refresh animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//Wie schnell der text eingeflogen kommt
//tl.fromTo(".main", { opacity: 0 }, { opacity: 1, duration: 1 });
//tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//starting with acutal page
let wahrheiten = [
    "Wie viele Jungs / Mädchen hast du bisher geküsst?",
    "Bist du im Moment verliebt?",
    "Was war dein letzter Traum an den du dich erinnerst?",
    "Hast du schon mal etwas geklaut? Wenn ja, was?",
    "Was war dein schönstes Date?",
    "Was war dein schlimmstes Date?",
    "Wen in der Runde findest du am interessantesten?",
    "Mit wem in der Runde würdest du am liebsten einen Urlaub verbringen?",
    "Hast du schon mal eine Straftat begangen?",
    "Mit wem hattest du deinen ersten Kuss?",
    "Welches Tier wärst du am liebsten?",
    "Hast du schon mal illegale Drogen genommen?",
    "Wen in der Runde findest du am attraktivsten?",
    "Wonach hast du als letztes gegoogelt?",
    "Wer in der Runde ist am besten angezogen und warum?",
    "Welches ist dein aktuelles Lieblingslied?",
    "Von wem hast du deinen letzten Korb bekommen?",
    "Hast du schon mal auf dem Klo telefoniert?",
    "Was war das gemeinste, was du je getan hast?",
    "Was war das kriminellste, was du je getan hast?",
    "Würdest du mit jemandem knutschen, den du gerade erst kennengelernt hast?",
    "Was findest du an dir am sexiesten?",
    "Wofür hast du dich in letzter Zeit geschämt?",
    "Worauf guckst du zuerst, wenn du jemanden kennenlernst?",
    "Wie kann man dich am schnellsten von sich begeistern?",
    "Was würdest du machen, wenn du für einen Tag unsichtbar wärst?",
    "Wer in der Runde hat die schönsten Lippen?",
    "Wie sieht dein Traumdate aus?",
    "Mit wem in der Runde würdest du gerne für einen Tag das Leben tauschen?",
    "Was war deine letzte Lüge?",
    "Welches Abenteuer würdest du gerne noch erleben?",
    "Hast du schon mal jemanden betrogen?",
    "Was würdest du an deinem Körper verändern wenn du könntest?",
    "Was würdest du machen, wenn du nur noch eine Stunde zu leben hättest?",
    "Was turnt dich bei Frauen/Männern besonders an?",
    "Wie kriegt man dich am besten rum?",
    "Welche Kleidung findest du besonders sexy an dir?",
    "Welches Pornogenre findest du am besten?",
    "Erzähle allen von einer Sexphantasie. ",
    "Schätze wer in der Runde am besten im Bett ist und warum. ",
    "In wen aus der Runde könntest du dich am ehesten verlieben?",
    "Was magst du nicht an dir?",
    "Was war die mutigste Aktion deines Lebens? ",
    "Wen in diesem Raum magst du am meisten?",
    "In welchen Star warst du früher unsterblich verknallt?",
    "Welche Charaktereigenschaften magst du an dir?",
    "Was hältst du für deine beste Eigenschaft? Und was ist die Schlechteste?",
    "Welcher Mitspieler hat die schönsten Hände?",
    "Auf eine Skala von 1 – 10: Für wie gut aussehend hältst du dich?",
    "Wenn du in die Runde schaust, wer wird später am meisten Geld verdienen?",
    "Was ist die interessanteste Narbe oder der interessanteste Fleck auf deinem Körper?",
    "Wieso ist die Person rechts von dir schön?",
    "Was ist das Peinlichste, das du je gemacht hast?",
    "Was hältst du für deine beste Eigenschaft? Und was ist die schlechteste?",
    "Verrate mir ein Geheimnis aus deiner Kindheit.",
    "Was ist dein größtes (geheimes) Laster?",
    "Was ist das Mutigste, das du je getan hast?",
    "Wen aus der Runde würdest du am liebsten in ein Schwein verzaubern?",
    "Wovon träumst du beim Schlafen am häufigsten?",
    "Wenn du illegal dein Geld verdienen würdest, womit würdest du es verdienen?",
    "Wenn du blind wärst, wer aus der Runde wäre dein Blindenhund?",
    "Womit kann man dich am meisten beeindrucken?",
    "Wenn du ab jetzt für den Rest des Abends nur noch 3 Worte benutzen dürftest um dich auszudrücken – welche wären es?",
    "Wenn du Diktator wärst, welches Gesetz würdest du als erstes erlassen?",
    "Wenn du zur Nazi-Zeit gelebt hättest, wer wärst du gewesen?",
    "Was war das peinlichste Erlebnis in deiner Schulzeit / Studienzeit / Ausbildung / im letzten Jahr?",
    "Was war der größte Fehler deines Lebens?",
    "Was würdest du niemals tun – auch wenn du weißt, du hast nur noch 12 h zu leben?",
    "Welche Straftat hast du schon begangen?",
    "Was ist das Schlimmste, was du je jemanden angetan hast?",
    "In wen warst du bis jetzt am heftigsten verknallt?",
    "Warst du schon einmal in einen der hier Anwesenden verliebt?",
    "Wenn du ein Vampir wärst, wen von uns würdest du jetzt beißen?",
    "Was ist das Schlimmste was du je erlebt hast?",
    "Was war dein schlimmster Korb?",
    "Was ist deine dunkelste Fantasie?",
    "Was ist das Schönste, dass du je mit einem anderen Menschen erlebt hast?",
    "Was ist für dich der größte Abturner, den es gibt?",
    "Was findest du an deinem Körper am schönsten und was am hässlichsten?",
    "In wen aus der Runde könntest du dich am ehesten verlieben?",
    "Was muss ein Mann / eine Frau tun, um dich zu verführen?",
    "Worauf achtest du bei einer Frau zuerst – Brüste, Hintern oder Gesicht?",
    "Worauf achtest du bei einem Mann zuerst und was muss er haben damit du denkst: awwwww, geil!",
    "Was ist das geilste, was du je getan hast?",
    ]
    
let titleEl = document.getElementById("title").innerHTML = get_random(wahrheiten)
let refreshBtn = document.getElementById("refresh-btn")

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

refreshBtn.addEventListener('click', function(){
    window.location.reload()
})
