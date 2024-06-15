import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "~/root";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <Layout>
      Here
    </Layout>
  );
}
