//Making the refresh animation
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
//Wie schnell der text eingeflogen kommt
//tl.fromTo(".main", { opacity: 0 }, { opacity: 1, duration: 1 });
//tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

//starting with acutal page
let eo = [
    "Barfuß oder Socken?",
    "Unsichtbar sein oder Gedanken lesen?",
    "Unterwasser atmen oder Fliegen können?",
    "Jogginghose oder Jeans?",
    "Samstag oder Sonntag?",
    "Schwitzen oder Frieren?",
    "Android oder iPhone?",
    "Stadt oder Dorf?",
    "McDonald's oder Burger King?",
    "Pizza oder Nudeln?",
    "Schokolade oder Chips?",
    "Aufzug oder Treppe?",
    "Hund oder Katze?",
    "Sommer oder Winter?",
    "Herbst oder Frühling?",
    "Cola oder Pepsi?",
    "Reisen oder Balkonien?",
    "Strandurlaub oder Städtetrip?",
    "Viel Geld oder viel Freizeit?",
    "Reich oder berühmt?",
    "Geburtstag oder Weihnachten?",
    "Frühstück oder Abendessen?",
    "Star Wars oder Star Trek?",
    "Harry Potter oder Herr der Ringe?",
    "Marvel oder DC?",
    "Bösewicht oder Superheld?",
    "Süßes oder salziges Popcorn?",
    "Horror oder Comedy?",
    "Kino oder Netflix?",
    "Rache oder Vergebung?",
    "Optimist oder Pessimist?",
    "Realist oder Träumer?",
    "Tattoo oder Piercing?",
    "In einer WG oder alleine leben?",
    "Nachricht schreiben oder anrufen? ",
    "Liebe oder Geld? ",
    "Perfekte Haare oder perfekte Zähne? ",
    "Vintage Style oder neu? ",
    "Neues Handy oder neuer Laptop? ",
    "Jetzt jünger oder älter sein",
    "Intelligenz oder Humor?",
    "Film oder Serie?",
    "Im Lotto gewinnen oder den/die Seelenverwandte/n finden",
    "Nach Schweiß riechen oder aus dem Mund stinken?",
    "Lieber 100 km/h rennen können, oder 1 km/h fliegen?",
    "Gegen ein entengroßes Nashorn kämpfen müssen oder gegen 10 nashorngroße Enten?",
    "Wärst du lieber ein ehrliches Arschloch, oder ein netter Lügner?",
    "Alles wissen oder alles haben?",
    "Eine*n Psychopath*in daten oder ein* Psychopath*in sein?",
    "Wissen WANN du stirbst oder wissen, WIE du stirbst?",
    "Vergessen, wer du bist, oder vergessen wer deine Freund*innen sind?",
    "Als du selbst wiedergeboren werden oder nach dem Zufallsprinzip als ein Tier wiedergeboren werden?",
    "Besseres Gesundheitssystem oder besseres Bildungssystem?",
    "Entweder allein verschollen in einem Gebirge oder gestrandet auf einer einsamen Insel?",
    "Lieber extrem schlau oder ein extremer Glückspilz?",
    "Ewig auf der Flucht oder 10 Jahre im Gefängnis?",
    "Jetzt eine Millionen Euro bekommen oder in 10 Jahren 50 Bitcoin?",
    "Eine 99% Chance, 1 Millionen zu gewinnen – oder eine 50/50 Chance, eine Milliarde zu gewinnen?",
    "Der schlaueste oder der reichste Mensch der Welt sein?",
    "100 Fremde retten oder einen geliebten Menschen retten?",
    "Die Zukunft kennen oder in die Vergangenheit reisen?",
    "Große Schmerzen für 10 Minuten oder unterschwellige Schmerzen für 24 Stunden?",
    "Freiheit oder Hoffnung? ",
    "Plötzlicher Erfolg oder geplanter Erfolg?",
    "Alte Freundschaft wiederbeleben oder alte Liebe wiederbeleben?",
    "Im Lotto gewinnen oder den Traumjob finden?",
    "Verärgerte Eltern oder verärgerte Freunde?",
    "Fragen stellen oder Fragen beantworten?",
    "Keine Gäste auf deiner Beerdigung oder keine Gäste auf deiner Hochzeit? ",
    "In der Friendzone landen oder geghosted werden?",
    "Würdest du eher die Helligkeit oder die Lautstärke auf deinem Handy für immer niedrig einstellen?", 
    "Würdest du eher die Katze deiner Familie oder eine streunende Katze sein?", 
    "Würdest du eher die Unterseite deines Schuhs lecken oder den großen Zeh eines Fremden lecken?", 
    "Würdest du eher Dinge sehen, die sehr weit entfernt sind (wie mit einem Fernglas), oder Dinge aus der Nähe sehen (wie mit einem Mikroskop)?", 
    "Würdest du eher ein berühmter Schauspieler/eine berühmte Schauspielerin oder ein berühmte Sänger/eine berühmte Sängerin sein?", 
    "Würdest du eher ein Doppel-Date mit deinen Eltern oder mit den Eltern deines Partners haben?", 
    "Würdest du eher ein lebenslanges Gratis-Abo für Netflix oder eine unbegrenzte Geschenkkarte für Starbucks haben?", "Würdest du eher ein magisches Fahrrad haben, das fliegen kann, oder einen Roboter besitzen?",
    "Würdest du eher ein peinliches, betrunkenes Bild von dir als Instagram-Story posten, die dein Schwarm sieht, oder deinem Schwarm eine peinliche Direktnachricht schicken?", 
    "Würdest du eher eine elefantengroße Katze oder einen katzengroßen Elefanten haben?", 
    "Würdest du eher eine ganze Zwiebel oder eine ganze Zitrone essen?", 
    "Würdest du eher eine Woche lang die internationale Raumstation besuchen oder eine Woche in einem Unterwasserhotel leben?", "Würdest du eher einen Drachen oder ein Einhorn als Haustier haben?", 
    "Würdest du eher einen fliegenden Teppich oder ein durchsichtiges U-Boot haben?", 
    "Würdest du eher einen Kopf, so groß wie ein Tennisballs oder einen Kopf so groß wie eine Wassermelone haben?", "Würdest du eher einen Schwanz wie einen Hund oder Flügel haben, die nicht fliegen können?", 
    "Würdest du eher einen zusätzlichen Finger oder eine zusätzlichen Zehe haben?", 
    "Würdest du eher einmal pro Woche deine kleine Zehe anstoßen oder einen Daumen verlieren?", 
    "Würdest du eher extreme Akne haben, die nur an Stellen auftritt, die mit Kleidung bedeckt sind, oder mittelschwere Akne, die nur auf deinem Gesicht auftritt?", 
    "Würdest du eher fliegen oder unsichtbar sein können?", 
    "Würdest du eher für den Rest deines Lebens lieber jeden Tag kalt duschen oder für nur kaltes Essen essen?", "Würdest du eher Gedanken lesen oder in die Zukunft sehen können?", 
    "Würdest du eher Grashaare oder eine Gurkennase haben?", 
    "Würdest du eher Gummibären niesen oder Schokolade weinen?", 
    "Würdest du eher im Game of Thrones Universum oder im The Walking Dead Universum leben?", 
    "Würdest du eher immer overdressed oder immer underdressed sein?", 
    "Würdest du eher immer T-Shirts tragen, die eine Größe zu klein oder zwei Größen zu groß sind?", 
    "Würdest du eher in deinem Haus nur eine einzige Farbe haben oder jede einzelne Wand und Tür mit einer andere Farbe anstreichen?", "Würdest du eher in den Wolken oder unter Wasser leben?", 
    "Würdest du eher in der Schule oder auf einer Familienfeier nur in Unterwäsche aufwachen?", 
    "Würdest du eher in einem Obdachlosenheim mit kostenlosem WLAN leben oder in einer wunderschönen Villa, das von jeglichem Kontakt von der Außenwelt isoliert ist?", 
    "Würdest du eher in einem Schloss oder in einem Raumschiff leben?", 
    "Würdest du eher in Pudding oder in Nutella schwimmen?",
    "Würdest du eher jede Mahlzeit wie einen Smoothie trinken oder nie wieder Schokolade essen?", 
    "Würdest du eher jeden Tag dein Lieblingsessen essen oder jeden Morgen 5 Euro unter deinem Kissen finden?",
    ]
let textEl1 = document.getElementById("text1").innerHTML = get_random(eo)

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
}