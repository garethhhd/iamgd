import Container from "../Layout/container";
import HeaderTwo from "../Typography/headerTwo";
import Link from "next/link";
export const Blog = ({ allPosts }) => {
  return (
    <Container>
      <HeaderTwo text="Latest Articles" />
      <ul>
        {allPosts.map((item) => (
          <li key={item.slug}>
            <Link href={`/posts/${item.slug}`}>
              <a className="relative flex items-center justify-between py-12 space-x-6 overflow-hidden text-4xl line-item">
                {item.title}
                <div className="absolute bottom-0 left-0 block w-full h-px bg-white"></div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
