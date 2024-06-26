import './Main.scss';

import { data } from '../../helper/data';
import Card from './Card';

const Main = () => {
  console.log(data);
  return (
    <div className="card-container">
      {/* <Card
        id={data[0].id}
        title={data[0].title}
        date={data[0].date}
        desc={data[0].desc}
        image={data[0].image}
      />
      <Card {...data[1]} />
      <Card {...data[2]} />
      <Card {...data[3]} /> */}
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Main;