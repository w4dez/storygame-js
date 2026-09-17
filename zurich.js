
const readline = require("readline-sync");

// COLORS
const GREEN   = "\x1b[32m";
const WHITE   = "\x1b[37m";
const RED     = "\x1b[31m";
const YELLOW  = "\x1b[33m";
const MAGENTA = "\x1b[35m";
const RESET   = "\x1b[0m";


//  HELPER: blocking sleep
function sleep(ms) {
    const end = Date.now() + ms;
    while (Date.now() < end) {
        // just wait
    }
}

//  HELPER: typed-out colored text
function typeText(message, color = GREEN, delay = 35) {
    process.stdout.write(color);
    for (let i = 0; i < message.length; i++) {
        process.stdout.write(message[i]);
        sleep(delay);
    }
    process.stdout.write(RESET + "\n");
}


// instant colored text

function printLine(message, color = GREEN) {
    console.log(color + message + RESET);
}

//  SHORTCUTS

function narration(msg) { typeText(msg, GREEN); }
function choice(msg)    { printLine(msg, WHITE); }
function guy(msg)       { typeText(msg, RED); }
function kiki(msg)      { typeText(msg, YELLOW); }
function lilie(msg)     { typeText(msg, MAGENTA); }

function askChoice(max) {
    while (true) {
    let input = readline.question(WHITE + "Your choice (1-" + max + "): " + RESET);
        let num = Number(input);
        if (!isNaN(num) && num >= 1 && num <= max) {
            return num;
        }
        console.log(RED + "Invalid input. Please enter a number between 1 and " + max + "." + RESET);
    }
}

function pressEnter(message) {
    readline.question(WHITE + message + RESET);
}

let scene = "start";
let bar = "";
let ending = "";

