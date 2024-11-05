import Hero from "./components/Hero";
import Posts from "./components/Posts";
export default function Home() {
  return (
    <div className=" bg-bgBeige p-8 overflow-x-hidden">
      <Hero />
      <Posts />
    </div>
  );
}
