const socialItems = [
  { name: "LinkedIn", linkTo: "https://www.linkedin.com/in/suyash-kothari/" },
  {
    name: "Email",
    linkTo:
      "mailto:suyash.kothari4@gmail?subject=Reaching out from your website",
  },
];

const copyright = "© BKK Charitable Trust 2025";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400 order-2 sm:order-1">
            {copyright}
          </p>
          <div className="flex space-x-6 order-1 sm:order-2">
            {socialItems.map((item) => (
              <a
                key={item.name}
                href={item.linkTo}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
