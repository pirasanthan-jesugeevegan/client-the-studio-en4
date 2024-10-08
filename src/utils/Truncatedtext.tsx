type Props = {
  text: string;
};

const TruncatedText = ({ text }: Props) => {
  const maxLength = 100;

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  return <p>{truncatedText}</p>;
};

export default TruncatedText;
