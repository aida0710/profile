export interface SkillCategory {
    key: string;
    title: string;
    contents: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        key: 'programming-languages',
        title: 'Programming Languages',
        contents: ['PHP 8.*', 'Python 3.*', 'Excel VBA', 'HTML 5', 'CSS 3', 'TypeScript', 'JavaScript', 'Rust', 'C#', 'Kotlin'],
    },
    {
        key: 'web-related',
        title: 'Web Related',
        contents: [
            'React',
            'Next.js',
            'NextUI',
            'ChakraUI',
            'TailwindCSS',
            'Shadcn/ui',
            'Electron.js',
            'Express.js',
            'React Native',
            'Tree.js',
            'D3.js(force graphのみ)',
            'Clerk Auth',
            'firebase Authentication',
            'Resend (Mail)',
            'Smarty v3/v5',
            'Apache(webサーバー構築に使用)',
        ],
    },
    {
        key: 'databases',
        title: 'Databases',
        contents: ['MySQL 5.6/8', 'Postgresql v16', 'Timescale db v2', 'sqlite', 'ProxySql', 'MinIO'],
    },
    {
        key: 'operating-systems',
        title: 'Operating Systems',
        contents: ['Ubuntu Server 20.04/22.04/24.04 LTS', 'Debian 12', 'CentOS', 'Proxmox'],
    },
    {
        key: 'infrastructure',
        title: 'Infrastructure',
        contents: ['Nginx', 'Docker', 'Keepalived'],
    },
    {
        key: 'others',
        title: 'Others',
        contents: [
            'Node.js 18~21',
            'PocketMine-MP v3/v4/v5',
            'Git',
            'Unity(コントローラー層の実装のみ)',
            'Packet Capture(pcap, pnet)',
            'Linux Kernel v6のパケット周り',
        ],
    },
];
