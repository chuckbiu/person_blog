// 腾讯云开发的一些API
import cloudbase from '@cloudbase/js-sdk';

import { env } from './constant';

export const app = cloudbase.init({ env });

export const auth = app.auth({ persistence: 'local' });

export const db = app.database();

export const _ = db.command;


// 建议创建一个函数来等待 SDK 准备就绪
let isSDKReadyPromise: Promise<void> | null = null;


export const ensureCloudBaseReady = (): Promise<void> => {
    if (isSDKReadyPromise) {
      return isSDKReadyPromise; // 如果已经在初始化，返回同一个 Promise
    }
  
    isSDKReadyPromise = new Promise(async (resolve, reject) => {
      try {
        // 检查登录状态
        // auth.hasLoginState() 可以用来判断当前是否有登录状态 (包括匿名登录)
        const loginState = await auth.getLoginState(); // 获取当前登录状态
        
        if (!loginState) { // 如果没有登录状态
          console.log("CloudBase SDK: 尝试匿名登录...");
          await auth.signInAnonymously(); // 执行匿名登录
          console.log("CloudBase SDK: 匿名登录成功。");
        } else {
          console.log("CloudBase SDK: 用户已登录，无需重复登录。", loginState);
        }
        resolve(); // SDK 准备就绪
      } catch (err) {
        console.error("CloudBase SDK 初始化或认证失败:", err);
        reject(err); // 拒绝 Promise，传递错误
      }
    });
    return isSDKReadyPromise;
  };




export const models = app.models;