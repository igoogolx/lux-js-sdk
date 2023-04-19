export type RuntimeDetail = {
  directedInterfaceName: string;
  tunInterfaceName: string;
  localDns: string[];
  remoteDns: string[];
};

export type GetRuntimeDetail = () => Promise<RuntimeDetail>;

export type RuntimeOS = {
  os: string;
};

export type GetRuntimeOS = () => Promise<RuntimeOS>;
