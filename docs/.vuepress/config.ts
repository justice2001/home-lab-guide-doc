import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './sidebar/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'HomeLab Guide',
  description: '这是一本HomeLab指南书，青年人的第一台服务器指南书',
  theme: defaultTheme({
    sidebar: sidebar,
    navbar: [
        {
            text: '首页',
            link: '/',
        },
        {
            text: '总览',
            link: '/guide',
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
        },
        {
            text: "开源与作者",
            children: [
                {
                    text: '开源地址',
                    children: [
                        {
                            text: "Github",
                            link: "https://github.com/justice2001/home-lab-guide-doc"
                        },
                        {
                            text: "Gitee",
                            link: "https://gitee.com/zhengyi59/home-lab-guide-doc"
                        }
                    ],
                },
                {
                    text: "关于项目",
                    link: "/about"
                },
                {
                    text: "其他站点",
                    children: [
                        {
                            text: "主页",
                            link: "http://www.mczhengyi.top/"
                        },
                        {
                            text: "博客",
                            link: "https://blog.mczhengyi.top"
                        }
                    ]
                }
            ]
        }
    ]
  })
})