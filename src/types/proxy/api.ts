import { Shadowsocks } from "./shadowsocks";
import { Socks5 } from "./socks5";

export type Proxy = Shadowsocks | Socks5;

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

export type DelayRes = {
  delays: Delay[];
};

type GetProxyDelayReq = {
  id: string;
  url?: string;
};
export type GetProxyDelay = (
  req: GetProxyDelayReq
) => Promise<{ delay: number }>;

type GetProxiesDelayReq = {
  url?: string;
};
export type GetProxiesDelay = (req?: GetProxiesDelayReq) => Promise<DelayRes>;

type TestProxyUpdReq = {
  id: string;
};
export type TestProxyUdp = (
  req: TestProxyUpdReq
) => Promise<{ result: boolean }>;
