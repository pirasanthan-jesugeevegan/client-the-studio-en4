import { SelectedPage } from '@/utils/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png';
import HText from '@/utils/HText';
import { useForm } from 'react-hook-form';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function ContactUs({ setSelectedPage }: Props) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const inputStyles = `mt-5 w-full rounded-lg bg-black text-white
  px-5 py-3 placeholder-white`;

  return (
    <section id="contacts" className="mx-auto w-5/6 pt-[10rem] pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Ready to take the next step towards a stronger, healthier you? Fill
            out the form below, and we'll be in touch to schedule your free
            consultation. Whether you're new to fitness or looking to take your
            training to the next level, The Studio EN4 is here to help you
            achieve your goals with personalized training that fits your
            lifestyle.
          </p>
        </motion.div>
        {/* Form & Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/df5cfd74db25722e7d3efa9cb571dc79"
            >
              <input
                className={inputStyles}
                placeholder="NAME"
                {...register('name', {
                  required: true,
                  maxLength: 50,
                })}
                type="text"
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' && 'Max length is 50 char.'}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register('message', {
                  required: true,
                  maxLength: 1000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === 'required' &&
                    'This field is required.'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 1000 char.'}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 text-white transition duration-500 hover:bg-secondary-400"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="mt-5 w-full "
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
              <p className="relative z-10 text-4xl font-semibold md:before:absolute md:before:top-0 md:before:-left-[300px] md:before:w-max md:before:-translate-y-1/2 md:before:transform md:before:select-none md:before:text-[6rem] md:before:font-bold md:before:uppercase md:before:leading-none md:before:text-black md:before:opacity-10 md:before:content-['THE_STUDIO_EN4']"></p>{' '}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactUs;
