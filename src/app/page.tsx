import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section>
          <div className="relative mx-auto mt-24 max-w-6xl px-4 sm:px-6">
            <div className="relative pb-10 pt-24">
              <div className="mx-auto flex max-w-3xl flex-col items-center pb-12 text-center md:pb-16">
                <div className="text-4xl font-semibold text-gray-900 sm:text-5xl">
                  <div className="hidden items-start sm:inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="47" fill="none" viewBox="0 0 33 54" className="mb-4 mr-2 inline-flex">
                      {/* SVG path data remains unchanged */}
                    </svg>
                    <span className="text-primary-700">PearAI: </span>The Open Source AIPowered Code Editor
                  </div>
                  <div className="block items-start sm:hidden">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="47" fill="none" viewBox="0 0 33 54" className="mb-3 mr-2 inline-flex">
                        {/* SVG path data remains unchanged */}
                      </svg>
                      <span className="text-primary-700">PearAI </span>
                    </div>
                    <span className="flex flex-col text-3xl"><span>The Open Source</span> <span>AIPowered Code Editor</span></span>
                  </div>
                </div>
                <div className="mt-6 max-w-lg text-lg font-medium text-gray-500 sm:text-xl">
                  <p>Delivering the worlds fastest and most intuitive AI-powered code editor, enabling developers to accelerate their coding experience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-evenly">
          {[
            {
              title: "VisuaLens - Modern Analytics Tool",
              description: [
                "Discover in-depth insights into user behavior, device analytics, and event tracking for your website.",
                "Ideal for developers, marketers, and businesses of all sizes aiming to make data-driven decisions."
              ],
              imageId: "1"
            },
            {
              title: "Development & Maintenance",
              description: [
                "Maintainer: @the0hd",
                "Planned Stable Release (1.0): March 2025",
                "Development Status: Active",
                "<a href='https://www.github.com/VisuaLens/VisuaLens.git' className='text-primary-600'>GitHub Repository</a>"
                  .replace(/&/g, '&amp;')
                  .replace(/'/g, '&apos;')
              ],
              imageId: "2"
            },
            {
              title: "Key Features",
              description: [
                "Real-time updates, device analytics, user behavior tracking, and more. Easily accessible through our intuitive Next.js-based admin panel.",
                "API implementations, SDK support for JavaScript, Python, PHP, and custom data export options."
              ],
              imageId: "3"
            },
            {
              title: "Roadmap & Future Developments",
              description: [
                "Version 1.5 will introduce AI features such as sentiment analysis, trend prediction, and personalized recommendations.",
                "Future plans include Stripe integration, serverless support, and comprehensive team features."
              ],
              imageId: "4"
            }
          ].map((section, index) => (
            <div key={index} className="m-4 flex flex-col items-center gap-6 min-[425px]:m-8 min-[425px]:items-start sm:m-12 lg:m-24 lg:max-w-full lg:flex-row lg:justify-center lg:gap-28">
              <div className="mb-6 flex w-full flex-col text-center lg:mb-0 lg:ml-1.5 lg:w-[450px] lg:text-left">
                <h4 className="whitespace-pre-line pb-8 text-2xl font-medium text-primary-700 lg:text-4xl" data-aos="fade-up">{section.title}</h4>
                <div className="whitespace-pre-line text-base text-gray-600 lg:text-lg" data-aos="fade-up">
                  {section.description.map((paragraph, pIndex) => (
                    <p key={pIndex} className={pIndex < section.description.length - 1 ? "pb-6" : ""} dangerouslySetInnerHTML={{__html: paragraph}} />
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-[800px]">
                <div className="relative w-full pt-[66.6667%]">
                  <Image
                    src={"https://picsum.photos/800/533"}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-aos="fade-up"
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </>
  );
}
