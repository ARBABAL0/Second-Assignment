import Link from "next/link";

export default function Nav() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex titlefont font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img
                        src="https://cdn.vectorstock.com/i/preview-1x/97/01/gsn-letter-logo-design-simple-and-modern-vector-48509701.jpg"
                        alt="Golden Stitch Nation logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="ml-3 text-xl">Golden Stitch Nation</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 border flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-blue-900">Home</Link>
                    <Link href="/aboutus" className="mr-5 hover:text-blue-900">About Us</Link>
                    <Link href="/contactus" className="mr-5 hover:text-blue-900">Contact Us</Link>
                    <Link href="/privacypolicy" className="mr-5 hover:text-blue-900">Privacy Policy</Link>
                </nav>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <button className="inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base" aria-label="Sign In">
                        Sign In
                    </button>
                    <button className="inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base" aria-label="Sign Up">
                        Sign Up
                    </button>
                </div>
            </div>
        </header>
    );
}
