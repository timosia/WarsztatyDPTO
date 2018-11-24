import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";
import Bio from "./blocks/bio";
import Menu from "./blocks/menu";
import Experience from "./blocks/experience";
import Education from "./blocks/education";

import './App.scss';
import './blocks/menu.scss';



class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }


  render() {
    const { contextRef } = this.state;

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>
              <Sticky context={contextRef} pushing offset={150}>
                {
                  <div class='dane_osobowe'>
                    <Menu naglowek='Dane osobowe' urodzenie='Data urodzenia' adres= 'ul. Ulicowa 1' telefon='123456789' mail='mailowy@mail.com' />
                  </div>
                }
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
            {
              <div>
                <Bio>
                Hej! Jestem Daria!
                </Bio>
                <Experience items_exp={myDetails.experience} exp_header="Doświadczenie" />
                <Experience items_exp={myDetails.education} exp_header="Edukacja" />
              </div>
            }
          </section>
        </div>
      </div>
    );
  }
}

const myDetails = {
  experience: [
    {
      title: "Future Processing sp z o.o.",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "De Ygrek s.c.",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ],
  education: [
    {
      title: "looool",
      description: "Inżynier Oprogramowania",
      from: "06.2012",
      to: "present"
    },
    {
      title: "hehe",
      description: "Kierownik działu IT",
      from: "09.2006",
      to: "05.2012"
    }
  ]
}

export default App;
