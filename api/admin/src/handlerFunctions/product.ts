import { UrlMappedFunction } from "../types";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const createProducts: UrlMappedFunction = async (params, data) => {
  console.log(params, data);
  return {
    status: 200,
    data: data as Object,
  };
};

export const retrieveProducts: UrlMappedFunction = async (params, data) => {
  return {
    status: 200,
    data: {},
  };
};
