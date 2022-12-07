export type SettingRes = {
  defaultInterface: string;
  trueProxyServer: string;
  localServer: {
    http: { enabled: boolean; port: number };
  };
};

export type GetSetting = () => Promise<SettingRes>;

export type SetSetting = (data: SettingRes) => Promise<void>;
