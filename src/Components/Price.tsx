import React from 'react';

const DATA = [
  {
    package: 'Pay as you go',
    sessions: 'Single sessions',
    investment: '£60',
    per_session: '£60',
    popular: false,
    details: [
      {
        detail: '1 hours of excercises',
      },
      {
        detail: 'Personalised Workout',
      },
      {
        detail: 'Exercise Form Correction',
      },
    ],
  },
  {
    package: 'Bronze',
    sessions: '5 Session Package',
    investment: '£270',
    per_session: '£54',
    popular: false,
    details: [
      {
        detail: '1-2 Weeks Plan',
      },
      {
        detail: 'Personalised Program',
      },
      {
        detail: 'Bootcamp Sessions',
      },
    ],
  },
  {
    package: 'Silver',
    sessions: '10 Session Package',
    investment: '£520',
    per_session: '£52',
    popular: true,
    details: [
      {
        detail: '3-4 Weeks Plan',
      },
      {
        detail: 'Personalised Program',
      },
      {
        detail: 'Bootcamp Sessions',
      },
    ],
  },
  {
    package: 'Gold',
    sessions: '15 Session Package',
    investment: '£750',
    per_session: '£50',
    popular: false,
    details: [
      {
        detail: '5-6 Weeks Plan',
      },
      {
        detail: 'Personalised Program',
      },
      {
        detail: 'Bootcamp Sessions',
      },
    ],
  },
];
const Price = () => {
  return (
    <section id="pricing" className="mx-auto min-h-full w-5/6 py-[10rem]">
      <div className="lg:px-8 mx-auto mt-4 max-w-7xl pb-20 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-red-600">
            Pricing
          </h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
            Ready to Start Your Journey with us
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the product that works best
        </p>

        <div className="lg:mx-0 lg:max-w-none lg:grid-cols-4 isolate mx-auto mt-10 grid gap-8 md:grid-cols-4">
          {DATA.map((item, i) => {
            return (
              <div
                className={`ring-2 ${
                  item.popular ? 'ring-red-600' : 'ring-black'
                } xl:p-10 rounded-lg p-8`}
                key={i}
              >
                <div className="flex items-center justify-center gap-x-4">
                  <h2
                    id="product1"
                    className="text-lg font-semibold leading-8 text-black"
                  >
                    {item.package}
                  </h2>
                  {item.popular && (
                    <p className="rounded-full bg-red-600 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  )}
                </div>
                <p className="mt-6 flex items-baseline justify-center gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-black">
                    {item.investment}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {item.package === 'Pay as you go'
                      ? 'per session'
                      : 'per package'}
                  </span>
                </p>{' '}
                <p className="mt-4 text-center text-sm leading-6 text-gray-600">
                  {item.sessions}
                </p>
                <ul
                  role="list"
                  className="xl:mt-10 mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {item.details &&
                    item.details.map((detail, i) => {
                      return (
                        <li className="flex gap-x-3" key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-6 w-5 flex-none text-black"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {detail.detail}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <a
            href="/order"
            aria-describedby="product1"
            className="mt-6 w-auto rounded-md bg-black py-1.5 px-4 text-center text-sm font-semibold leading-6 text-white hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Price;
