import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    time: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({
        time: Date.now().toString()
    })
}
