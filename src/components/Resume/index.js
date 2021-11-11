
import React from "react";
//import ResumePdf from "/Eleonore-Gabrielle-Caclard-Resume.pdf"

function Resume() {
  return (
    <section class="mb-5">
      <h1 className="resume"> resume: Eleonore-Gabrielle Caclard </h1>
      <hr></hr>
      <div class="row justify-content-center" id="resume">
        <div class="mt-5 pl-5 pr-5">
          Over 10 years in Financial Service mainly Banking and Investment
          Fund.Socially engaged volunteering in various Committee promoting
          Diversity and Inclusion
          <p class="mt-5">
            <a href="https://www.linkedin.com/in/eleonoregabriellecaclard">
              
              <img  src="https://img.icons8.com/color/48/000000/linkedin-2.png"  alt="Caclard LinkedIn"/></a>
          </p>
          <p>
            Download my full resume<a href="cv/Eleonore-Gabrielle-Caclard-Resume.pdf" target="_blank"  rel="noopener noreferrer" class="link">resume</a>
            <br></br>
          </p>
        </div>
      </div>
      <div class="justify-content-center mt-5">
        <div id="front-back">
          <h2> Front-End experience </h2>
          <p> HTML, CSS(Bootstrap, Bulma), JavaScript, jQuery, React.js </p>
        </div>
        <div id="front-back" class="mt-5">
          <h2>Back-End experience </h2>
          <p>
            Node.js, Express.js, SQL(sqlite, mySQL), Sequelize, NoSQL(MongoDB,
            Mongoose), Python, API 's (third-party, RESTful, server-side),
            Templating (Handlebars)
          </p>
        </div>
      </div>
    </section>
  );
}

export default Resume;