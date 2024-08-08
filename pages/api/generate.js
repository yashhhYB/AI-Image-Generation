import { rateLimit } from '../../lib/rateLimit';
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Pre-downloaded images

export default async function handler(req, res) {
    const { userId } = req.body;

    try {
        await rateLimit(userId);
        const randomImage = images[Math.floor(Math.random() * images.length)];
        res.status(200).json({ imageUrl: randomImage });
    } catch (error) {
        res.status(429).json({ message: error.message });
    }
}