while (scene !== "end") {
    if (scene === "start") {
        printLine("");
        printLine("=== ZÜRICH UNDERGROUND: A Night in Zurich ===", GREEN);
        printLine("");
        narration("The train doors hiss open. Kiki and Lilie step onto the platform");
        narration("of Zürich Hauptbahnhof. The clock reads 21:00.");
        printLine("");
        kiki("Kiki: 'Okay. Electronic music. Zürich. Where do we even start?'");
        lilie("Lilie: 'It's too early for clubs. Let's find a bar first.'");
        printLine("");
        narration("Kiki's phone buzzes. Unknown number: 'I'll find you tonight.'");
        kiki("Kiki: 'Weird. Must be spam.'");
        printLine("");
        pressEnter("Press Enter to continue...");
        printLine("");
        scene = "bar";
    }

    else if (scene === "bar") {
        printLine("");
        choice("Where do you go first?");
        choice("1. Random bar on Langstrasse");
        choice("2. Amboss Rampe Bar");
        choice("3. Kon-Tiki Bar");
        printLine("");

        let pick = askChoice(3
        );
        if (pick === 1) {
            bar = "Langstrasse";
            printLine("");
            narration("You walk down Langstrasse. Neon signs flicker.");
            narration("A bar with no name — just a red light and a door.");
        } else if (pick === 2) {
            bar = "Amboss Rampe";
            printLine("");
            narration("Amboss Rampe. Industrial. Concrete. One swinging lightbulb.");
        } else {
            bar = "Kon-Tiki";
            printLine("");
            narration("Kon-Tiki Bar. Tiki torches. Plastic palms. Daft Punk on ukulele.");
        }

        pressEnter("Press Enter to continue...");
        scene = "shot";
    }

  // scena 2
    else if (scene === "shot") {
        printLine("");
        narration("You're at the " + bar + " bar. A good-looking guy appears");
        narration("beside Kiki. He's holding a shot glass.");
        printLine("");
        guy("Guy: 'You look like you need this more than me.'");
        printLine("");
        narration("Kiki smells it. Something familiar. Like... cough syrup.");
        printLine("");
        choice("1. Take the shot. YOLO.");
        choice("2. Decline. Something's off.");
        printLine("");

        let pick = askChoice(2);

        if (pick === 1) {
            scene = "spiked";
        } else {
            scene = "safe";
        }
    }

//scena 3
    else if (scene === "spiked") {
        printLine("");
        narration("Kiki downs the shot. The room tilts. The music slows.");
        narration("Lilie is gone. The bar is empty.");
        narration("The guy stands by a door that wasn't there before.");
        printLine("");
        guy("Guy: 'Coming?'");
        narration("Bass vibrates up through the floor.");
        printLine("");
        choice("1. Call an ambulance. This is not normal.");
        choice("2. Calm down and find Lilie.");
        choice("3. START SCREAMING.");
        printLine("");

        let pick = askChoice(3);

        if (pick === 1) {
            ending = "A";
            scene = "ending";
        } else if (pick === 2) {
            scene = "underground";
        } else {
            ending = "B";
            scene = "ending";
        }
    }

//scena safe
    else if (scene === "safe") {
        printLine("");
        narration("Kiki pushes the shot away.");
        guy("Guy: 'Suit yourself.' He walks off. Suspiciously normal.");
        printLine("");
        lilie("Lilie: 'Okay, weird. But I found clubs nearby!'");
        printLine("");
        choice("1. Find a club. Let's do this.");
        choice("2. Go home. This night is cursed.");
        printLine("");

        let pick = askChoice(2);

        if (pick === 1) {
            scene = "club";
        } else {
            ending = "H";
            scene = "ending";
        }
    }
// scena 4
    else if (scene === "underground") {
        printLine("");
        narration("Kiki stumbles down the stairs. A huge basement club.");
        narration("Fog. Strobe lights. Bass so loud her organs rearrange.");
        printLine("");
        narration("There — in the middle of the dance floor — is Lilie.");
        narration("Dancing. With the guy. She looks... too happy.");
        printLine("");
        guy("Guy: 'Welcome to the real Zürich. The one beneath.'");
        narration("The crowd parts. Everyone is watching. Waiting.");
        printLine("");
        choice("1. Confront him. Demand answers.");
        choice("2. Join the dance. If you can't beat them...");
        choice("3. Grab Lilie and RUN.");
        printLine("");

        let pick = askChoice(3);

        if (pick === 1) {
            ending = "C";
        } else if (pick === 2) {
            ending = "D";
        } else {
            ending = "E";
        }

        scene = "ending";
    }

//scena 4 end
    else if (scene === "club") {
        printLine("");
        lilie("Lilie: 'Lilie shows you her phone:'");
        choice("1. Hive — Underground electronic, legendary, sticky floors");
        choice("2. Zukunft — Industrial, weird, possibly haunted");
        printLine("");
        let pick = askChoice(2);

        if (pick === 1) {
            ending = "F";
        } else {
            ending = "G";
        }

        scene = "ending";
    }

//endins
    else if (scene === "ending") {
        printLine("");
        if (ending === "A") {
            printLine("=== ENDING A: Medical Bass ===", GREEN);
            narration("You dial 144. Ambulance arrives in 4 minutes.");
            narration("Doctor: 'You have traces of a substance we've never seen.'");
            kiki("Kiki: 'What is it?'");
            narration("Doctor: 'Pure bass.'");
        } else if (ending === "B") {
            printLine("=== ENDING B: Swiss Efficiency ===", GREEN);
            narration("Kiki screams. Security appears instantly.");
            narration("Security: 'Out. Now.'");
            narration("You're thrown onto the street. Last train in 20 minutes.");
        } else if (ending === "C") {
            printLine("=== ENDING C: DJ Limbo's Basement ===", GREEN);
            guy("Guy: 'I'm DJ Limbo. This club exists 11 PM to 4 AM.'");
            kiki("Kiki: 'That makes no sense.'");
            guy("DJ Limbo: 'Neither does Zürich nightlife.'");
            narration("You dance until 4 AM. You wake up at HB.");
        } else if (ending === "D") {
            printLine("=== ENDING D: Club Legends ===", GREEN);
            narration("Kiki starts dancing. The crowd goes wild.");
            narration("The club dissolves into a tunnel, a forest, a mountain.");
            narration("You stumble out at sunrise. Kebab stand opens.");
            kiki("Kiki: 'Extra sauce, please.'");
        } else if (ending === "E") {
            printLine("=== ENDING E: Kebab by the Lake ===", GREEN);
            narration("You run through tunnels. Emerge at Bellevue.");
            narration("Swans asleep. Lake calm.");
            lilie("Lilie: 'Kebab?'");
            kiki("Kiki: 'Kebab.'");
            narration("Best kebab you've ever had.");
        } else if (ending === "F") {
            printLine("=== ENDING F: Hive Mind ===", GREEN);
            narration("Hive is dark. Loud. Sticky. Perfect.");
            narration("You dance for hours. Lose Lilie. Find Lilie.");
            narration("At 5 AM you stumble out. Sky is pink.");
            lilie("Lilie: 'That was perfect.'");
            kiki("Kiki: 'Yeah. Yeah it was.'");
        } else if (ending === "G") {
            printLine("=== ENDING G: Zukunft Was a Maybe ===", GREEN);
            narration("Zukunft. Fog. Lasers. A fridge having a breakdown.");
            narration("A man in silver: 'You have been chosen.'");
            kiki("Kiki: 'For what?'");
            narration("Man: 'The after-after-party.'");
            narration("You leave at sunrise. Not sure it was real.");
        } else if (ending === "H") {
            printLine("=== ENDING H: The Cursed Night ===", GREEN);
            kiki("Kiki: 'Let's go home.'");
            lilie("Lilie: 'Really?'");
            kiki("Kiki: 'This night is cursed.'");
            narration("You take the next train. Watch Zürich fade.");
        }

        printLine("");
        scene = "end";
    }
}
printLine("");
printLine("Thanks for playing Zürich Underground!", GREEN);
printLine("Your ending: " + ending, GREEN);
printLine("Bar: " + bar, GREEN);