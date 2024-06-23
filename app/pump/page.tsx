import Body from "@/components/body";
import Header from "@/components/header";
import Nav from "@/components/nav";

export default function Pump() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Nav></Nav>
      <div className="flex flex-col">
        <Header></Header>
        <Body></Body>
      </div>
    </div>
  );
}
