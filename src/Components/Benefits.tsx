import ActionButton from '@/utils/ActionButton';
import HText from '@/utils/HText';
import { BenefitType, SelectedPage } from '@/utils/types';
import { CgGym } from 'react-icons/cg';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdSportsGymnastics } from 'react-icons/md';
import { motion } from 'framer-motion';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
import Benefit from './BenefitCard';

const benefits: Array<BenefitType> = [
  {
    icon: <MdSportsGymnastics className="h-16 w-16 text-primary-500" />,
    title: 'Tailored Personal Training',
    description:
      "Each session is fully customized to fit your unique goals. Whether you're a beginner or aiming for something specific, we’re with you every step of the way.",
  },
  {
    icon: <CgGym className="h-16 w-16 text-primary-500" />,
    title: 'Private, High-Performance Gym',
    description:
      'Train in a fully equipped, private gym designed for maximum results. No crowds, no waiting—just focus on achieving your best self.',
  },
  {
    icon: <FaRegCheckCircle className="h-16 w-16 text-primary-500" />,
    title: 'Proven Success with Beginners',
    description:
      "We specialize in helping beginners or those who've struggled with fitness in the past. Our approach is designed for long-term success.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-9/12 py-20 pt-[10rem]"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>EXPERIENCE FITNESS THE RIGHT WAY</HText>
          <p className="my-5 text-sm">
            At The Studio EN4, we focus on delivering personalized training,
            exceptional facilities, and real results. Whether you're just
            starting out or looking to improve, our expert trainers are here to
            support you every step of the way.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Graphics and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img
            className="mx-auto"
            src={BenefitsPageGraphic}
            alt="benefits-page-graphic"
          />
          <div>
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    JOIN THE <span className="text-primary-500">BEST</span> IN
                    NORTH LONDON
                  </HText>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                We are committed to helping each member reach their fitness
                goals, no matter where they are starting from. With
                state-of-the-art equipment and a supportive community, you'll
                thrive at The Studio EN4.
              </p>
              <p className="mb-5">
                Let us guide you towards a healthier, stronger you. Sign up
                today and start transforming your fitness journey with us.
              </p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Start Training Today
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
