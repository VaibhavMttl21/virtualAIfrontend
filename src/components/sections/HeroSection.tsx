import { motion } from "framer-motion";
import CircularImageGroup from "./Circularimage"; 
import Footer from "./herofooter";
import CardCarousel from './CardC'

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div
          dir="ltr"
          className="absolute mt-32 top-64 left-72 top-96 w-[60rem] h-[60rem] bg-blue-600/80 rounded-s-full filter blur-3xl opacity-80"
        />
        <div
          dir="rtl"
          className="absolute right-48 mt-96 ml-96 w-[45rem] h-[55rem] top-32 bg-fuchsia-600/60 rounded-s-full filter blur-3xl"
        />
      </div>

      <div className="relative pt-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="ml-40 mt-6 flex">
            Tech
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 ml-6"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-40 mt-3 flex font-bold text-xl">
            10M +
            <div className="ml-10 -translate-y-6">
              <CircularImageGroup />
            </div>
            <div className="font-bold text-xl ml-auto mr-48">
              Beyond the screen
            </div>
          </div>

          <section className="relative min-h-screen  flex items-center justify-center overflow-hidden">
            <div className="absolute  flex items-center justify-center">
              <h1
                className="text-[27.5rem] font-bold opacity-25 select-none leading-none text-center mb-96 -translate-y-18 scale-y-75 -translate-x-8 "
                style={{
                  letterSpacing: "-0.05em",
                  color: "#1E90FF",
                  height: "48rem",
                }}
              >
                REALITY
              </h1>
            </div>
            <div
              className=" bg-center h-screen w-full bg-no-repeat mt-10 "
              style={{
                backgroundImage: "url('mnmn 1.png')",
                backgroundSize: "1100px 1100px",
              }}
            >
              <div className=" left-96 text-end ml-96 translate-y-36  relative flex justify-center opacity-60">
              <div className="w-96 h-64 pt-24 pr-20 pl-10 rounded-3xl bg-teal-950 border border-white-700/30 backdrop-blur-sm">
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white text-start">
        Adaptive Environments
        </h2>
        <p className="text-purple-200/90 leading-relaxed text-start">
        Our VR system uses AI to create adaptive environments that respond to your actions and preferences.
        </p>
      </div>
      <div className="translate-y-20 translate-x-20 opacity-70">
        <CardCarousel/>
      </div>
      <div className="translate-y-48 translate-x-10 text-4xl font-bold opacity-100">
      The Future, <br />
      Visually Your
      </div>
    </div>
                </div>
              <div className="ml-40 mt-8 font-bold text-xl ">
                Reality Perfected
                <br />
                <br />
                <div className="font-normal">
                  Dive into a visually stunning <br />
                  future with our AI Powered VR <br />
                  personalized experiences that <br />
                  push the boundaries what's <br />
                  possible
                </div>
                <br /> <br />
                <div>
                  <div className="flex font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 mt-3 mr-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Innovate your <br /> imagination
                  </div>
                  <br /> <br />
                  <div className="flex font-normal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-8 mt-3 mr-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Dreams Turned <br /> Digital
                  </div>
                </div>
                <div className="mt-16 flex">
                  <button
                    type="button"
                    className="bg-white text-black font-bold py-2 px-4 pt-5 pb-5 rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
                  >
                    BUY NOW!!!
                  </button>
                  <div className="bg-white-100 rounded-full translate-y-1">
                  <button
      className="flex items-center justify-center w-20 h-20 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-200 transition"
    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-10 mt-3 text-slate-1100 bg-slate-100 -translate-y-2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
     <div className="opacity-90">
      <Footer />
      </div>
    </section>
  );
}