import Link from "next/link";

const NavLink = ({
  text = "Link label",
  to,
}: {
  text?: string;
  to: string;
}) => {
  return (
    <Link
      href={to}
      className=" ease-in duration-300 flex w-full items-center justify-center rounded-md border border-lighBorderPrimary px-2 text-center uppercase tracking-wider hover:bg-lightPrimary hover:text-lighBg"
    >
      {text}
    </Link>
  );
};

export default NavLink;
