import { Layout } from "../layouts/Layout";
import { baseURL } from "~/utils/baseURL";
import MangaResponse from "~/type/Manga";
import Cover from "~/type/Cover";
import { useEffect, useState } from "react";
import axios from "axios";
import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Latest Updates" },
    {
      name: "description",
      content: "Mangadex simple web api impl!",
    },
  ];
};

export const clientLoader = async (args: ClientLoaderFunctionArgs) => {
  const fetchManga = await axios.get(baseURL + "/manga");

  const getManga = (await fetchManga.data) as MangaResponse;

  const getId = getManga?.data
    ?.map((value) => value.relationships)
    .map(
      (result) => result.filter((value) => value.type === "cover_art")[0].id
    );

  const coverUrls = await Promise.all(
    getId.map(async (id) => {
      const response = await axios.get("https:/api.mangadex.org/cover/" + id);
      const toJSON: Cover = (await response.data) as Cover;

      return toJSON.data.attributes.fileName;
    })
  );

  return {
    getManga,
    coverUrls
  };
};

export default function Index() {
  const {getManga, coverUrls} = useLoaderData<typeof clientLoader>();

  return (
    <Layout>
      <div className="px-2">
        <div className="text-2xl font-mono my-4">Latest Updates</div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-slate-50 spacy-3">
            {getManga.data.map((result, Index) => (
              <div key={Index}>
                {coverUrls[Index] !== undefined ? (
                  <div  className="flex flex-row">
                    <div className="px-2">
                      <div className="rounded shadow-md w-16 h-full">
                        <img
                          src={`https://uploads.mangadex.org/covers/${result.id}/${coverUrls[Index]}.256.jpg`}
                          alt="cover"
                        />
                      </div>
                    </div>
                    <div className="min-w-0 flex flex-col justify-center">
                      <div className="truncate ...">{result.attributes.title.en}</div>
                      <p className="truncate min-w-0">
                        {} - The Iron Whale Swims Silently Vol. 9 Ch.
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
