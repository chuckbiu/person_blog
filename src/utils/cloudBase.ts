// 腾讯云开发的一些API
import cloudbase from '@cloudbase/js-sdk';

import { env } from './constant';

export const app = cloudbase.init({ env });

export const auth = app.auth({ persistence: 'local' });

export const db = app.database();

export const _ = db.command;

(async() => {
    await auth.signInAnonymously(); // 或者使用其他登录方式
})()
export const models = app.models;