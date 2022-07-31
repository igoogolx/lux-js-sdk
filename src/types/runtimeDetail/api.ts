export type RuntimeDetail = {
  directedInterfaceName: string;
  tunInterfaceName: string;
  primaryDns: string[];
  secondaryDns: string[];
};

export type GetRuntimeDetail = () => Promise<RuntimeDetail>;
