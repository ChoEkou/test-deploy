import { AxiosResponse } from "axios";
import api from "src/api/api";
import { CustomError } from "src/api/error";

export type ItemType = { id: string };

export const getList = () =>
  api.request<ItemType, AxiosResponse<ItemType> & CustomError>({
    url: "/team",
    method: "get",
    data: {},
  });
