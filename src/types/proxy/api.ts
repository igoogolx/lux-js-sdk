import { Shadowsocks } from "./shadowsocks";
import { Socks5 } from "./socks5";
import { Http } from "./http";

export type Proxy = Shadowsocks | Socks5 | Http;

export type GetProxiesRes = {
  proxies: Proxy[];
  selectedId: string;
};
export type GetProxies = () => Promise<GetProxiesRes>;

type GetUpdateProxyReq = {
  proxy: Proxy;
  id: string;
};
export type UpdateProxy = (req: GetUpdateProxyReq) => Promise<void>;

type AddProxyReq = {
  proxy: Omit<Proxy, "id" | "region">;
};

export type AddProxy = (req: AddProxyReq) => Promise<{ id: string }>;

type DeleteProxyReq = {
  id: string;
};

export type DeleteProxy = (req: DeleteProxyReq) => Promise<void>;

export type Delay = {
  id: string;
  value: number;
};

type GetProxyDelayReq = {
  id: string;
  url?: string;
};
export type GetProxyDelay = (
  req: GetProxyDelayReq
) => Promise<{ delay: number }>;

type TestProxyUpdReq = {
  id: string;
};
export type TestProxyUdp = (
  req: TestProxyUpdReq
) => Promise<{ result: boolean }>;
