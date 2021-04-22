import { ResponseAPI } from "./store/types";
import { generateSearchURL, QueryParams } from "./utils";


const CORSProxy = "https://thingproxy.freeboard.io/fetch/"

const service = {
  searchByKeywords(queryParams: QueryParams): Promise<ResponseAPI> {
    return fetch(CORSProxy + generateSearchURL(queryParams)).then((res) => res.json());
  },
};

export default service;
