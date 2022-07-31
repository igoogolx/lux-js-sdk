import axios from "axios";
import { GetSetting, SetSetting } from "./types";
import { urtConfig } from "./url";

export const getSetting: GetSetting = async () => {
  const url = `${urtConfig.setting}`;
  const res = await axios.get(url);
  return res.data.setting;
};

export const setSetting: SetSetting = async (data) => {
  const url = `${urtConfig.setting}`;
  await axios.put(url, data);
};
