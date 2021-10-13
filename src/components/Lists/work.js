const WORK = [
  {
    title: "Studio Mindset",
    job: "Development",
    business: "Mindset",
    url: "https://studiomindset.co.uk/",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Hawthorne Consulting",
    job: "Development",
    business: "Mindset",
    url: "https://hawthorneconsulting.co.uk/",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "HMSNI",
    job: "Development",
    business: "Mindset",
    url: "https://hmsni.co.uk/",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
  {
    title: "Nocturne",
    job: "Development",
    business: "Freelance",
    url: "https://nocturnelabel.com/",
    image:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
  },
];

import Container from "../Layout/container";
import HeaderTwo from "../Typography/headerTwo";

export const Work = () => {
  return (
    <Container>
      <HeaderTwo text="Selected Work" />
      <ul>
        {WORK.map((item) => (
          <li key={item.title}>
            <a
              href={item.url}
              className="relative block py-6 overflow-hidden md:py-12 sm:space-x-6 sm:flex sm:items-center sm:justify-between line-item"
            >
              <p className="text-3xl md:text-5xl">{item.title}</p>
              <div className="flex mt-2 space-x-4 text-sm sm:flex-col sm:text-right sm:mt-0">
                <p>{item.job}</p>
                <p>{item.business}</p>
              </div>
            </a>
            <div className="block w-full h-px bg-white"></div>
          </li>
        ))}
      </ul>
    </Container>
  );
};
