const Logo = ({ theme }: { theme: 'light' | 'dark' }) => {
  return (
    <a className="flex flex-col items-start" href="#">
      <div className="flex items-baseline">
        <h2
          className={`text-2xl ${
            theme === 'light' ? 'text-white' : 'text-black'
          }`}
        >
          The <span className="font-bold"> Studio</span>
        </h2>
        <p className="font-bold text-red-600 px-1 text-base">EN4</p>
      </div>
      <div>
        <p className="text-red-600 font-bold">PERSONAL TRAINING</p>
      </div>
    </a>
  );
};

export default Logo;
