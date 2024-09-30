import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function about() {
  return (
    <>
    <header><NavBar /></header>
    <main className="flex h-screen justify-center items-center">
      <h1>about</h1>
    </main>
    <footer><Footer /></footer>
    </>
  );
}
