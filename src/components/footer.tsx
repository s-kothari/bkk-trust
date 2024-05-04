const socialItems = [
  { name: "LinkedIn", linkTo: "https://www.linkedin.com/in/suyash-kothari/" },
  {
    name: "Email",
    linkTo:
      "mailto:suyash.kothari4@gmail?subject=Reaching out from your website",
  },
];

const copyright = "© BKK Charitable Trust 2024";

function Footer() {
  return (
    <footer className="">
      <nav className="bg-black relative py-4  h-16">
        <span className="absolute left-0 top-5 text-white text-sm px-8">
          {copyright}
        </span>
        <span className="absolute right-0 top-5 text-white">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.linkTo}
              className="px-8 text-white font-bold"
            >
              {item.name}
            </a>
          ))}
        </span>
      </nav>
    </footer>
  );
}

export default Footer;
