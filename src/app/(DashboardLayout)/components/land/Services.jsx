
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
// import { generatePath } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Services = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  async function botsupport() {
    setAnswer("loading");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCxwF5REJomu_ZzPUK9KPQpr_IbZbq7X-g",
      method: "POST",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);
  }
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Coustomer Support."
          text="Bot for helping you with any kind of query"
        />
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={15}
          cols={50}
          className="bg-n-11 text-white outline-none mx-[30%] p-10"
          placeholder="Assets and liabilities of this product "
        ></textarea>
        <Button onClick={botsupport} className="mx-[41%] my-[2%]">Gentrate Answer</Button>
        <pre>{answer}</pre>
      </div>
    </Section>
  );
};

export default Services;
