import { useQuery } from "@tanstack/react-query";
import { gql, GraphQLClient } from "graphql-request";
import { Anime, AnimeListResponse } from "../interfaces/anime.interface";

const graphQLClient = new GraphQLClient("https://graphql.anilist.co");

// Define la consulta GraphQL
const GET_ANIME_LIST = gql`
  query GetAnimeList($page: Int, $perPage: Int, $search: String) {
    Page(page: $page, perPage: $perPage) {
      media(search: $search) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
      }
    }
  }
`;

// Define el hook para obtener datos
export const useAnimeList = (
  page: number,
  perPage: number,
  search?: string
) => {
  return useQuery<Anime[], Error>({
    queryKey: ["animeList", page, perPage, search],
    queryFn: async () => {
      const data = await graphQLClient.request<AnimeListResponse>(
        GET_ANIME_LIST,
        { page, perPage, search }
      );
      return data.Page.media;
    },
  });
};
