import { useState } from 'react';
import RepDialer from '../components/RepDialer.jsx';

/** Animated CSS globe – no three-globe/WebGPU dependency */
const AnimatedGlobe = ({ width = 326, height = 326 }) => (
  <div
    className="globe-container rounded-2xl overflow-hidden bg-black-300 flex items-center justify-center"
    style={{ width, height, minHeight: height }}
    aria-hidden
  >
    <div className="globe-sphere" />
    <div className="globe-label absolute bottom-2 left-0 right-0 text-center text-white/80 text-sm z-10">
      Addis Ababa, Ethiopia · Remote worldwide
    </div>
  </div>
);

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('https://heylink.me/Ermax7');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:col-span-2 flex flex-col gap-5 h-full">
          <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
            <div className="grid-container">
              <img
                src="/assets/ermProfPic.png"
                alt="Ermias profile"
                className="w-full sm:h-[276px] h-fit object-cover rounded-2xl"
              />
              <div>
                <p className="grid-headtext">Hi, I&apos;m Ermias Dejene</p>
                <p className="grid-subtext">
                  With more than 6 years of experience, I have honed my skills in both frontend and backend dev, creating
                  dynamic and responsive websites.
                </p>
              </div>
            </div>

            <div className="grid-container">
              <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                  applications
                </p>
              </div>
            </div>
          </div>

          <div className="grid-container">
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:col-span-1 flex flex-col gap-5 h-full">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center relative">
              <AnimatedGlobe width={326} height={326} />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Addis Ababa, Ethiopia and open to remote work worldwide.</p>
              <p className="grid-subtext">
                I am literally available in daytime, evening and/or night. Feel free to contact me at anytime in all social
                media platforms I have provided as my contact. At times when I needed more concentration or having rest
                and eventually don&apos;t answer calls right away, I will respond minutes later or have my solid
                representatives to count on -Seblewongel Belachew and Bethelhem Yibabe - who can readily handle all
                requests on my behalf in English and Amharic. They are just a phone call away. 🙏
              </p>
              <RepDialer containerClass="w-full mt-10" />
            </div>
          </div>

          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me via link below </p>
              <p className="grid-subtext text-center">( or any of my representatives via call as pinned above. )</p>
              <div className="copy-container" onClick={handleCopy}>
                {hasCopied ? (
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22.8402 2.49999L22.0446 3.29548L8.85534 16.4848C7.83023 17.5099 6.16817 17.5099 5.14304 16.4848L0.953698 12.2955L0.158203 11.5L1.7492 9.909L2.54469 10.7045L6.73403 14.8939C6.88047 15.0403 7.11791 15.0403 7.26435 14.8939L20.4537 1.70449L21.2492 0.908997L22.8402 2.49999Z"
                      fill="#8080FF"
                    />
                  </svg>
                ) : (
                  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27 4.5H11C10.7348 4.5 10.4804 4.60536 10.2929 4.79289C10.1054 4.98043 10 5.23478 10 5.5V10.5H5C4.73478 10.5 4.48043 10.6054 4.29289 10.7929C4.10536 10.9804 4 11.2348 4 11.5V27.5C4 27.7652 4.10536 28.0196 4.29289 28.2071C4.48043 28.3946 4.73478 28.5 5 28.5H21C21.2652 28.5 21.5196 28.3946 21.7071 28.2071C21.8946 28.0196 22 27.7652 22 27.5V22.5H27C27.2652 22.5 27.5196 22.3946 27.7071 22.2071C27.8946 22.0196 28 21.7652 28 21.5V5.5C28 5.23478 27.8946 4.98043 27.7071 4.79289C27.5196 4.60536 27.2652 4.5 27 4.5ZM20 26.5H6V12.5H20V26.5ZM26 20.5H22V11.5C22 11.2348 21.8946 10.9804 21.7071 10.7929C21.5196 10.6054 21.2652 10.5 21 10.5H12V6.5H26V20.5Z"
                      fill="#8080FF"
                    />
                  </svg>
                )}
                <p className="lg:text-2xl md:text-xl font-medium text-[#8080FF]">
                  <a href="https://heylink.me/Ermax7"> Copy Ermias&apos; Contact </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
