export type SettingRes = {
  defaultInterface: string;
  trueProxyServer: string;
  localServer: {
    http: { enabled: boolean; port: number };
  };
  outbound: {
    mode: "auto" | "select";
    config: {
      type: "url-test" | "fallback";
      url: string;
    };
  };
};

export type GetSetting = () => Promise<SettingRes>;

export type SetSetting = (data: SettingRes) => Promise<void>;

export type GetSettingInterfaces = () => Promise<{ name: string }[]>;
