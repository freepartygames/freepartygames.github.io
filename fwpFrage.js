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
    "Hast du schon mal mit einer Frau / einem Mann rumgemacht?",
    "Was würdest du machen, wenn du für einen Tag ein Mann oder eine Frau wärst?",
    "Hast du schon mal illegale Drogen genommen?",
    "Hast du schon mal sexy Bilder von dir verschickt?",
    "Würdest du mit jemandem knutschen, den du gerade erst kennengelernt hast?",
    "Wer in der Runde hat den schönsten Hintern?",
    "Welche Körperstellen rasierst du regelmäßig?",
    "Wenn du mit einer Person in der Runde schlafen müsstest, wen würdest du auswählen?",
    "Wen in der Runde würdest du am ehesten küssen und warum?",
    "Wenn du mit einer Person in der Runde schlafen müsstest, wen würdest du auswählen?",
    "Wie schafft man es am besten dich zu erregen?",
    "Bist du eher dominant oder devot?",
    "Welche Kleidung findest du besonders sexy an dir?",
    "Welches Pornogenre findest du am besten?",
    "Erzähle allen von einer Sexphantasie. ",
    "Schätze wer in der Runde am besten im Bett ist und warum. ",
    "Was würdest du gerne mal bei mir… (bei Person xy) machen, wenn du danach mein (ihr, sein…) Gedächtnis löschen könntest?",
    "Wen aus unserer Runde möchtest du am liebsten nackt sehen?",
    "Hattest du schon mal einen erotischen Traum in dem jemand aus dieser Runde vorkam?",
    "Wenn du dich im Intimbereich tätowieren würdest – was stünde dort?",
    "Was ist wichtiger in einer Beziehung – Sex oder Liebe?",
    "Findest du Sex geil, gut, okay, ab und an ganz nett – oder ist er dir nicht so wichtig?",
    "Was macht für dich richtig guten Sex aus?",
    "Wie oft in der Woche / im Monat hast du Sex – und wie oft hättest du gerne Sex?",
    "Wie, wo und mit wem hattest du dein erstes Mal?",
    "Welches Körperteil turnt dich am meisten an?",
    "Mit wie vielen unterschiedlichen Sexpartnern hast du schon geschlafen?",
    "Wie wichtig ist ein ausgedehntes Vorspiel für dich?",
    "Hattest du schon mal einen Dreier? Und wie fandest du es?",
    "Hattest du schon mal Sex mit einem guten Freund?",
    "Hattest du schon mal Sex mit einem aus dieser Runde – außer deinem Partner?",
    "Was ist der peinlichste Moment beim Sex, den du je hattest?",
    "Du bist total verliebt, aber dann zieht er/sie sich aus. Was müsste passieren, damit du schreiend davon läufst?",
    "Worauf achtest du bei einer Frau zuerst – Brüste, Hintern oder Gesicht?",
    "Hast du dich schon mal beim Gedanken an einen aus dieser Runde befriedigt?",
    "Was ist deine Lieblingsstellung beim Sex?",
    "Was ist beim Sex für dich ein absolutes Tabu?",
    "Hattest du schon mal Cybersex oder Telefonsex – und mit wem?",
    "Was ist dein versautester geheimer Wunsch?",
    "Was ist schöner – beschnitten oder unbeschnitten?",
    "Mit wem aus dieser Runde glaubst du, hättest du den besten Sex?",
    "Wem würdest du Geld dafür geben, mit dir zu schlafen?",
    "Was war dein verrücktestes Sex-Erlebnis?",
    "Hattest du schon mal gefährlichen Sex – und wie genau war das?",
    "Hattest du schon mal Sex mit einem Unbekannten? z.B. von Tinder?",
    "Woran denkst du am liebsten, wenn du dich selbst befriedigst?",
    "Hast du schon einmal Sex mit dem gleichen Geschlecht gehabt?",
    "Du hattest mit mir Sex. Was würdest du danach zu mir sagen?",
    "Wie kann man dich am besten flach legen?",
    "Mit wem würdest du auf jeden Fall schlafen – egal ob du verheiratet bist oder unsterblich verliebt?",
    "Mit wem hattest du den besten Sex deines Lebens?",
    "Hast du schon mal für Sex bezahlt?",
    "Über wen hattest du deinen letzten heißen Traum?",
    "Bist du schon mal beim Sex überrascht worden – und von wem?"
    ]
    
let titleEl = document.getElementById("title").innerHTML = get_random(wahrheiten)
let refreshBtn = document.getElementById("refresh-btn")

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}

refreshBtn.addEventListener('click', function(){
    window.location.reload()
})