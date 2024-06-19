import { json, type MetaFunction } from "@remix-run/cloudflare";
import { Layout } from "../layouts/Layout";
import { baseURL } from "~/utils/baseURL";
import { useLoaderData } from "@remix-run/react";
import MangaResponse from "~/type/Manga";
import Cover from "~/type/Cover";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix on Cloudflare!",
    },
  ];
};

export const loader = async () => {
  const [getLatest] = await Promise.all([
    fetch(baseURL + "/manga", {
      method: "GET",
    }),
  ]);

  const latest: MangaResponse = await getLatest.json() as MangaResponse;

  const getId = latest.data.map(value => value.relationships).map(result => result.filter(value => value.type === 'cover_art')[0].id)

  const coverUrls = await Promise.all(getId.map(async (id) => {
    const response = await fetch('https:/api.mangadex.org/cover/'+id, {
      method: 'GET'
    })
    const toJSON: Cover = await response.json() as Cover;

    return toJSON.data.attributes.fileName;
  }))



  return json({ getLatest: latest, coverUrls: coverUrls });
};

export default function Index() {
  const { getLatest, coverUrls } = useLoaderData<typeof loader>();

  const latestManga: MangaResponse = getLatest as MangaResponse;

  return (
    <Layout>
      <div className="px-2">
        <div className="text-2xl font-mono my-4">Latest Updates</div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-slate-50 spacy-3">
            {latestManga.data.map((result, Index) => (
              
              <div key={Index} className="flex flex-row">
                <div className="px-2">
                  <div className="rounded shadow-md w-16 h-full">
                    <img
                      src={`https://uploads.mangadex.org/covers/${
                        result.id
                      }/${coverUrls[Index]}.256.jpg`}
                      alt="cover"
                    />
                  </div>
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <div className="truncate ...">Haruka Reset</div>
                  <p className="truncate min-w-0">
                    Vol. 9 Ch. 69 - The Iron Whale Swims Silently Vol. 9 Ch. 69
                    - The Iron Whale Swims Silently
                  </p>
                  <div>Group</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
