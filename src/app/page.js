import Mainpage from "./main-page/MainPage";
import { buildMetadata, PAGES } from "@/lib/seo";

export const metadata = buildMetadata({
  title: PAGES.home.title,
  description: PAGES.home.description,
  keywords: PAGES.home.keywords,
  path: "/",
  absoluteTitle: true,
});

const page = () => {
  return <Mainpage />;
};

export default page;
