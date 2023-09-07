import { SidebarConfig } from "vuepress";

export const sidebar: SidebarConfig = {
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
    ],
    "/tutorial-net": [
        "/tutorial-net",
        "/tutorial-net/wireguard.md"
    ],
    "/guide": [
        "/guide",
        "/guide/why-use-nas.md"
    ]
}