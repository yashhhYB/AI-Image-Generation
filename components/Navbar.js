import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/generate">Generate</Link>
            <Link href="/profile">Profile</Link>
            {session ? (
                <button onClick={() => signOut()}>Sign Out</button>
            ) : (
                <button onClick={() => signIn('google')}>Sign In with Google</button>
            )}
        </nav>
    );
}