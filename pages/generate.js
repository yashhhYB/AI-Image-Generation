import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Generate() {
    const { data: session } = useSession();
    const [imageUrl, setImageUrl] = useState('');

    const generateImage = async () => {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: session.user.id }),
        });
        const data = await response.json();
        if (response.ok) {
            setImageUrl(data.imageUrl);
        } else {
            alert(data.message);
        }
    };

    return (
        <div>
            <h1>Generate Image</h1>
            <button onClick={generateImage}>Generate</button>
            {imageUrl && <img src={imageUrl} alt="Generated" />}
        </div>
    );
}