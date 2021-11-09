import { useLayoutEffect, useState } from 'react';
import './App.css';
import "animate.css"

function App() {

  const [angle, setAngle] = useState(0);
  const [translation, setTranslation] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll);
  });

  function onScroll() {
    const newAngle = window.scrollY / window.innerHeight * 720;
    console.log(angle);
    setOpacity((newAngle - angle) > 3 ? (newAngle - angle) / 10 : 0);
    setAngle(window.scrollY / window.innerHeight * 720);
    setTranslation(window.scrollY / 10);
    setShow(window.scrollY > window.innerHeight);
  }

  return (
    <div className="home">
      <div className="coin-view">
        <p>Insert Coin!</p>
        <p>Insert Coin!</p>
        <p>Insert Coin!</p>
        <div className="content-wrapper">
          <div className="coin-wrapper">
            <img src="/assets/icons/coin_green.png" alt="vicat coin" className="coin"/>
            <img src="/assets/accleration.svg" alt="accleration" className="acc first"/>
            <img src="/assets/accleration.svg" alt="accleration" className="acc middle"/>
            <img src="/assets/accleration.svg" alt="accleration" className="acc last"/>
          </div>
          <div className="slot-wrapper">
            <img src="/assets/slot-bottom.svg" alt="accleration" className="slot bottom"/>
            <img src="/assets/slot-top.svg" alt="accleration" className="slot top"/>
          </div>
        </div>
        
      <style jsx="true">
        {`
          .coin-view {
             width: 100%;
             min-height: 100vh;
             display: flex;
             justify-content: center
          }

          .content-wrapper {
            max-width: 1100px;
            width: 100%;
            display: flex;
            justify-content: center
          }

          .coin-view p {
            font-size: 85px;
            color: var(--orange1);
            position: absolute;
            font-family: 'Silom';
          }

          @keyframes fadeIn {
            0% {opacity: 0;}
            20% {opacity: 0;}
            100% {opacity: 1;}
          }

          .coin-view p:nth-of-type(1) {
            transform: rotate(-25deg) translateY(400px) translateX(50px);
            animation-name: fadeIn;
            animation-duration: 2s;
            font-size: 65px;
          }

          .coin-view p:nth-of-type(2) {
            transform: rotate(15deg) translateY(300px) translateX(-300px);
            animation-name: fadeIn;
            animation-duration: 4s;
          }

          .coin-view p:nth-of-type(3) {
            animation: bounceInDown;
            animation-duration: 2s;
            font-size: 75px;
          }

          img.acc {
            position: fixed;
            margin-bottom: 1000px;
            z-index: -2;
            opacity: ${opacity};
          }

          img.acc.first {
            transform: translateY(${-90 + translation}px) translateX(15px);
          }

          img.acc.middle {
            transform: translateY(${-150 + translation}px) translateX(125px);
          }

          img.acc.last {
            transform: translateY(${-90 + translation}px) translateX(240px);
          }

          img.slot {
            position: absolute;
            bottom: 0;
            left: 0;
          }

          img.slot.bottom {
            z-index: -2;
          }

          .coin-wrapper {
            padding: 200px 300px 0 0;
          }

          img.coin {
            width: 300px;
            position: fixed;
            transform: translateY(${translation}px) rotate(${angle}deg);
            z-index: -1
          }

          .slot-wrapper {
            position: absolute;
            width: 500px;
            bottom: 0;
          }

          @media (max-width: 900px) {
            .coin-view p:nth-of-type(1) {
              transform: rotate(-30deg) translateY(400px) translateX(50px);
              font-size: 70px;
            }
  
            .coin-view p:nth-of-type(2) {
              transform: rotate(20deg) translateY(350px) translateX(-50px);
              font-size: 60px;
            }
  
            .coin-view p:nth-of-type(3) {
              font-size: 50px;
            }
          }

          @media (max-width: 500px) {
            .coin-wrapper {
              padding: 200px 0;
            }

            img.coin {
              width: 250px;
              left: calc(50% - 125px);
            }

            img.acc {
              display: none;
            }
  
            .slot-wrapper {
              position: absolute;
              width: 100%;
              bottom: 0;
            }

            img.slot {
              width: 100%;
            }

            .coin-view p:nth-of-type(1) {
              transform: rotate(-30deg) translateY(500px) translateX(-250px);
              font-size: 35px;
            }
  
            .coin-view p:nth-of-type(2) {
              transform: rotate(20deg) translateY(370px) translateX(70px);
              font-size: 30px;
            }
  
            .coin-view p:nth-of-type(3) {
              font-size: 40px;
            }
          }
        `}
      </style>
      </div>
      <div className="basic-view">
        <div className="content-wrapper">
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <img src="/assets/icons/coin_green.png" alt="vicat coin" className={"deco-coin " + (show ? "show" : "")}/>
          <h1>ViCat</h1>
          <div className="info-board">
            <h2>The First <i>Cat Token</i> in the <i>Vite</i> Ecosystem</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed 
              diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et 
              accusam et justo duo dolores et ea rebum. Stet clita kasd 
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
              sed diam nonumy eirmod tempor invidunt ut labore et dolore 
              magna aliquyam erat, sed diam voluptua. At vero eos et 
              accusam et justo duo dolores et ea rebum. Stet clita kasd
            </p>
          </div>
        </div>
        
        <style jsx="true">
          {`
            .basic-view {
              width: 100%;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              background-color: var(--green3);
            }

            .content-wrapper {
              max-width: 1100px;
              width: 100%;
              display: flex;
              justify-content: center;
              position: relative;
            }

            h1 {
              z-index: 3;
              font-size: 130px;
              color: white;
              margin: 100px;
              font-weight: bold;
              font-style: oblique;
              position: relative;
            }

            .content-wrapper .deco-coin {
              z-index: 2;
              position: absolute;
              top: 30%;
              width: 300px;
              opacity: 0;
              transition: all .5s;
            }

            .deco-coin.show {
              opacity: 1;
            }

            .deco-coin:nth-of-type(1).show {
              transform: translateX(-450px) translateY(150px) rotate(30deg);
            }

            .deco-coin:nth-of-type(2).show {
              transform: translateX(-300px) translateY(-20px) rotate(90deg);
            }

            .deco-coin:nth-of-type(3).show {
              transform: translateX(-150px) translateY(50px) rotate(130deg);
            }

            .deco-coin:nth-of-type(4).show {
              transform: translateX(30px) translateY(10px) rotate(190deg);
            }

            .deco-coin:nth-of-type(5).show {
              transform: translateX(150px) translateY(80px) rotate(250deg);
            }

            .deco-coin:nth-of-type(6).show {
              transform: translateX(350px) translateY(-30px) rotate(290deg);
            }

            .deco-coin:nth-of-type(7).show {
              transform: translateX(450px) translateY(80px) rotate(330deg);
            }

            .info-board {
              position: absolute;
              z-index: 3;
              bottom: -100px;
              min-height: 600px;
              width: 80%;
              border-radius: 40px;
              background: linear-gradient(45deg, var(--green6) 0%, var(--grey1) 100%);
              display: flex;
              flex-direction: column;
              color: var(--green3);
              box-shadow: 0 0 15px black;
            }

            .info-board h2 {
              font-size: 50px;
              flex-basis: 100%;
              padding: 0 10%;
              text-align: center;
              font-style: italic;
            }

            .info-board h2 i {
              font-style: inherit;
              color: white;
            }

            .info-board p {
              font-style: oblique;
              font-weight: lighter;
              padding: 0 5%;
              line-height: 1.75;
              font-size: 20px;
            }
            
            @media (max-width: 900px) {
              h1 {
                font-size: 80px;
              }

              .info-board h2 {
                font-size: 30px;
              }

              .info-board p {
                font-size: 18px;
                margin-bottom: 30px;
              }

              .info-board {
                bottom: -300px;
                min-height: 400px;
                width: 95%;
              }
            }
          `}
        </style>
      </div>
      <div className="info-view">
        <div className="content-wrapper">
          <div className="info-wrapper">
            <div className="info-card">
              <img src="/assets/icons/coin.svg" alt="coin" />
              <h3>Subheadline</h3>
              <p>Lorem ipsum dolor sit
                amet, consetetur 
                sadipscing elitr, sed 
                diam nonumy eirmod 
                tempor invidunt ut 
                labore et dolore magna 
                aliquyam erat, sed 
                diam voluptua. At vero 
                eos et accusam et justo 
                duo dolores et ea 
                rebum. Stet clita kasd
                gubergren, no sea. 
              </p>
            </div>
            <div className="info-card">
              <img src="/assets/icons/vite.svg" alt="vite" />
              <h3>Subheadline</h3>
              <p>Lorem ipsum dolor sit
                amet, consetetur 
                sadipscing elitr, sed 
                diam nonumy eirmod 
                tempor invidunt ut 
                labore et dolore magna 
                aliquyam erat, sed 
                diam voluptua. At vero 
                eos et accusam et justo 
                duo dolores et ea 
                rebum. Stet clita kasd
                gubergren, no sea. 
              </p>
            </div>
            <div className="info-card">
              <img src="/assets/icons/coin_green.png" alt="vicat coin" />
              <h3>Subheadline</h3>
              <p>Lorem ipsum dolor sit
                amet, consetetur 
                sadipscing elitr, sed 
                diam nonumy eirmod 
                tempor invidunt ut 
                labore et dolore magna 
                aliquyam erat, sed 
                diam voluptua. At vero 
                eos et accusam et justo 
                duo dolores et ea 
                rebum. Stet clita kasd
                gubergren, no sea. 
              </p>
            </div>
          </div>
        </div>
        
        <style jsx="true">
          {`
            .info-view {
              width: 100%;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              background-color: var(--green4);
            }

            .content-wrapper {
              max-width: 1100px;
              width: 100%;
              display: flex;
              justify-content: center;
            }

            .info-wrapper {
              flex-basis: 100%;
              padding: 300px 0 0;
              display: flex;
              justify-content: space-evenly;
            }

            .info-card {
              height: 500px;
              width: 200px;
              box-shadow: 0 3px 20px black;
              display: flex;
              flex-direction: column;
              align-items: center;
              background: linear-gradient(to top, var(--green7) 0%, #2B352C 30%, #0A150B 75%);
              border-radius: 25px;
              padding: 25px;
            }

            .info-card img {
              width: 90px;
            }

            .info-card h3 {
              color: var(--orange1);
              font-weight: lighter;
              font-style: oblique;
              font-size: 23px;
            }

            .info-card p {
              color: white;
              font-weight: lighter;
              font-style: oblique;
              font-size: 16px;
              line-height: 1.5;
            }

            @media (max-width: 900px) {
              .info-wrapper {
                align-items: center;
                flex-direction: column;
                margin: 100px 0 50px 0;
              }

              .info-card {
                margin: 0 0 100px 0;
                width: 80%;
                height: auto;
              }
            }
          `}
        </style>
      </div>
      <div className="contact-view">
        <div className="contact-wrapper">
          <h2>Our Channels</h2>
          <div className="button-group">
            <div className="button-wrapper">
              <a href="https://instagram.com/vicat_777" className="button">
                <img src="/assets/icons/instagram.svg" alt="Instagram"/>
              </a>
              <a href="https://instagram.com/vicat_777" className="button-description"><i>Follow</i> ViCat on <i>Instagram</i> </a>
            </div>
            <div className="button-wrapper">
              <a href="https://twitter.com/ViCat_777" className="button">
                <img src="/assets/icons/twitter.png" alt="Twitter"/>
              </a>
              <a href="https://twitter.com/ViCat_777" className="button-description">...or <i>Twitter</i> </a>
            </div>
          <div className="button-wrapper">
              <a href="https://discord.gg/mqRuTWP4wY" className="button">
                <img src="/assets/icons/discord.png" alt="Discord"/>
              </a>
              <a href="https://discord.gg/mqRuTWP4wY" className="button-description">{'& '}&nbsp; <i>Join</i> <i>the Community!</i> </a>
            </div>
          </div>
        </div>
        
        <style jsx="true">
          {`
            .contact-view {
              width: 100%;
              min-height: 100vh;
              display: flex;
              justify-content: center;
              background-color: var(--green5);
            }

            .contact-wrapper {
              max-width: 1100px;
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .contact-view h2 {
              font-size: 100px;
              color: white;
              margin: 100px;
              font-weight: bold;
              font-style: oblique;
            }
            
            .button-group {
              flex-basis: 100%;
              width: 100%;
              padding: 100px 0 0;
              display: flex;
              justify-content: space-between;
            }

            .button-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            .button {
              width: 200px;
              height: 200px;
              border-radius: 100%;
              box-shadow: 3px 5px 16px #0f0f0f;
              background: linear-gradient(45deg, #1b261c, #bd520e);
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 10px;
              transition: all .5s;
            }

            .button-wrapper:nth-of-type(1) .button:hover {
              background-position: 220px;
            }

            .button-wrapper:nth-of-type(2) .button:hover {
              background-position: 0 220px;
            }

            .button-wrapper:nth-of-type(3) .button:hover {
              background-position: 220px 220px;
            }

            .button img {
              width: 100px;
            }

            .button-wrapper a {
              text-decoration: none;
              color: white;
              font-weight: lighter;
              font-style: oblique;
              margin: 25px 0;
              text-align: center;
              font-size: 20px;
            }

            a i {
              color: var(--orange1);
            }

            @media (max-width: 1100px) {
              .button-group {
                justify-content: space-evenly;
                padding: 0;
              }
            }

            @media (max-width: 900px) {
              .contact-view h2 {
                font-size: 60px;
                text-align: center;
              }

              .button-group {
                align-items: center;
                flex-direction: column;
                margin: 0 0 50px 0;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default App;
