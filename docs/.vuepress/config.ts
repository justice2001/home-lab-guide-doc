import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'HomeLab指北',
  description: '这是一本HomeLab指南书，青年人的第一台服务器!',
  theme: defaultTheme({
    sidebar: {
        "/tutorial-app": [
            {
                text: "应用教程",
                children: [
                    "/tutorial-app/index.md",
                    "/tutorial-app/dns-server.md",
                    "/tutorial-app/minecraft-server.md"
                ]
            }
        ],
        "/self-hosted": [
            "/self-hosted",
            {
                text: "网络类",
                children: [
                    "/self-hosted/net/technitium-dns-server.md"
                ]
            }
        ]
    },
    navbar: [
        {
            text: '指南',
            link: '/',
        },
        {
            text: "硬件篇",
            link: "/tutorial-hardware"
        },
        {
            text: "网络篇",
            link: "/tutorial-net"
        },
        {
            text: '应用篇',
            link: '/tutorial-app',
        },
        {
            text: '私有服务汇总',
            link: '/self-hosted',
        }
    ]
  })
})