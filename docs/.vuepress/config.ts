import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './sidebar/sidebar'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'HomeLab指北',
  description: '这是一本HomeLab指南书，青年人的第一台服务器!',
  theme: defaultTheme({
    sidebar: sidebar,
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