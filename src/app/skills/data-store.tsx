//statusMessage
import React, {ReactNode} from 'react';
import {BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoPython, BiLogoReact, BiLogoTypescript} from 'react-icons/bi';
import {RiFileExcel2Fill} from 'react-icons/ri';
import {
    SiAmazondocumentdb,
    SiAmazonec2,
    SiAmazons3,
    SiApache,
    SiChakraui,
    SiCsharp,
    SiElectron,
    SiKotlin,
    SiNextdotjs,
    SiNextui,
    SiNginx,
    SiPhp,
    SiRadixui,
    SiRust,
    SiSqlite,
    SiTailwindcss,
    SiUnity,
} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {FaGitAlt, FaNodeJs, FaUbuntu} from 'react-icons/fa';
import {LibraryIcon} from 'lucide-react';

export interface SkillProps {
    title: string;
    icon: ReactNode;
}

//skills
export const programmingLanguages: SkillProps[] = [
    {
        title: 'PHP 8.*',
        icon: (
            <SiPhp
                size={26}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Python 3.*',
        icon: (
            <BiLogoPython
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Excel VBA',
        icon: (
            <RiFileExcel2Fill
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'HTML 5',
        icon: (
            <BiLogoHtml5
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'CSS 3',
        icon: (
            <BiLogoCss3
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'TypeScript',
        icon: (
            <BiLogoTypescript
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'JavaScript',
        icon: (
            <BiLogoJavascript
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Rust(ﾁｮｯﾄﾀﾞｹ)',
        icon: (
            <SiRust
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'C#',
        icon: (
            <SiCsharp
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Kotlin',
        icon: (
            <SiKotlin
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const webRelated: SkillProps[] = [
    {
        title: 'React',
        icon: (
            <BiLogoReact
                size={22}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Next.js',
        icon: (
            <SiNextdotjs
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'NextUI',
        icon: (
            <SiNextui
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'ChakraUI',
        icon: (
            <SiChakraui
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'TailwindCSS',
        icon: (
            <SiTailwindcss
                size={20}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Shadcn/ui',
        icon: (
            <SiRadixui
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Electron js',
        icon: (
            <SiElectron
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'React Native',
        icon: (
            <BiLogoReact
                size={22}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Tree.js',
        icon: (
            <LibraryIcon
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'D3.js(force graphのみ)',
        icon: (
            <LibraryIcon
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Clerk Auth',
        icon: (
            <LibraryIcon
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Resend (Mail)',
        icon: (
            <LibraryIcon
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const databases: SkillProps[] = [
    {
        title: 'MySQL 8',
        icon: (
            <GrMysql
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'SQLite',
        icon: (
            <SiSqlite
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const amazonWebServices: SkillProps[] = [
    {
        title: 'EC2',
        icon: (
            <SiAmazonec2
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'RDS',
        icon: (
            <SiAmazondocumentdb
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'S3',
        icon: (
            <SiAmazons3
                size={19}
                className='mr-2'
            />
        ),
    },
];

export const others: SkillProps[] = [
    {
        title: 'Git',
        icon: (
            <FaGitAlt
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Unity(コントローラー層の実装のみ)',
        icon: (
            <SiUnity
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Nginx(web/リバースプロキシサーバー構築に使用)',
        icon: (
            <SiNginx
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Apache(webサーバー構築に使用)',
        icon: (
            <SiApache
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Ubuntu 20.04',
        icon: (
            <FaUbuntu
                size={19}
                className='mr-2'
            />
        ),
    },
    {
        title: 'Node.js 18~21',
        icon: (
            <FaNodeJs
                size={19}
                className='mr-2'
            />
        ),
    },
];
