interface Item {
  address: string;
  domains: string[];
}

export interface Dns {
  primary: Item;
  secondary: Item;
}
