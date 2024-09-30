import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <div classsName="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
            <div className="flex flex-col max-w-xl lg:max-w-2xl">
              <label
                data-melt-label=""
                data-label-root=""
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white text-3xl md:text-5xl font-bold mb-2"
              >
                Bussin
              </label>{" "}
              <label
                data-melt-label=""
                data-label-root=""
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-4xl md:text-6xl lg:text-8xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient leading-[1.2] pb-6"
              >
                Wattesigma
              </label>{" "}
              <label
                data-melt-label=""
                data-label-root=""
                className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white/90 text-lg"
              >
                The web browser that{" "}
                <span className="font-bold" data-svelte-h="svelte-aeybnc">
                  truly
                </span>{" "}
                innovates the web experience.
              </label>
            </div>{" "}
            <div
              className="mt-8 lg:mt-0 w-full lg:w-[150%] aspect-video"
              data-svelte-h="svelte-u5evgh"
            >
              <video
                src="/preview.mp4"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              ></video>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
