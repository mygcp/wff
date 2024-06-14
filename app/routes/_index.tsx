import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "../layouts/Layout";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare Workers!",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      hello there
    </Layout>
  );
}