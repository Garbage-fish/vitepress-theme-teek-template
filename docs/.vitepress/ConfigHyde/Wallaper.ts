// 首页壁纸 - 动态获取本地图片服务器的图片

// 壁纸服务配置 - 统一配置服务地址，一处修改全局生效
export const WALLPAPER_SERVICE_CONFIG = {
    baseUrl: '/cover',
    // baseUrl: 'https://api.lyln114514.top/二次元',
    // baseUrl: 'https://imgapi.onedayxyy.cn',
    // apiEndpoint: '/api/images',
    get fullUrl() {
        return this.baseUrl
    }
}

// 备用图片列表（当本地服务不可用时使用）
const fallbackImages = [
    "/cover/bg01.webp",
    "/cover/bg02.webp",
    "/cover/bg03.webp",
    "/cover/bg04.webp",
    "/cover/bg05.webp",
    "/cover/bg06.webp",
    "/cover/bg07.webp",
    "/cover/bg08.webp",
    "/cover/bg09.webp",
    "/cover/bg10.webp",
    "/cover/bg11.webp",
    "/cover/bg12.webp",
    "/cover/bg13.webp",
    "/cover/bg14.webp",
    "/cover/bg15.webp",
    "/cover/bg16.webp",
    "/cover/bg17.webp",
    "/cover/bg18.webp",
    "/cover/bg19.webp",
    "/cover/bg20.webp",
    "/cover/ly01.jpg",
    "/cover/ly03.png",
    "/cover/ly04.jpg",
    "/cover/ly05.jpg",
    // "https://api.lyln114514.top/二次元",
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/2.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/3.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/4.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/5.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/6.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/7.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/8.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/9.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/10.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/11.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/12.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/13.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/14.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/15.webp", 
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/16.webp",
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/17.webp",
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/18.webp",
    // "https://img.onedayxyy.cn/images/Teek/TeekBg/19.webp",
];
// 动态获取图片列表的函数
async function fetchDynamicWallpapers(): Promise<string[]> {
    try {
        // 使用统一配置的图片服务API
        const response = await fetch(WALLPAPER_SERVICE_CONFIG.fullUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        const images = data.images || [];

        // 将相对路径转换为完整的服务器URL
        const wallpapers = images.map((imagePath: string) => `${WALLPAPER_SERVICE_CONFIG.baseUrl}${imagePath}`);

        // 如果获取到图片，返回动态图片列表，否则返回备用图片
        return wallpapers.length > 0 ? wallpapers : wallpapers;

    } catch (error) {
        console.warn('无法获取动态壁纸，使用备用图片:', error);
        return fallbackImages;
    }
}

// 创建一个Promise来获取壁纸
let wallpaperPromise: Promise<string[]> | null = null;

// 获取壁纸的函数
function getWallpapers(): Promise<string[]> {
    if (!wallpaperPromise) {
        wallpaperPromise = fetchDynamicWallpapers();
    }
    return wallpaperPromise;
}

// 导出的Wallpaper数组 - 在服务端渲染时使用备用图片，客户端动态加载
export const Wallpaper: string[] = fallbackImages;

// 导出动态获取函数供主题使用
export { getWallpapers, fetchDynamicWallpapers };
