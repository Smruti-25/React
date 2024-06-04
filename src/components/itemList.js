const ItemList = ({items}) => {
  console.log({items});
  return (
    <div>
      {items.map((i) => (
        <div key={i?.card?.info?.id}>
          <span>{i?.card?.info?.name}</span>
          <span>{i?.card?.info?.price}</span>
        </div>
      ))}
    </div>
  );
}

export default ItemList;