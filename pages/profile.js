import { useSession, signOut } from 'next-auth/react';

export default function Profile() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>User Profile</h1>
            {session ? (
                <>
                    <p>Name: {session.user.name}</p>
                    <p>Email: {session.user.email}</p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    );
}