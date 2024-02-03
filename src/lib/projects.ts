import { Skills } from "./skills"
import type { skill } from "./skills"
import type link from "./link"

export interface project {
    id: string;
    name: string;
    subtitle: string;
    skill: skill;
    image: string;
    links: link[];
}

export const nullProject = {
    id: "not-found",
    name: "Project Name",
    subtitle: "Project Subtitle",
    skill: Skills.Unity,
    image: "",
    links: []
}

export const projects: project[] = [
    {
        id: "timewinding",
        name: "Timewinding",
        subtitle: "Submission to the Brackeys Jam 2020.2",
        skill: Skills.Unity,
        image: "timewinding.png",
        links: [
            {text: "Download", url: "https://brainstormerjr.itch.io/timewinding#download"},
            {text: "Play in Browser", url: "https://brainstormerjr.itch.io/timewinding"}
        ]
    },
    {
        id: "chaos-dungeon",
        name: "Chaos Dungeon",
        subtitle: "Submission to the Brackeys Jam 2021.2",
        skill: Skills.Unity,
        image: "chaos_dungeon.png",
        links: [
            {text: "Download", url: "https://brainstormerjr.itch.io/chaos-dungeon#download"},
            {text: "Play in Browser", url: "https://brainstormerjr.itch.io/chaos-dungeon"}
        ]
    },
    {
        id: "move-ust",
        name: "MoveUST",
        subtitle: "Fitness Rewards for HKUST Students",
        skill: Skills.Flutter,
        image: "moveUST.png",
        links: [
            {text: "Website", url: "https://moveust.com"}
        ]
    },
    {
        id: "blappy-fird",
        name: "Blappy Fird",
        subtitle: "Submission to the GMTK Game Jam 2023",
        skill: Skills.Unity,
        image: "blappyFird.png",
        links: [
            { text: "Download", url: "https://brainstormerjr.itch.io/blappy-fird#download"},
            { text: "Play in Browser", url: "https://brainstormerjr.itch.io/blappy-fird"},
        ]
    },
    {
        id: "velocity-selector-simulation",
        name: "Velocity Selector Simulation",
        subtitle: "Simple simulation in p5.js",
        image: "velocitySelectorSimulation.png",
        skill: Skills.Processing,
        links: [
            { text: "Online Editor", url: "https://editor.p5js.org/BrainstormerJr/sketches/CLP2ZKxYW"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/velocitySelector"},
            { text: "Play in Browser", url: "https://brainstormerjr.github.io/velocitySelector/"},
            { text: "Video", url: "https://www.youtube.com/watch?v=vD-vYDKH4yM"},
        ]
    },
    {
        id: "one-of-many",
        name: "One of Many",
        subtitle: "Submission to the GMTK Game Jam 2021",
        image: "oneOfMany.png",
        skill: Skills.Unity,
        links: [
            { text: "Download", url: "https://brainstormerjr.itch.io/joined-together-game#download"},
        ]
    },
    {
        id: "roll-ranger",
        name: "Roll Ranger",
        subtitle: "Submission tot the GMTK Game Jam 2022",
        image: "rollRanger.png",
        skill: Skills.Unity,
        links: [
            { text: "Browser", url: "https://brainstormerjr.itch.io/roll-of-the-dice" },
            { text: "Download", url: "https://brainstormerjr.itch.io/roll-of-the-dice#download" },
        ]
    },
    {
        id: "hello-world-os",
        name: "Hello World OS",
        subtitle: "Useless operating system with a beautiful website",
        image: "helloWorldOS.png",
        skill: Skills.HTML,
        links: [
            { text: "Website", url: "http://www.helloworldos.co.uk/"},
            { text: "Video", url: "https://www.youtube.com/watch?v=DIuxi9XnBBk"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/HelloWorldOS"},
        ]
    },
    {
        id: "find-your-function",
        name: "Find Your Function",
        subtitle: "A math-themed personality test",
        image: "findYourFunction.png",
        skill: Skills.HTML,
        links: [
            { text: "Website", url: "https://brainstormerjr.github.io/FindYourFunction/"},
            { text: "Video", url: "https://www.youtube.com/watch?v=3z2qYXyuZb4"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/A-Level-Notes"},
        ]
    },
    {
        id: "a-level-notes",
        name: "A Level Notes",
        subtitle: "A collection of my A-Level notes for everyone",
        image: "aLevelNotes.png",
        skill: Skills.HTML,
        links: [
            { text: "Website", url: "https://brainstormerjr.github.io/A-Level-Notes/"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/A-Level-Notes"},
        ]
    },
    {
        id: "color-classifier",
        name: "AI Color Classifier",
        subtitle: "A neural network that names colors based on RGB values",
        image: "colorClassifier.png",
        skill: Skills.Processing,
        links: [
            { text: "Website", url: "https://brainstormerjr.github.io/colorClassifierDataCollection/trainIndex.html"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/colorClassifierDataCollection"},
        ]
    },
    {
        id: "toothpick-sequence",
        name: "Toothpick Sequence",
        subtitle: "Drawing the toothpick sequence in p5.js",
        image: "toothpickSequence.png",
        skill: Skills.Processing,
        links: [
            { text: "Online Editor", url: "https://editor.p5js.org/BrainstormerJr/sketches/Ha9hCnIe5" }
        ]
    },
    {
        id: "tic-tac-toe-minimax",
        name: "Tic Tac Toe Minimax",
        subtitle: "Minimax algorithm that plays tic-tac-toe",
        image: "ticTacToeMinimax.png",
        skill: Skills.Processing,
        links: [
            { text: "Online Editor", url: "https://editor.p5js.org/BrainstormerJr/sketches/f6fVJO6Pw"}
        ]
    },
    {
        id: "crandom-bot",
        name: "Crandom Bot",
        subtitle: "A Discord bot written in Node.js",
        image: "crandomBot.png",
        skill: Skills.NodeJs,
        links: [
            { text: "Online Editor", url: "https://glitch.com/edit/#!/crandom-bot" },
            { text: "GitHub", url: "https://github.com/brainstormerjr/Crandom-Bot" },
        ]
    },
    {
        id: "definitely-not-nasa",
        name: "Definitely Not NASA",
        subtitle: "Calculating fuel consumption of stupid missions",
        image: "definitelyNotNASA.png",
        skill: Skills.Vue,
        links: [
            { text: "Website", url: "https://definitely-not-nasa.web.app/"}
        ]
    },
    {
        id: "portfolio-1.0",
        name: "Portfolio 1.0",
        subtitle: "The orginal Harold Kwan portfolio",
        image: "portfolio1.png",
        skill: Skills.Vue,
        links: [
            { text: "Website", url: "https://portfolio-963de.web.app/"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/portfolio"}
        ]
    },
    {
        id: "portfolio-2.0",
        name: "Portfolio 2.0",
        subtitle: "The second Harold Kwan portfolio",
        image: "portfolio2.png",
        skill: Skills.SvelteKit,
        links: [
            { text: "Website", url: "https://portfolio-963de.web.app/"},
            { text: "GitHub", url: "https://github.com/brainstormerjr/portfolio"}
        ]
    }
]

