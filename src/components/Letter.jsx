import { useState } from "react";

function Letter({ setIsOpen }) {
  const [closing, setClosing] = useState(false);
  return (
    <article className={`letter ${closing ? "closing" : ""}`}>
      <span className="letter-heart">💗</span>

      <h2>Para o meu amor</h2>

      <p>Feliz aniversário, minha princesa!</p>

      <p>
        Espero que seu dia seja tão especial quanto você é para mim. Obrigado
        por cada sorriso, cada abraço e por deixar meus dias mais felizes.
      </p>

      <p>
        Que esse novo ciclo traga muitas alegrias, sonhos realizados e momentos
        incríveis para nós dois.
      </p>

      <p className="signature">Eu te amo! ♡</p>
      <button
        onClick={() => {
          setClosing(true);

          setTimeout(() => {
            setIsOpen(false);
            setClosing(false);
          }, 500);
        }}
      >
        &larr;
      </button>
    </article>
  );
}

export default Letter;
