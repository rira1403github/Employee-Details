import React from "react";
import Navbar from "./components/Navbar";
// import Intro from "./components/Intro";
// import Second_page from "./components/Second_page";
// import Our_Pillars from "./components/Our_Pillars";
// import Event from "./components/Event";
// import Contact from "./components/Contact";
import { BrowserRouter } from "react-router-dom";
import Chatbot from "./components/Chatbot";

function Apple() {
  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/nbroad/ESG-BERT",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  }

  query({ inputs: "What is ESG?" }).then((response) => {
    console.log(JSON.stringify(response));
  });

  return (
    <>
      <Navbar />
      {/* <Intro /> */}
      {/* <Event /> */}
      {/* <Our_Pillars /> */}
      {/* <Second_page /> */}
      {/* <Contact /> */}
      {/* <Chatbot/> */}
    </>
  );
}

export default Apple;