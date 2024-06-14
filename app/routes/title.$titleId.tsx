import type { MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "../layouts/Layout";
import React, { useParams } from "@remix-run/react";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare Workers!",
    },
  ];
};

export default function Title() {

  const params = useParams();

  return (
    <Layout>
      hello there
    </Layout>
  );
}
