import { Layout } from "../layouts/Layout";
import { baseURL } from "~/utils/baseURL";
import MangaResponse from "~/type/MangaResponse";
import axios from "axios";
import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react";
import { MetaFunction } from "@remix-run/cloudflare";
import { flags } from "~/utils/flags";
import ChapterMangaResponse from "~/type/ChapterMangaResponse";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Latest Updates" },
    {
      name: "description",
      content: "Mangadex simple web api impl!",
    },
  ];
};

// export const clientLoader = async (args: ClientLoaderFunctionArgs) => {
//   const languages = ["en", "id", "jp"];
//   const includes = ["user", "scanlation_group", "manga"];
//   const contentRating = ["safe", "suggestive", "erotica"];

//   const fetchChapter = await axios.get(baseURL + "/chapter", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     params: {
//       limit: "48",
//       offset: "0",
//       "includes[]": includes,
//       "contentRating[]": contentRating,
//       "order[readableAt]": "desc",
//       translatedLanguage: languages,
//     },
//   });

//   const getChapter = (await fetchChapter.data) as ChapterMangaResponse;

//   const getMangaID: string[] = [];

//   getChapter.data.forEach((res) => {
//     res.relationships.forEach((relation) => {
//       if (
//         relation.type === "manga" ||
//         relation.type === "manhwa" ||
//         relation.type === "manhua"
//       ) {
//         if (!getMangaID.includes(relation.id)) getMangaID.push(relation.id);
//       }
//     });
//   });

//   const fetchManga = await axios.get(baseURL + "/manga", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     params: {
//       ids: getMangaID,
//       "contentRating[]": contentRating,
//       "includes[]": "cover_art",
//       limit: 100,
//     },
//   });

//   const getManga = (await fetchManga.data) as MangaResponse;

//   return {
//     getChapter,
//     getManga,
//   };
// };

export default function Index() {
  const [manga, setManga] = useState<MangaResponse>();
  const [chapter, setChapter] = useState<ChapterMangaResponse>();

  useEffect(() => {
    // const exec = async () => {
    //   const languages = ["en", "id", "jp"];
    //   const includes = ["user", "scanlation_group", "manga"];
    //   const contentRating = ["safe", "suggestive", "erotica"];

    //   const fetchChapter = await fetch(baseURL + "/chapter?limit=48&offset=0&includes[]=user&includes[]=scanlation_group&includes[]=manga&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[readableAt]=desc&translatedLanguage[]=en&translatedLanguage[]=id&translatedLanguage[]=jp");

    //   const getChapter = (await fetchChapter.json()) as ChapterMangaResponse;

    //   const getMangaID: string[] = [];

    //   getChapter.data.forEach((res) => {
    //     res.relationships.forEach((relation) => {
    //       if (
    //         relation.type === "manga" ||
    //         relation.type === "manhwa" ||
    //         relation.type === "manhua"
    //       ) {
    //         if (!getMangaID.includes(relation.id)) getMangaID.push(relation.id);
    //       }
    //     });
    //   });

    //   const fetchManga = await axios.get(baseURL + "/manga", {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     params: {
    //       ids: getMangaID,
    //       "contentRating[]": contentRating,
    //       "includes[]": "cover_art",
    //       limit: 100,
    //     },
    //   });

    //   const getManga = (await fetchManga.data) as MangaResponse;

    //   setManga(getManga);
    //   setChapter(getChapter);
    // };

    const exec = async () => {
      const manga = await fetch('https://api.mangadex.org/chapter', {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
      });

      console.log(await manga.json())
    }

    exec();
  }, []);

  return (
    <Layout>
      <div className="px-2">
        <div className="text-2xl font-mono my-4">Latest Updates</div>
        <div className="w-full mt-20">
          {/* {manga?.data.map((data, index) => (
            <div key={index} className="p-3 flex bg-slate-100">
              <div className="mr-2">
                <img
                  className="object-cover h-48 w-36"
                  src={`https://mangadex.org/covers/${data.id}/${
                    data.relationships.find(
                      (val) => val.attributes !== undefined
                    )?.attributes?.fileName
                  }.256.jpg`}
                  alt="bg-cover"
                />
              </div>
              <div className="w-full">
                <div className="font-extrabold text-lg flex px-1">
                  <img className="w-5 mr-2" src={flags.jp} alt="flags" />
                  <div>{data.attributes.title.en}</div>
                </div>
                <div className="">
                  <div className="px-1.5 cursor-pointer flex justify-between hover:bg-slate-300 rounded-sm">
                    <div>
                      <div className="flex font-bold ">
                        <img className="w-5 mr-2" src={flags.jp} alt="flags" />
                      </div>
                      <div className="flex">
                        <div className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                            <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                            <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                            <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                          </svg>
                        </div>
                        Group
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="flex">
                          <div className="mr-1 content-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                              <path d="M12 7v5l3 3" />
                            </svg>
                          </div>
                          31 minutes Ago
                        </div>
                        <div className="flex">
                          <div className="mr-1 content-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                            >
                              <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                              />
                              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            </svg>
                          </div>
                          User
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} */}

          {/* <div className="p-3 flex bg-slate-100">
            <div className="mr-2">
              <img
                className="object-cover h-48 w-36"
                src="https://mangadex.org/covers/38f386ce-f2dc-4f2b-99f9-522eab56078d/bb45c8ed-521d-47a4-b780-cfc72b356228.png.256.jpg"
                alt="bg-cover"
              />
            </div>
            <div className="w-full">
              <div className="font-extrabold text-lg flex px-1">
                <img className="w-5 mr-2" src={flags.jp} alt="flags" /> Title Of
                Manga do you like
              </div>
              <div className="">
                <div className="px-1.5 cursor-pointer flex justify-between hover:bg-slate-300 rounded-sm">
                  <div>
                    <div className="flex font-bold ">
                      <img className="w-5 mr-2" src={flags.jp} alt="flags" />
                      Chapter
                    </div>
                    <div className="flex">
                      <div className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" />
                          <path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M17 10h2a2 2 0 0 1 2 2v1" />
                          <path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                          <path d="M3 13v-1a2 2 0 0 1 2 -2h2" />
                        </svg>
                      </div>
                      Group
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="flex">
                        <div className="mr-1 content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                            <path d="M12 7v5l3 3" />
                          </svg>
                        </div>
                        31 minutes Ago
                      </div>
                      <div className="flex">
                        <div className="mr-1 content-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-user"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                        </div>
                        User
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}
