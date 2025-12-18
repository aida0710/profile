import type { MapEResult } from './types';

export interface ScriptOptions {
  wandev: string;
  tundev: string;
}

/**
 * MAP-Eセットアップコマンド一覧を生成する
 */
export function generateMapECommands(result: MapEResult, options: ScriptOptions): string {
  const { ipv4Address, ceAddress, brAddresses, portRanges } = result;
  const { wandev, tundev } = options;
  const br = brAddresses[0];

  // CEアドレスからプレフィックス部分を抽出（最初の4グループ）
  const ceParts = ceAddress.split(':');
  const prefix = `${ceParts[0]}:${ceParts[1]}:${ceParts[2]}:${ceParts[3]}`;

  // SNATルールを生成
  const snatRules: string[] = [];
  for (let i = 0; i < portRanges.length; i++) {
    const { start, end } = portRanges[i];
    const every = portRanges.length - i;

    snatRules.push(
      `sudo iptables -t nat -A POSTROUTING -o ${tundev} -p tcp -m statistic --mode nth --every ${every} --packet 0 -j SNAT --to-source ${ipv4Address}:${start}-${end}`,
    );
    snatRules.push(
      `sudo iptables -t nat -A POSTROUTING -o ${tundev} -p udp -m statistic --mode nth --every ${every} --packet 0 -j SNAT --to-source ${ipv4Address}:${start}-${end}`,
    );
  }

  return `# === MAP-E セットアップコマンド ===
#
# 想定環境:
#   OS: Ubuntu 24.04
#   回線: フレッツ光クロス（10Gbps）
#   ISP: So-net v6プラス
#   接続: ONU直結（HGWなし）
#   WAN側NIC: ${wandev}

# 0. 事前準備（パッケージインストール）
sudo apt install -y wide-dhcpv6-client iptables

# 1. sysctl設定
sudo sysctl -w net.ipv6.conf.${wandev}.disable_ipv6=0
sudo sysctl -w net.ipv6.conf.${wandev}.accept_ra=2
sudo sysctl -w net.ipv4.ip_forward=1
sudo sysctl -w net.ipv6.conf.all.forwarding=1

# 2. DHCPv6でプレフィックス取得（すでに取得済みなら不要）
sudo systemctl restart wide-dhcpv6-client

# 3. IPv6アドレス設定
sudo ip -6 addr add ${prefix}::1/64 dev ${wandev}
sudo ip -6 addr add ${ceAddress}/64 dev ${wandev}

# 4. トンネル作成
sudo ip -6 tunnel del ${tundev}
sudo ip -6 tunnel add ${tundev} mode ip4ip6 remote ${br} local ${ceAddress} dev ${wandev} encaplimit none
sudo ip link set dev ${tundev} mtu 1460
sudo ip link set dev ${tundev} up
sudo ip addr add ${ipv4Address}/32 dev ${tundev}

# 5. ルーティング設定
sudo ip -4 route del default
sudo ip -4 route add default dev ${tundev}

# 6. iptables SNAT設定
sudo iptables -t nat -F
sudo iptables -t mangle -F

${snatRules.join('\n')}

sudo iptables -t nat -A POSTROUTING -o ${tundev} -p icmp -j SNAT --to-source ${ipv4Address}

# 7. TCP MSS Clamping
sudo iptables -t mangle -A POSTROUTING -o ${tundev} -p tcp --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu

# 8. rp_filter無効化
sudo sysctl -w net.ipv4.conf.all.rp_filter=0
sudo sysctl -w net.ipv4.conf.${tundev}.rp_filter=0
sudo sysctl -w net.ipv4.conf.default.rp_filter=0`;
}
