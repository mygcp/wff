import {
  LoaderFunctionArgs,
  json,
  type MetaFunction,
} from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { Layout } from "../layouts/Layout";
import { baseURL } from "~/utils/baseURL";
import { useLoaderData } from "@remix-run/react";
import MangaResponse from "~/type/Manga";
import Cover from "~/type/Cover";
import { useEffect, useState } from "react";
import axios from "axios";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export const loader = async ({context}: LoaderFunctionArgs) => {
  const getLatest = await axios.get(baseURL + "/manga", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  });

  const getBook = await axios.get("https://openlibrary.org/works/OL18020194W/bookshelves.json", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    },
  });

  return json({ getLatest: (await getLatest.data) as MangaResponse, getBook: await getBook.data });
};

export default function Index() {
  const { getLatest, getBook } = useLoaderData<typeof loader>();

  const [coverUrls, setCoverUrls] = useState<String[]>([]);

  useEffect(() => {
    const exec = async () => {

      const getId = getLatest?.data?.map(value => value.relationships).map(result => result.filter(value => value.type === 'cover_art')[0].id)

      const res = await Promise.all(getId.map(async (id) => {
        const response = await axios.get('https:/api.mangadex.org/cover/'+id)
        const toJSON: Cover = await response.data as Cover;

        return toJSON.data.attributes.fileName;
      }))
      setCoverUrls(res)
    }
    exec();
  }, [])

  return (
    <Layout>
      <div className="px-2">
        <div className="text-2xl font-mono my-4">Latest Updates</div>
        <div className="grid grid-cols-4 gap-3">

          <div>
            {JSON.stringify(getBook)}
          </div>
          <div className="bg-slate-50 spacy-3">
            {getLatest.data.map((result, Index) => (
              <div>
                {coverUrls[Index] !== undefined ? (
                  <div key={Index} className="flex flex-row">
                    <div className="px-2">
                      <div className="rounded shadow-md w-16 h-full">
                        <img
                          src={`https://uploads.mangadex.org/covers/${result.id}/${coverUrls[Index]}.256.jpg`}
                          alt="cover"
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="truncate ...">Haruka Reset</div>
                      <p className="truncate min-w-0">
                        Vol. 9 Ch. 69 - The Iron Whale Swims Silently Vol. 9 Ch.
                        69 - The Iron Whale Swims Silently
                      </p>
                      <div>Group</div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
