// nav导航栏配置
import { TeekIcon, VdoingIcon, SSLIcon, BlogIcon } from "./icon/NavIcon";
export const Nav = [
    { text: "🏡首页", link: "/" },
    // 算法
    {
        text: '⚙️算法',
        items: [
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>全部</span>
            </div>
            `,
                link: '/categories?pageNum=1&category=算法',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>数据结构</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=数据结构',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>数论</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=数论',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>图论</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=图论',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>字符串</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=字符串',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>DP 优化算法</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=DP%20优化算法',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>其他</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=杂类算法',
                target: '_self',
                rel: 'external',
            },
        ],
    },

    // 刷题总结
    {
        text: '📝刷题总结',
        items: [
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>全部</span>
            </div>
            `,
                link: '/categories?pageNum=1&category=刷题总结',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>DP</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=DP',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>计数</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=计数',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>数据结构题目</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=数据结构题目',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>图相关题目</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=图相关题目',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>字符串题目</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=字符串题目',
                target: '_self',
                rel: 'external',
            },
        ],
    },

    // // 生活
    // {
    //     text: '🏓生活',
    //     items: [
    //         {
    //             // 分组标题1
    //             text: '干货',
    //             items: [
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/相册.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>相册</span>
    //             </div>
    //             `,
    //                     link: '/yule/photo',
    //                 },
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/电影.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>电影</span>
    //             </div>
    //             `,
    //                     link: '/yule/movie',
    //                 },
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/音乐.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>音乐</span>
    //             </div>
    //             `,
    //                     link: '/yule/music',
    //                 },
    //             ],
    //         },
    //         {
    //             // 分组标题2
    //             text: '小屋',
    //             items: [
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/精神小屋.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>精神小屋</span>
    //             </div>
    //             `,
    //                     link: '/love/inner',
    //                 },
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/时间管理.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>时间管理</span>
    //             </div>
    //             `,
    //                     link: '/love/time-plan',
    //                 },
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/文案.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>情感文案</span>
    //             </div>
    //             `,
    //                     link: '/love/wenan',
    //                 },
    //                 // { text: "💖情侣空间", link: "https://fxj.onedayxyy.cn/" },
    //             ],
    //         },
    //         // 兴趣
    //         {
    //             text: '兴趣',
    //             items: [
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/旅行.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>旅行</span>
    //             </div>
    //             `,
    //                     link: '/xingqu/travel',
    //                 },
    //                 {
    //                     text: `
    //             <div style="display: flex; align-items: center; gap: 4px;">
    //               <img src="/img/nav/读书.svg" alt="" style="width: 16px; height: 16px;">
    //               <span>读书</span>
    //             </div>
    //             `,
    //                     link: '/xingqu/reading',
    //                 },
    //             ],
    //         },

    //     ],
    // },


    {
        text: '🏓生活',
        items: [
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>游记</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=游记',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>干货</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=干货',
                target: '_self',
                rel: 'external',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>娱乐</span>
            </div>
            `,
                link: '/tags?pageNum=1&tag=娱乐',
                target: '_self',
                rel: 'external',
            },
        ],
    },


    // 索引
    {
        text: '👏索引',
        items: [
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/归档.svg" alt="" style="width: 16px; height: 16px;">
              <span>归档页</span>
            </div>
            `,
                link: '/archives',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/清单.svg" alt="" style="width: 16px; height: 16px;">
              <span>清单页</span>
            </div>
            `,
                link: '/articleOverview',
            },
            {
                text: `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/img/nav/登录.svg" alt="" style="width: 16px; height: 16px;">
              <span>登录页</span>
            </div>
            `,
                link: '/login',
            },
        ],
    },
]
