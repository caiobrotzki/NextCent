import Content from "./features/Home/content";
import Client from "./features/Home/Clients";
import CardHome from "./features/Home/CardHome";
import Spending from "./features/Home/Spending";
import Helping from "./features/Home/Helping";

function Home() {
  return (
    <div className="mt-[200px]">
      <Content />
      <Client />
      <CardHome />
      <Spending />
      <Helping />
    </div>
  );
}

export default Home;
