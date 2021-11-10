import React from "react";

function About() {
  return (
    <section className="title">
      <h1 class="name"> about: Eleonore-Gabrielle Caclard</h1>
      <hr></hr>
      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img class="mb-5" src="https://github.com/UofTL/react-portfolio/raw/master/src/assets/images/Eleonore-Gabrielle-Caclard.JPG" alt="Eleonore-Gabrielle Caclard"/>
          <p>Hi, I am Eleonore-Gabrielle Caclard.You can also call me 爱丽</p>
          <p>
            I am 50 % Rwandan and 50 % European, the mix made me 100 % awesome
          </p>
          <p>
            I have lived in many countries on 4 different continents speak
            English and French and understand few others languages
          </p>
          <p>
            View full <a href="#/resume" class="link">resume</a>
          </p>
        </div>
      </div>
    </section>
  )}


export default About;
