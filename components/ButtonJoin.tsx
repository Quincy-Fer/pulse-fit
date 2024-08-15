import Link from "next/link";

const ButtonJoin = ({
  containerStyles,
  text,
  href,
}: {
  containerStyles: string;
  text: string;
  href: string;
}) => {
  return (
    <Link href={href}>
      <button type="button" className={`${containerStyles}`}>
        {text}
      </button>
    </Link>
  );
};

export default ButtonJoin;
