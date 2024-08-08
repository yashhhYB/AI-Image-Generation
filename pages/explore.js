import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Explore() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>Explore Images</h1>
            <Link href="/generate">Generate Image</Link>
            {session && <p>Welcome, {session.user.name}!</p>}
        </div>
    );
}