/**
 * 定义诗词原文和翻译的结构
 */
export interface PoemOrigin {
  title: string;       // 诗词标题
  dynasty: string;     // 朝代
  author: string;      // 作者
  content: string[];   // 诗词原文内容，每句作为数组的一个元素
  translate: string[]; // 诗词翻译内容，每句翻译作为数组的一个元素
}

/**
 * 定义诗词数据的整体结构
 */
export interface PoemData {
  id: string;              // 诗词唯一ID
  content: string;         // 诗词摘录内容或当前显示的内容
  popularity: number;      // 诗词热度或流行度
  origin: PoemOrigin;      // 诗词原文和翻译的详细信息
  matchTags: string[];     // 匹配的标签列表
  recommendedReason: string; // 推荐理由
  // cacheAt 的值 "2025-06-17T19:18:13.127980439" 包含纳秒级精度
  // 在前端通常只处理到毫秒级，建议将其视为字符串或 Date 对象
  cacheAt: string;         // 缓存时间戳（通常为 ISO 8601 格式的日期字符串）
}

/**
 * 定义后端 API 响应的整体结构
 */
export interface PoemApiResponse {
  status: string;      // 响应状态，例如 "success"
  data: PoemData;      // 实际的诗词数据内容
  token: string;       // 认证令牌或其他标识符
  ipAddress: string;   // 客户端 IP 地址
  warning: string | null; // 警告信息，可能是字符串或 null
}


export const getTitle = new Promise<string>((resolve, reject) => {
  (async() => {
    const jinrishici = await import("jinrishici");

    // 获取每日一句诗
    jinrishici.load((result: PoemApiResponse) => {
      if (result.data.content.length > 0) {
        resolve(result.data.content);
      } else {
        reject(new Error("获取每日一句诗失败"));
      }
    });
  })()
});
