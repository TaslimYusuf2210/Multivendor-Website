import HomeClient from "./HomeClient";

export const revalidate = 60;

export const metadata = {
  title: "Padisquare | Multi-Vendor Storefront",
  description: "Your one-stop shop for curated collections from premium partners. Quality products delivered to your doorstep.",
};

export default function Home() {
  return <HomeClient />;
}
