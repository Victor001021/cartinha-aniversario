import { useState } from "react";
import Letter from "./components/Letter";
import "./App.css";

const easterEggs = [
  {
    symbol: "♡",
    message: "11/07. A data onde tudo começou, nosso primeiro encontro!",
  },
  {
    symbol: "✦",
    message: '07/08. O primeiro "Eu te amo".',
  },
  {
    symbol: "♡",
    message: "29/08. A data que você conheceu os meus pais.",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEgg, setSelectedEgg] = useState(null);
  const [closing, setClosing] = useState(false);
  return (
    <main className="page">
      {easterEggs.map((egg, index) => (
        <div
          key={index}
          className={`decor decor-${index + 1}`}
          onClick={() => setSelectedEgg(egg)}
          aria-label="Revelar mensagem secreta"
        >
          {egg.symbol}
        </div>
      ))}

      <section className="card">
        <h1>Feliz aniversário, meu amor! 💗</h1>

        <p className="subtitle">
          Hoje é o seu dia, mas quem ganhou o presente fui eu, por ter você na
          minha vida.
        </p>

        {!isOpen ? (
          <div className="gift">
            <div className="gift-icon">💌</div>
            <p>Tem uma cartinha esperando por você...</p>

            <button onClick={() => setIsOpen(true)}>
              Abrir minha cartinha
            </button>
          </div>
        ) : (
          <Letter setIsOpen={setIsOpen} />
        )}

        <p className="footer">Feito com amor, só para você ♡</p>
      </section>

      {selectedEgg && (
        <div
          className="egg-overlay"
          onClick={() => {
            setClosing(true);
            setTimeout(() => {
              setSelectedEgg(null);
              setClosing(false);
            }, 300);
          }}
        >
          <div
            className={`egg-message ${closing ? "closing" : ""}`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`egg-close ${closing ? "closing" : ""}`}
              onClick={() => {
                setClosing(true);
                setTimeout(() => {
                  setSelectedEgg(null);
                  setClosing(false);
                }, 300);
              }}
              aria-label="Fechar mensagem"
            >
              ×
            </div>

            <span className="egg-heart">{selectedEgg.symbol}</span>
            <p>{selectedEgg.message}</p>
            <small>Uma mensagem secreta para você 💗</small>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
