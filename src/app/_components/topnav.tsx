import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link';

export function TopNav() {
    return (
        <nav className="flex justify-between items-center p-4 w-full border-b">
            <h1 className="text-4xl">
                <Link href="/">Gallery</Link>
            </h1>
            <div className="mr-4">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
);
}