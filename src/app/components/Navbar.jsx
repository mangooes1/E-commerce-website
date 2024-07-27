// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    // <nav className="bg-white p-4 shadow-md ">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="flex items-center space-x-2">
    //       {/* Logo */}
    //       <div className="h-8 w-8 relative">
    //         {/* <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" /> */}
    //       </div>
    //       {/* Title */}
    //       <div className="text-black text-xl font-bold">
    //         <Link href="/" className="hover:text-rose-950">My Next.js App</Link>
    //       </div>
    //     </div>
    //     <div className="space-x-4">
    //      
    //       <Link href="/about" className="text-black hover:underline">About</Link>
    //       <Link href="/services" className="text-black hover:underline">Services</Link>
    //       <Link href="/blog" className="text-black hover:underline">Blog</Link>
    //       <Link href="/other" className="text-black hover:underline">Other</Link>
    //     </div>
    //   </div>
    //  </nav>

    // *******************************************************************8
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DRI by NISHITA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
          <Link href="/" className="nav-link ">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="/about" className="nav-link">About</Link>
          {/* <a class="nav-link" href="#">Shop Products</a> */}
        </li>
        <li class="nav-item">
        <Link href="/about" className="nav-link">About</Link>

          {/* <a class="nav-link" href="#">About Us</a> */}
        </li>
       
        
        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
