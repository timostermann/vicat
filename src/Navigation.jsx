import { useEffect, useState } from "react";

const navItems = [
  { title: "About", href: "#about", newTab: false },
  { title: "Roadmap", href: "#roadmap", newTab: false },
  { title: "Contact", href: "#contact", newTab: false },
  { title: "PreSale", href: "https://presale.vicat.tech", newTab: true },
  { title: "Faucet", href: "https://faucet.vicat.tech", newTab: true },
  {
    title: "Whitepaper",
    href: "https://vicat.tech/whitepaper_v1.pdf",
    newTab: true,
  },
];

export const Navigation = () => {
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  });
  return (
    <nav className="navigation">
      <a href="#home">
        <img
          src="/assets/icons/coin_green.png"
          alt="vicat coin"
          className={loaded ? "loaded" : ""}
        />
      </a>
      <ul className={open ? "open" : ""}>
        {navItems.map((item) => (
          <li key={item.title}>
            {item.newTab ? (
              <a
                href={item.href}
                target="_blank"
                title="open in new tab"
                rel="noreferrer"
              >
                {item.title}
              </a>
            ) : (
              <a onClick={() => setOpen(false)} href={item.href}>
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
      <div
        className={`navigation-button ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="navigation-burger"></div>
      </div>
      <style jsx>
        {`
          .navigation {
            position: fixed;
            top: 0;
            left: 0;
            height: 70px;
            width: calc(100% - 50px);
            background: #040a06;
            z-index: 10;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-inline: 25px;
          }

          nav img {
            height: 60px;
            width: 60px;
            transform: translateX(-150%) rotate(-540deg);
            transition: all 2s ease-out;
          }

          img.loaded {
            transform: translateX(0) rotate(0);
          }

          nav ul,
          nav ul * {
            list-style: none;
            display: flex;
            align-items: center;
            height: 100%;
          }

          nav ul a {
            text-decoration: none;
            color: white;
            padding-inline: 20px;
            transition: all 0.3s ease-in-out;
          }

          nav ul a:hover {
            background: #102415;
          }

          .navigation-button {
            position: relative;
            display: none;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 40px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
          }

          .navigation-burger {
            width: 40px;
            height: 4px;
            background: white;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
          }

          .navigation-burger::before,
          .navigation-burger::after {
            content: "";
            position: absolute;
            width: 40px;
            height: 4px;
            background: white;
            border-radius: 3px;
            transition: all 0.3s ease-in-out;
          }

          .navigation-burger::before {
            transform: translateY(-12px);
          }

          .navigation-burger::after {
            transform: translateY(12px);
          }

          .navigation-button.open .navigation-burger {
            background: transparent;
            box-shadow: none;
          }

          .navigation-button.open .navigation-burger::before {
            transform: rotate(45deg);
          }

          .navigation-button.open .navigation-burger::after {
            transform: rotate(-45deg);
          }

          @media (max-width: 950px) {
            nav ul a {
              padding-inline: 12px;
            }
          }

          @media (max-width: 700px) {
            .navigation {
              height: 60px;
            }

            nav img {
              height: 50px;
              width: 50px;
            }

            nav ul {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              position: absolute;
              inset: 0;
              top: 40px;
              width: 100%;
              height: calc(100vh - 40px);
              padding: 0 0 100px;
              z-index: 10;
              background: #040a06;
              transform: translateX(100%);
              transform-origin: top right;
              transition: all 0.5s ease-in-out;
            }

            nav ul.open {
              transform: translateX(0);
            }

            nav li,
            nav li a {
              max-height: 80px;
              width: 100%;
              justify-content: center;
              font-size: 1.5rem;
            }

            .navigation-button {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
};
