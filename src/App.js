import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "What is Netflix?",
    text: "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more - on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert - all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!",
  },
  {
    title: "How much does Netflix cost?",
    text: "Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming device, all for one low fixed monthly fee. Plans start from £5.99 a month. No extra costs or contracts.",
  },
  {
    title: "Where can I watch?",
    text: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite programmes with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    title: "How do I cancel?",
    text: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account at any time.",
  },
  {
    title: "What can I watch on Netflix?",
    text: "Netflix has an extensive library of feature films, documentaries, TV programmes, anime, award-winning Netflix originals, and more. Watch as much as you want, any time you want.",
  },
];

export default function App() {
  return (
    <div className="accordion">
      <Accordian data={faqs} />
    </div>
  );
}

function Accordian({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div>
      <h1>ACCORDION</h1>
      <div>
        {data.map((el, i) => (
          <AccordionItems
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            key={el.title}
            num={i}
          >
            {el.text}
          </AccordionItems>
        ))}
      </div>
    </div>
  );
}

function AccordionItems({ title, num, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleisOpen() {
    onOpen(isOpen ? null : num);
  }
  return (
    <div onClick={handleisOpen}>
      <div className="list">
        <p>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p>{title}</p>
        <p>{isOpen ? "-" : "+"}</p>
      </div>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}

