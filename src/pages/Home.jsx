import Hero from "../components/Hero";
import Service from "../components/Service";
import Featured from "../components/Featured";
import Contact_Card from "../components/Contact_box";

export default function Home() {
  return (
    <>
      <Hero name="#header" />
      <Service />
      <Featured />
      <Contact_Card />
    </>
  );
}
