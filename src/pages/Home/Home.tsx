import Header from "../../components/Header";
import { AsideImgLeft, AsideImgRight } from "./components/AsideImg";
import Card from "./components/Card";

function Home() {

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto overflow-auto flex gap-9 items-center justify-between">

        <AsideImgLeft />

        <div className="w-full h-screen pt-40 overflow-auto">
          <h1 className="pl-8 font-bold text-4xl text-[#1E1E1E]">Estante</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
            {Array.from({ length: 6 }, (_, index) => (
              <Card key={index} index={index} />
            ))}
          </div>
        </div>

        <AsideImgRight />

      </main>
    </div>
  );
};

export default Home;
