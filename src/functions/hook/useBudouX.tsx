import {HTMLProcessingParser, loadDefaultJapaneseParser} from 'budoux';

const parser: HTMLProcessingParser = loadDefaultJapaneseParser();

export const useBudouX = () => {
    const parse = (text: string) => {
        return parser.parse(text).map((s: string) => (
            <span
                key={s}
                className='inline-block'>
                {s}
            </span>
        ));
    };
    return {
        parse,
    };
};
