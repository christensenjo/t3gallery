import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link';
import { SimpleUploadButton } from './simple-upload-button';

export function TopNav() {
    return (
        <nav className="flex justify-between items-center p-4 w-full border-b">
            <h1 className="text-4xl">
                <Link href="/">Gallery</Link>
            </h1>
            <div className="mr-4 flex gap-6 items-center">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <SimpleUploadButton />
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
);
}