import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-[15rem] bg-gray-60 py-5 text-center">
      <div className="container mx-auto">
        <p className="text-gray-600">© {new Date().getFullYear()} Golden Stitch Nation. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <Link href="/privacypolicy">
            <a className="text-gray-600 hover:text-blue-600">Privacy Policy</a>
          </Link>
          <Link href="/terms">
            <a className="text-gray-600 hover:text-blue-600">Terms of Service</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
