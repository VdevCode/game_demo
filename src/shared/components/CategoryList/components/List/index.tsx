import Item from '../Item';

interface ListProps {
  data: any[];
}
function List({ data }: ListProps) {
  return (
    <div className="overflow-x-auto snap-x snap-mandatory grid gap-4 grid-flow-col auto-cols-[80%] lg:grid-cols-5">
      {data.map((item, idx) => (
        <Item item={item} key={idx} loading={false} />
      ))}
    </div>
  );
}

export default List;
