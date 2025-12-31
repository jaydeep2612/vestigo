import Image from 'next/image';
import Link from 'next/link';
import Nav from './nav'
const links=[{name:'Home'},{name:'Company'},{name:'Solution'},{name:'Industries'},{name:'Blogs'},{name:'Career'},{name:'Contact'},];
export default function Header(){
    return(
    //   <header className='w-full'>
    //     <div className="px-4 md:px-12 py-4 flex justify-between items-center bg-white">
    //         <div className='flex-shrink-0'>
    //             <Link href="/">
    //             <Image src="/globe.svg"
    //             alt='Home'
    //             width={50}
    //             height={50}
    //             className='w-6 h-6'>

    //             </Image>
    //             </Link>
    //         </div>
    //         <nav className='hidden md:flex gap-6 font-semibold text-md'>
    //             <ul className='list-none md:flex hidden uppercase items-center gap-4 '>
    //                 <li className='border-b-2 border-transparent hover:border-black py-1'><Link href="/">Home</Link></li>
    //                 <li><Link href="/company">Company</Link></li>
    //                 <li><Link href="/solution">Solutions</Link></li>
    //                 <li><Link href="/industries">Industries</Link></li>
    //                 <li><Link href="/blogs">Blogs</Link></li>
    //                 <li><Link href="/career">Career</Link></li>
    //                 <li><Link href="/contact">Contact</Link></li>
    //             </ul>

    //         </nav>
    //     </div>
    //     </header>
    <Nav/>
    );
}