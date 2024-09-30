import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function about() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="relative min-h-screen pt-14">
        <main className="flex h-screen justify-center items-center">
          <div className="container mx-auto px-4 py-16 max-w-6xl">
            <h1 className="text-4xl font-extrabold mb-8 text-center">
              Pricing
            </h1>{" "}
            <p className="text-xl text-center mb-12">
              Choose the option that fits you the best!
            </p>{" "}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center justify-between">
                    Free Tier
                    <svg
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      className="lucide-icon lucide lucide-zap w-6 h-6 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                    </svg>
                  </h3>{" "}
                  <p className="text-muted-foreground text-sm">
                    For everyone
                  </p>
                </div>{" "}
                <div className="p-6 pt-0">
                  <p
                    className="text-3xl font-bold mb-4"
                    data-svelte-h="svelte-12pwcgt"
                  >
                    $0.00
                  </p>{" "}
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      All Features
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      No hidden fees 
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-x w-5 h-5 mr-2 text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      No premium support
                    </li>
                  </ul>
                </div>{" "}
                <div className="flex items-center p-6 pt-0">
                  <button type="button" className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 px-4 py-2 w-full" data-button-root="">
                    Start now
                  </button>
                </div>
              </div>{" "}
              <div className="bg-card text-card-foreground rounded-lg border border-primary shadow-lg transform scale-105">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center">
                      Pro Tier
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-crown w-6 h-6 ml-2 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                        <path d="M5 21h14"></path>
                      </svg>
                    </h3>{" "}
                    <span className="focus:ring-ring inline-flex select-none items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 border-transparent">
                      PREFERRED
                    </span>
                  </div>{" "}
                  <p className="text-muted-foreground text-sm">For true sigmas</p>
                </div>{" "}
                <div className="p-6 pt-0">
                  <p
                    className="text-3xl font-bold mb-4"
                    data-svelte-h="svelte-12pwcgt"
                  >
                    $0.00
                  </p>{" "}
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Basic Features
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      No Premium support 
                      <span className="text-[0.25rem]" data-svelte-h="svelte-atd053">
                       
                      </span>
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Cool Guys donate on  <span><a href="" className="text-blue-500"> Patreon</a></span>
                    </li>
                  </ul>
                </div>{" "}
                <div className="flex items-center p-6 pt-0">
                  <button
                    type="button"
        
                    className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                    data-button-root=""
                  >
                    Go Pro
                  </button>
                </div>
              </div>{" "}
              <div className="bg-card text-card-foreground rounded-lg border shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center justify-between">
                    Enterprise
                    <svg
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      className="lucide-icon lucide lucide-building w-6 h-6 text-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                  </h3>{" "}
                  <p className="text-muted-foreground text-sm">For companies</p>
                </div>{" "}
                <div className="p-6 pt-0">
                  <p
                    className="text-3xl font-bold mb-4"
                    data-svelte-h="svelte-12pwcgt"
                  >
                    $0.00
                  </p>{" "}
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      All Pro features
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      24/7 support (that wont fucking happen)
                    </li>{" "}
                    <li className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        className="lucide-icon lucide lucide-check w-5 h-5 mr-2 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      Custom solutions (this wont happen either)
                    </li>
                  </ul>
                </div>{" "}
                <div className="flex items-center p-6 pt-0">
                  <button
                    type="button"
        
                    className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input bg-background hover:bg-accent hover:text-accent-foreground border h-10 px-4 py-2 w-full"
                    data-button-root=""
                  >
                    <svg
                      width="24"
                      height="24"
                      stroke="currentColor"
                      stroke-width="2"
                      className="lucide-icon lucide lucide-mail w-5 h-5 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    Contact Us (we wont reply)
                  </button>
                </div>
              </div>
            </div>{" "}
            <div className="text-center">
              <p className="text-lg mb-4" data-svelte-h="svelte-1rfsynf">
                Still not convinced? i dont fucking care
              </p>{" "}
              <button
                type="button"
        
                className="ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-primary"
                data-button-root=""
              >
                Learn more about our pricing
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
