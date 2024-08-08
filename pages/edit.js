import { useState } from 'react';

export default function EditImage() {
    const [imageUrl, setImageUrl] = useState('');

    const handleImageLoad = (e) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = e.target.width;
        canvas.height = e.target.height;
        ctx.drawImage(e.target, 0, 0);
        // Add brush functionality here
    };

    return (
        <div>
            <h1>Edit Image</h1>
            <input type="file" onChange={(e) => setImageUrl(URL.createObjectURL(e.target.files[0]))} />
            {imageUrl && <img src={imageUrl} alt="To Edit" onLoad={handleImageLoad} />}
        </div>
    );
}