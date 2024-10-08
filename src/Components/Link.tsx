import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/utils/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  const textColor = window.scrollY === 0 ? 'text-white' : 'text-black';
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  return (
    <AnchorLink
      className={`${
        isAboveMediumScreens ? textColor : 'text-white'
      } hover:text-primary-300 ${
        selectedPage === lowerCasePage && 'text-secondary-500'
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
