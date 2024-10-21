import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }
  function limparEmail(e) {
    setEmail("");
  }
  return (
    <div>
      <h2>Cadastre seu Email</h2>
      <form>
        <input
          type="email"
          placeholder="Digite Seu Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar-email
        </button>
        {userEmail && (
          <div>
            <p>O Email do Usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar-email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
