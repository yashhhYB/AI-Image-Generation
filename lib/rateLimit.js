import { kv } from '@vercel/kv';

export const rateLimit = async (userId) => {
    const currentTime = Date.now();
    const user = await kv.get(userId) || { count: 0, lastRequest: 0 };

    if (currentTime - user.lastRequest < 3600000) { // 1 hour
        if (user.count >= 3) {
            throw new Error('Rate limit exceeded');
        }
        user.count++;
    } else {
        user.count = 1; // Reset count after an hour
    }

    user.lastRequest = currentTime;
    await kv.set(userId, user);
    return user.count;
};