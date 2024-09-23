import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const monodatari = [
  {
    name: "Tsubasa Hanekawa",
    photoName: "./hanekawa.gif",
    link: "https://bakemonogatari.fandom.com/wiki/Tsubasa_Hanekawa",
    text: "Araragi's classmate, close friend, and a class representative in Naoetsu Private High School. She is known at school as an overachiever and model student who is admired by many.",
    features: [
      {
        isA: "Human",
        color: "#EAD8B1",
      },
      {
        isA: "Female",
        color: "#CB80AB",
      },
      {
        isA: "Cat",
        color: "#6A9AB0",
      },
      {
        isA: "Tiger",
        color: "#B8001F",
      },
      {
        isA: "Student",
        color: "#557C56",
      },
    ],
  },
  {
    name: "Hitagi Senjougahara",
    photoName: "./Senjougahara.gif",
    text: "A third-year student of Naoetsu Private High School who is considered to be a frail-looking girl with an incurable disease and is distant from others.",
    link: "https://bakemonogatari.fandom.com/wiki/Hitagi_Senjougahara",
    features: [
      {
        isA: "Human",
        color: "#EAD8B1",
      },
      {
        isA: "Female",
        color: "#CB80AB",
      },
      {
        isA: "Crab",
        color: "#6A9AB0",
      },
      {
        isA: "Frail",
        color: "#B8001F",
      },
      {
        isA: "Student",
        color: "#557C56",
      },
    ],
  },
  {
    name: "Suruga Kanbaru",
    photoName: "./Kambaru.gif",
    text: "An underclassman, star player of the school's basketball team and one of Hitagi Senjougahara's acquaintances from junior high school. She is often seen having her left arm covered with bandages.",
    link: "https://bakemonogatari.fandom.com/wiki/Suruga_Kanbaru",
    features: [
      {
        isA: "Human",
        color: "#EAD8B1",
      },
      {
        isA: "Female",
        color: "#CB80AB",
      },
      {
        isA: "Monkey",
        color: "#6A9AB0",
      },
      {
        isA: "Aethletic",
        color: "#B8001F",
      },
      {
        isA: "Student",
        color: "#557C56",
      },
    ],
  },
  {
    name: "Mayoi Hachikuji",
    photoName: "./Hachikuji.gif",
    text: "The ghost of a fifth-grade elementary school girl who was killed in a traffic accident while trying to reach her mother's home.",
    link: "https://bakemonogatari.fandom.com/wiki/Mayoi_Hachikuji",
    features: [
      {
        isA: "Ghost",
        color: "#EAD8B1",
      },
      {
        isA: "Loli",
        color: "#CB80AB",
      },
      {
        isA: "Snail",
        color: "#6A9AB0",
      },
      {
        isA: "Odity",
        color: "#B8001F",
      },
      {
        isA: "child",
        color: "#557C56",
      },
    ],
  },
  {
    name: "Karen Araragi",
    photoName: "./Karen.gif",
    text: "the eldest of Koyomi Araragi's sisters and the older half of the Tsuganoki 2nd Middle School Fire Sisters (栂の木二中のファイヤーシスターズ, Tsuganoki Ni-chuu no Faiya Shisutazu). She is a self-proclaimed hero of justice",
    link: "https://bakemonogatari.fandom.com/wiki/Karen_Araragi",
    features: [
      {
        isA: "Human",
        color: "#EAD8B1",
      },
      {
        isA: "Female",
        color: "#CB80AB",
      },
      {
        isA: "Aethletic",
        color: "#B8001F",
      },
      {
        isA: "Sister",
        color: "#557C56",
      },
    ],
  },
  {
    name: "Tsukihi Araragi",
    photoName: "./Tsukihi.gif",
    text: "The supposed younger sister of both Koyomi Araragi and Karen Araragi, and the youngest member of the Araragi family. She is the younger half of the Tsuganoki Second Junior High School's Fire Sisters.",
    link: "https://bakemonogatari.fandom.com/wiki/Tsukihi_Araragi",
    features: [
      {
        isA: "Human",
        color: "#EAD8B1",
      },
      {
        isA: "Female",
        color: "#CB80AB",
      },
      {
        isA: "Frail",
        color: "#B8001F",
      },
      {
        isA: "Student",
        color: "#557C56",
      },
    ],
  },
];

function App() {
  return (
    <body>
      <Header />
      <main className="allCard">
        {monodatari.map((char) => (
          <Card datari={char} key={char.name} />
        ))}
      </main>
    </body>
  );
}

function Card({ datari }) {
  return (
    <a href={datari.link}>
      <div className="card">
        <Avatar photoName={datari.photoName} />
        <div className="data">
          <Intro datari={datari} />
          <SkillList features={datari.features} />
        </div>
      </div>
    </a>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Only Monogatari</h1>
      <p>
        This website is dedicated to let the user know the only charecters that
        are present in the show Monogatari.
      </p>
    </div>
  );
}

function Avatar({ photoName }) {
  return <img className="avatar" src={photoName} alt="developerKawa" />;
}

function Intro({ datari }) {
  return (
    <div>
      <h1>{datari.name}</h1>
      <p>{datari.text}</p>
    </div>
  );
}
function SkillList({ features }) {
  return (
    <div className="skill-list">
      {features.map((feature, index) => (
        <span
          key={index}
          className="skill"
          style={{ backgroundColor: feature.color }}
        >
          {feature.isA}
        </span>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
