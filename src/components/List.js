import Item from "./Item";

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca="Nike" ano_lancamento={1895} />
        <Item marca="Adidas" ano_lancamento={1964} />
        <Item marca="Jordan" ano_lancamento={1932} />
        <Item />
      </ul>
    </>
  );
}
export default List;
