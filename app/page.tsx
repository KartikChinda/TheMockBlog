import Gradient from "./components/Gradient";
import Hero from "./components/Hero";
import Posts from "./components/Posts";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="p-8 bg-bgBeige">
        <Hero />
      </div>
      <Gradient colorArray={["#FFF8F0", "#fcfaf6"]} />
      <div className="p-8 bg-beigeLight">
        <Posts />
      </div>
    </div>
  );
}
