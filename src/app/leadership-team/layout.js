// This page still has placeholder (lorem ipsum) text, so it is kept out of
// search results. Remove the robots line once the real text is in place
// and add the page to src/app/sitemap.js.
export const metadata = {
  title: "Leadership Team",
  robots: { index: false, follow: true },
};

export default function Layout({ children }) {
  return children;
}
