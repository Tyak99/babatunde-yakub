import Head from "next/head";
import Main from "./components/Main";
import Header from "./components/ui/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}
