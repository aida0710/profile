'use client';

import { Button } from '@heroui/button';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { Divider } from '@heroui/divider';
import { Input } from '@heroui/input';
import { Calculator, Check, ChevronDown, ChevronUp, Copy, Terminal } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';

import { calculateMapE } from '@/libs/map-e/calculator';
import { generateMapECommands } from '@/libs/map-e/script-generator';
import type { MapEResult } from '@/libs/map-e/types';

export function MapECalculator() {
  const [ipv6Input, setIpv6Input] = useState('');
  const [result, setResult] = useState<MapEResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showAllPorts, setShowAllPorts] = useState(false);
  const [showScript, setShowScript] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // スクリプト生成用オプション
  const [wandev, setWandev] = useState('enp1s0f0');
  const [tundev, setTundev] = useState('map-e');

  const handleCalculate = useCallback(() => {
    if (!ipv6Input.trim()) {
      setError('IPv6プレフィックスを入力してください');
      setResult(null);
      return;
    }

    const calcResult = calculateMapE(ipv6Input);

    if ('error' in calcResult) {
      setError(calcResult.error);
      setResult(null);
    } else {
      setResult(calcResult);
      setError(null);
    }
  }, [ipv6Input]);

  const handleCopy = useCallback(async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // コピー失敗時は何もしない
    }
  }, []);

  const formatPortRanges = (ranges: { start: number; end: number }[]) => {
    return ranges.map((r) => `${r.start}-${r.end}`);
  };

  const generatedCommands = useMemo(() => {
    if (!result) return '';
    return generateMapECommands(result, { wandev, tundev });
  }, [result, wandev, tundev]);

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <Button
      isIconOnly
      size="sm"
      variant="light"
      onPress={() => handleCopy(text, field)}
      aria-label={`${field}をコピー`}
    >
      {copiedField === field ? <Check size={16} className="text-success" /> : <Copy size={16} />}
    </Button>
  );

  return (
    <div className="mx-auto max-w-3xl px-4">
      <Card className="mb-6">
        <CardHeader className="flex gap-3">
          <Calculator size={24} />
          <div className="flex flex-col">
            <p className="text-lg font-semibold">IPv6プレフィックスを入力</p>
            <p className="text-small text-default-500">v6プラス（MAP-E）の計算を行います</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="gap-4">
          <Input
            label="IPv6プレフィックス"
            placeholder="例: 2404:0500:1234:5600::/56"
            value={ipv6Input}
            onChange={(e) => setIpv6Input(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCalculate();
            }}
            description="DHCPv6-PDで取得したプレフィックスを入力してください"
            isInvalid={!!error}
            errorMessage={error}
          />
          <Button color="primary" onPress={handleCalculate} startContent={<Calculator size={18} />}>
            計算
          </Button>
        </CardBody>
      </Card>

      {result && (
        <div className="space-y-4">
          <Card>
            <CardHeader className="flex items-center justify-between">
              <p className="text-lg font-semibold">計算結果</p>
              <Chip size="sm" variant="flat" color="primary">
                {result.provider.name}
              </Chip>
            </CardHeader>
            <Divider />
            <CardBody className="gap-4">
              <div className="rounded-lg bg-default-100 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-default-500">IPv6アドレス</span>
                  <CopyButton text={result.ipv6Address} field="ipv6" />
                </div>
                <p className="font-mono text-lg font-semibold">{result.ipv6Address}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-default-100 p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-default-500">IPv4アドレス</span>
                    <CopyButton text={result.ipv4Address} field="ipv4" />
                  </div>
                  <p className="font-mono text-lg font-semibold">{result.ipv4Address}</p>
                </div>

                <div className="rounded-lg bg-default-100 p-4">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm text-default-500">PSID</span>
                    <CopyButton text={result.psid.toString()} field="psid" />
                  </div>
                  <p className="font-mono text-lg font-semibold">{result.psid}</p>
                </div>
              </div>

              <div className="rounded-lg bg-default-100 p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm text-default-500">CEアドレス</span>
                  <CopyButton text={result.ceAddress} field="ce" />
                </div>
                <p className="break-all font-mono text-base font-semibold">{result.ceAddress}</p>
              </div>

              <div className="rounded-lg bg-default-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-default-500">BRアドレス</span>
                  <CopyButton text={result.brAddresses.join('\n')} field="br" />
                </div>
                <div className="space-y-1">
                  {result.brAddresses.map((br) => (
                    <p key={br} className="font-mono text-sm">
                      {br}
                    </p>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between">
              <p className="text-lg font-semibold">使用可能ポート（{result.portRanges.length * 16}個）</p>
              <Button
                size="sm"
                variant="light"
                onPress={() => setShowAllPorts(!showAllPorts)}
                endContent={showAllPorts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              >
                {showAllPorts ? '折りたたむ' : '全て表示'}
              </Button>
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="flex flex-wrap gap-2">
                {formatPortRanges(showAllPorts ? result.portRanges : result.portRanges.slice(0, 5)).map((range) => (
                  <Chip key={range} variant="flat" size="sm">
                    {range}
                  </Chip>
                ))}
                {!showAllPorts && result.portRanges.length > 5 && (
                  <Chip variant="flat" size="sm" color="default">
                    +{result.portRanges.length - 5} more
                  </Chip>
                )}
              </div>
              <div className="mt-4">
                <Button
                  size="sm"
                  variant="bordered"
                  onPress={() => handleCopy(formatPortRanges(result.portRanges).join(' '), 'ports')}
                  startContent={copiedField === 'ports' ? <Check size={14} /> : <Copy size={14} />}
                >
                  {copiedField === 'ports' ? 'コピーしました' : 'ポート一覧をコピー'}
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={20} />
                <p className="text-lg font-semibold">セットアップコマンド</p>
              </div>
              <Button
                size="sm"
                variant="light"
                onPress={() => setShowScript(!showScript)}
                endContent={showScript ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              >
                {showScript ? '折りたたむ' : '表示'}
              </Button>
            </CardHeader>
            {showScript && (
              <>
                <Divider />
                <CardBody className="gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      label="WANデバイス名"
                      placeholder="enp1s0f0"
                      value={wandev}
                      onChange={(e) => setWandev(e.target.value)}
                      size="sm"
                    />
                    <Input
                      label="トンネルデバイス名"
                      placeholder="map-e"
                      value={tundev}
                      onChange={(e) => setTundev(e.target.value)}
                      size="sm"
                    />
                  </div>
                  <div className="relative">
                    <pre className="max-h-96 overflow-auto rounded-lg bg-default-100 p-4 font-mono text-xs">
                      {generatedCommands}
                    </pre>
                    <Button
                      size="sm"
                      variant="solid"
                      color="primary"
                      className="absolute right-2 top-2"
                      onPress={() => handleCopy(generatedCommands, 'commands')}
                      startContent={copiedField === 'commands' ? <Check size={14} /> : <Copy size={14} />}
                    >
                      {copiedField === 'commands' ? 'コピーしました' : 'コマンドをコピー'}
                    </Button>
                  </div>
                  <p className="text-xs text-default-500">
                    root権限で実行してください。実行前に内容を確認し、環境に合わせて調整してください。
                  </p>
                </CardBody>
              </>
            )}
          </Card>

          <Card>
            <CardHeader>
              <p className="text-lg font-semibold">注意事項</p>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="list-inside list-disc space-y-1 text-sm text-default-600">
                <li>この計算結果は参考値です。実際の設定は契約プロバイダーの情報をご確認ください。</li>
                <li>
                  v6プラスの仕様は公開されていないため、一部のプレフィックスでは正しく計算できない場合があります。
                </li>
                <li>ポート番号0-4095は使用できません（システム予約）。</li>
              </ul>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
}
