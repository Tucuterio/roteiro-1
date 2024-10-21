import React, { useState } from "react";

function ImcCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [imc, setImc] = useState(null);
  const [message, setMessage] = useState("");

  const calculateImc = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100; // convertendo cm para metros
    const calculatedImc = (weight / (heightInMeters * heightInMeters)).toFixed(
      2
    );
    setImc(calculatedImc);

    // Determinando a categoria de IMC
    if (calculatedImc < 18.5) {
      setMessage("Abaixo do peso");
    } else if (calculatedImc >= 18.5 && calculatedImc < 24.9) {
      setMessage("Peso normal");
    } else if (calculatedImc >= 25 && calculatedImc < 29.9) {
      setMessage("Acima do peso");
    } else {
      setMessage("Obesidade");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calculateImc}>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calcular IMC</button>
      </form>

      {imc && (
        <div>
          <h2>Seu IMC: {imc}</h2>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default ImcCalculator;
