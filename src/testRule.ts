import axios from "axios";
import { TestRule } from "./types";
import { urtConfig } from "./url";

export const testRule: TestRule = async (data) => {
  const url = `${urtConfig.testRule}`;
  const res = await axios.get(url, { params: data });
  return res.data;
};
