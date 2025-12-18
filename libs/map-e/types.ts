// MAP-E 計算関連の型
export interface PortRange {
  start: number;
  end: number;
}

export interface MapEResult {
  provider: {
    id: string;
    name: string;
  };
  ipv6Address: string;
  ipv4Address: string;
  ceAddress: string;
  brAddresses: string[];
  psid: number;
  portRanges: PortRange[];
}

export interface MapERule {
  ipv6Prefix: number;
  ipv4Prefix: [number, number];
}
