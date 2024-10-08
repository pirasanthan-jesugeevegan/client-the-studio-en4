import PeterImg from '@/assets/portfolio.png';

const About = () => {
  return (
    <section id="aboutus" className="bg-black py-14 duration-300 sm:px-10">
      <div className="mx-auto min-h-full w-5/6 py-10 md:py-20">
        <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2">
          <div data-aos="fade-up">
            <img
              src={PeterImg}
              alt=""
              className="mx-auto max-h-[400px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] sm:-translate-x-11 sm:scale-125"
            />
          </div>
          <div>
            <div className="space-y-5 pb-6 sm:p-16">
              <div data-aos="zoom-in" className="flex items-center gap-4">
                <div className="text-primary/70 text-7xl "></div>
                <div>
                  <p className="text-primary  text-red-600">The Studio EN4</p>
                  <h1 className="text-2xl font-bold text-white sm:text-4xl">
                    About us
                  </h1>
                </div>
              </div>
              <p
                data-aos="fade-up"
                className="leading-8 tracking-wide text-white"
              >
                Hi, I'm Peter Mitchell, a fully qualified and insured personal
                trainer with years of experience helping clients in some of the
                top gyms across North London. My passion is to help people
                transform their bodies, regain confidence, and build sustainable
                fitness habits.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-white">
                Whether you’re a beginner or someone who has struggled with
                fitness in the past, I’m here to guide you every step of the
                way. I specialize in working with clients who feel frustrated,
                overwhelmed, or stuck in their fitness journey. I’ve been where
                you are, and together, we can achieve your goals—no matter where
                you're starting from.
              </p>
              <p data-aos="fade-up" data-aos-delay="300" className="text-white">
                Every personal training session I offer is 100% customized to
                your needs, ensuring that you get the most out of every workout.
                I’ll provide you with personalized workouts, guidance, and
                support to help you succeed, whether your goal is weight loss,
                strength, or overall wellness.
              </p>
              <button
                data-aos="fade-up"
                className="text-red-  hover:bg-deep-purple-accent-700 focus:shadow-outline inline-flex h-12 items-center justify-center rounded bg-white px-6 font-medium tracking-wide shadow-md transition duration-200 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
