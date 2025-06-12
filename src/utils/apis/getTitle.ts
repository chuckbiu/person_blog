const jinrishici = await import("jinrishici");

export const getTitle = new Promise((resolve, reject) => {
  // 获取每日一句诗
  jinrishici.load((result) => {
    if (result.data.content.length > 0) {
      resolve(result.data.content);
    } else {
      reject(new Error("获取每日一句诗失败"));
    }
  });
});
