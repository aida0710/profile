import { type NextRequest, NextResponse } from 'next/server';

import { calculateMapE } from '@/libs/map-e/calculator';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ipv6pd = searchParams.get('ipv6-pd');

  if (!ipv6pd) {
    return NextResponse.json(
      {
        error: 'ipv6-pd parameter is required',
        usage: '/api/tools/map-e?ipv6-pd=240b:10:xxxx:xx00::/56',
      },
      { status: 400 },
    );
  }

  const result = calculateMapE(ipv6pd);

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({
    success: true,
    input: ipv6pd,
    provider: result.provider,
    result: {
      ipv6Address: result.ipv6Address,
      ipv4Address: result.ipv4Address,
      ceAddress: result.ceAddress,
      brAddresses: result.brAddresses,
      psid: result.psid,
      portRanges: result.portRanges,
      portCount: result.portRanges.length * 16,
    },
  });
}
