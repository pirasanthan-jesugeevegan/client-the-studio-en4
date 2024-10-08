import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BenefitCard = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      variants={childVariant}
      className="mt-5 text-left md:px-5 md:py-16"
    >
      <div className="relative cursor-pointer dark:text-white">
        <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg bg-indigo-500 dark:bg-gray-200"></span>
        <div className="relative rounded-lg border-2 border-indigo-500 bg-white p-6 transition duration-500 hover:scale-105 dark:border-gray-300 dark:bg-gray-800">
          <span>{icon}</span>
          <h3 className="my-2 text-lg font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
          >
            <p>Learn More</p>
          </AnchorLink>
        </div>
      </div>
    </motion.div>
  );
};

export default BenefitCard;
