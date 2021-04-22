import { ResponseAPI } from "./store/types";
import { generateSearchURL, QueryParams } from "./utils";

const service = {
  searchByKeywords(queryParams: QueryParams): Promise<ResponseAPI> {
    return fetch(generateSearchURL(queryParams)).then((res) => res.json());
  },
};

export default service;
