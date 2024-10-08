const Testimonials = () => {
  const Data = [
    {
      message:
        'Great 1-2-1 personal training with Pete. He tailors each training session to suit his clients’ individual needs and abilities, with fab music to exercise to. Pete ensures training is structured but fun, while also helping his clients set realistic goals and achieve results. The studio is welcoming and Pete really builds up a good rapport with his clients. Would highly recommend PT sessions with Pete at The Studio.',
      name: 'Angie Lawrence',
    },
    {
      message:
        'Very impressed. I took an initial class with Peter and I would definitely recommend him to anyone who needs some ideas or motivation for their training regime. Nice studio, clean, tidy and with every piece of equipment needed. Will use again.',
      name: 'David Shaikh',
    },
    {
      message:
        'Peter is a fantastic trainer who provides challenging yet engaging sessions, he keeps you motivated throughout and leaves you feeling really positive. His facilities are first class as is the man himself.',
      name: "Liam O'Connell",
    },
  ];
  return (
    <section id="testimonials" className="lg:py-20 bg-black py-12 sm:py-16">
      <div className="lg:px-8 mx-auto max-w-7xl px-10 sm:px-6 md:px-4">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="xl:text-5xl font-pj mt-4 text-3xl font-bold text-white sm:text-4xl">
              Our happy clients say about us
            </h2>
          </div>

          <div className="mt-8 text-center md:order-3 md:mt-16">
            <a
              href="https://www.google.com/search?sca_esv=20381db1e9af4296&cs=1&output=search&kgmid=/g/11rkcc_smp&q=The+Studio+EN4&shndl=30&source=sh/x/kp/local/m1/1&kgs=01faee8d6a84994f#lrd=0x487619afde94bc9b:0x42e9593dad80548a,1,,,,"
              title="All Review"
              className="font-pj border-b-2 border-white pb-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:border-gray-600 hover:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Check all reviews
            </a>
          </div>

          <div className="relative mt-10 md:order-2 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="mx-auto h-full w-full max-w-5xl rounded-3xl opacity-30 blur-lg filter"></div>
            </div>

            <div className="lg:gap-10 relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3">
              {Data.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col overflow-hidden shadow-none hover:shadow-xl hover:shadow-gray-400"
                >
                  <div className="lg:py-8 lg:px-7 flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <svg
                          className="h-5 w-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <svg
                          className="h-5 w-5 text-[#FDB241]"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <blockquote className="mt-8 flex-1">
                        <p className="font-pj text-lg leading-relaxed text-gray-900">
                          “{item.message}”
                        </p>
                      </blockquote>
                    </div>

                    <div className="mt-8 flex items-center">
                      <img
                        className="h-11 w-11 flex-shrink-0 rounded-full object-cover"
                        src={`https://ui-avatars.com/api/?name=${item.name}`}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="font-pj text-base font-bold text-gray-900">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
