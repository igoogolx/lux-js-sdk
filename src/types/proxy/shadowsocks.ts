import { BaseProxy } from "./base";

export interface Shadowsocks extends BaseProxy {
  password: string;
  cipher: string;
  udp?: boolean;
  plugin?: string;
  "plugin-opts"?: Record<string, string>;
}
