// components/Navbar.jsx
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <div className="h-8 w-8 relative">
            {/* <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" /> */}
          </div>
          {/* Title */}
          <div className="text-black text-xl font-bold">
            <Link href="/" className="hover:text-rose-950">Stitch&Glow</Link>
          </div>
        </div>
        <div className="space-x-4">
         
          <Link href="/features" className="text-black hover:underline">Store</Link>
          <a href="#social" className="text-black hover:underline">Social</a> 
          <Link href="/about" className="text-black hover:underline">About</Link>
          <Link href="/contact" className="text-black hover:underline">Contact</Link>
        </div>
      </div>
     </nav>

  )}
  
 

export default Navbar;
