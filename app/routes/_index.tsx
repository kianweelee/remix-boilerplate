import type { MetaFunction } from "@remix-run/node";
import HomeNav from "~/components/Homenav";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Boilerplate" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <HomeNav />
    </div>
  );
}
