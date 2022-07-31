import { BaseProxy } from "./base";

export interface Shadowsocks extends BaseProxy {
  password: string;
  method: string;
  udp?: boolean;
  plugin?: string;
  pluginOpts?: Record<string, string>;
}
