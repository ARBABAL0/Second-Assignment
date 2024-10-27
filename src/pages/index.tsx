import Link from "next/link";

export default function Home() {
  return (
    <div> 
      <h1>Lets Learn How To Different pages To Home Page </h1>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000"}> Home </Link>
    <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}> About Us </Link>
    <Link className="mr-5 hover:text-red-900" href={"http://localhost:3000/contactus"}> Contact Us </Link>
    <Link className="mr-5 hover:text-grey-900" href={"http://localhost:3000/privacypolicy"}> Privacy Policy </Link>

    </div>
  );

}

