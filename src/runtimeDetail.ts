import axios from "axios";
import { GetRuntimeDetail } from "./types";
import { urtConfig } from "./url";

export const getRuntimeDetail: GetRuntimeDetail = async () => {
  const url = `${urtConfig.runtimeDetail}`;
  const res = await axios.get(url);
  return res.data;
};
