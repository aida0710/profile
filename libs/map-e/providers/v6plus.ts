import { createRule, type MapEProvider } from './types';

/**
 * v6プラス（JPNE）のMAP-E設定
 */
export const v6plusProvider: MapEProvider = {
  id: 'v6plus',
  name: 'v6プラス',
  description: 'JPNE提供のMAP-Eサービス（So-net, GMO等）',
  brAddresses: ['2404:9200:225:100::64'],

  // MAP-Eパラメータ
  psidOffset: 4, // a bits: ポート0-4095を除外
  psidLength: 8, // k bits: PSID長（共有比率256）
  portSetSize: 16, // 2^m: 各セット16ポート
  portSetsCount: 15, // 使用可能セット数

  // ルールテーブル
  rules: new Map([
    // 240b:0010::/32 → 106.72.x.x, 106.73.x.x
    createRule('240b:0010', '106.72'),
    createRule('240b:0011', '106.73'),

    // 240b:0012::/32 → 14.8.x.x ~ 14.13.x.x
    createRule('240b:0012', '14.8'),
    createRule('240b:0013', '14.9'),
    createRule('240b:0250', '14.10'),
    createRule('240b:0251', '14.11'),
    createRule('240b:0252', '14.12'),
    createRule('240b:0253', '14.13'),

    // 2404:7a80::/32 ~ → 125.192.x.x ~ 125.207.x.x
    createRule('2404:7a80', '125.196'),
    createRule('2404:7a81', '125.197'),
    createRule('2404:7a82', '125.198'),
    createRule('2404:7a83', '125.199'),
    createRule('2404:7a84', '125.200'),
    createRule('2404:7a85', '125.201'),
    createRule('2404:7a86', '125.202'),
    createRule('2404:7a87', '125.203'),
    createRule('2404:7a88', '125.204'),
    createRule('2404:7a89', '125.205'),
    createRule('2404:7a8a', '125.206'),
    createRule('2404:7a8b', '125.207'),
    createRule('2404:7a90', '125.192'),
    createRule('2404:7a91', '125.193'),
    createRule('2404:7a92', '125.194'),
    createRule('2404:7a93', '125.195'),

    // 2404:0500::/32 ~ → 153.x.x.x, 219.x.x.x
    createRule('2404:0500', '153.240'),
    createRule('2404:0501', '153.241'),
    createRule('2404:0502', '153.242'),
    createRule('2404:0503', '153.243'),
    createRule('2404:0504', '153.244'),
    createRule('2404:0505', '153.245'),
    createRule('2404:0506', '153.246'),
    createRule('2404:0507', '153.247'),
    createRule('2404:0508', '153.248'),
    createRule('2404:0509', '153.249'),
    createRule('2404:050a', '153.250'),
    createRule('2404:050b', '153.251'),
    createRule('2404:050c', '153.252'),
    createRule('2404:050d', '153.253'),
    createRule('2404:050e', '153.254'),
    createRule('2404:050f', '153.255'),
    createRule('2404:0510', '153.128'),
    createRule('2404:0511', '153.129'),
    createRule('2404:0512', '153.130'),
    createRule('2404:0513', '153.131'),
    createRule('2404:0514', '153.132'),
    createRule('2404:0515', '153.133'),
    createRule('2404:0516', '153.134'),
    createRule('2404:0517', '153.135'),
    createRule('2404:0518', '153.136'),
    createRule('2404:0519', '153.137'),
    createRule('2404:051a', '153.138'),
    createRule('2404:051b', '153.139'),
    createRule('2404:051c', '153.140'),
    createRule('2404:051d', '153.141'),
    createRule('2404:051e', '153.142'),
    createRule('2404:051f', '153.143'),
    createRule('2404:0520', '219.96'),
    createRule('2404:0521', '219.97'),
    createRule('2404:0522', '219.98'),
    createRule('2404:0523', '219.99'),
    createRule('2404:0524', '219.100'),
    createRule('2404:0525', '219.101'),
    createRule('2404:0526', '219.102'),
    createRule('2404:0527', '219.103'),
    createRule('2404:0528', '219.104'),
    createRule('2404:0529', '219.105'),
    createRule('2404:052a', '219.106'),
    createRule('2404:052b', '219.107'),
    createRule('2404:052c', '219.108'),
    createRule('2404:052d', '219.109'),
    createRule('2404:052e', '219.110'),
    createRule('2404:052f', '219.111'),
  ]),
};
