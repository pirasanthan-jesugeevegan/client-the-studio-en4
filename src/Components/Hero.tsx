import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import ActionButton from '@/utils/ActionButton';
import HomePageText from '@/assets/HomePageText.png';
import Portfolio from '@/assets/portfolio.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = { setSelectedPage: (value: SelectedPage) => void };

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="gap-16 bg-black py-20 md:h-full">
      {/* Image + Main header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="md:-mt-20"
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] ">
                <p className="relative z-10 text-4xl font-semibold md:before:absolute md:before:top-0 md:before:-left-[100px] md:before:w-max md:before:-translate-y-1/2 md:before:transform md:before:select-none md:before:text-[6rem] md:before:font-bold md:before:uppercase md:before:leading-none md:before:text-white md:before:opacity-10 md:before:content-['THE_STUDIO_EN4']"></p>{' '}
                <div className="flex items-baseline text-white">
                  <h2 className="text-4xl font-bold md:text-7xl">
                    The <span> Studio</span>
                  </h2>
                  <p className="px-1 text-2xl font-bold text-red-600">EN4</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="h-px w-16 bg-white"></div>
                  <p className="text-4xl text-white">With Peter</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-white">
              The Studio EN4 offers exclusive personal training in North London,
              empowering you to look, move, and feel your best.
            </p>
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end md:hidden">
              <img className="w-[80%]" src={Portfolio} alt="Peter" />
            </div>
          </motion.div>
          {/* Actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex justify-center gap-8 md:items-center md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            {/* <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink> */}
          </motion.div>
        </div>
        {/* Image */}
        <div className="md:flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end hidden">
          <img className="w-[80%]" src={Portfolio} alt="Peter" />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-secondary-500 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-20">
              {/* <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" /> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
