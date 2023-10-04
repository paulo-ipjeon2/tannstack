import axios, { AxiosPromise } from "axios";

type Dog = {
  message: string;
  status: string;
};

export const getRandomDog = (): AxiosPromise<Dog> => {
  return axios.get("https://dog.ceo/api/breeds/image/random");
};
