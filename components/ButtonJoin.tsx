import Link from "next/link";

const ButtonJoin = ({
  containerStyles,
  text,
}: {
  containerStyles: string;
  text: string;
}) => {
  return (
    <Link href='membership'>
       
      <button type="button" className={`${containerStyles}`}>
        {text}
      </button>
    </Link>
  );
};

export default ButtonJoin;
