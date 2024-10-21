import Button from "./Button";

function Evento() {
  function meuEvento() {
    console.log(`Evento Ativado`);
  }

  function SegundoEvento() {
    console.log(`Ativando Segundo Evento`);
  }

  return (
    <div>
      <p>Clique para Disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={SegundoEvento} text="Segundo Evento" />
    </div>
  );
}
export default Evento;
