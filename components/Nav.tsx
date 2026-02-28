import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      
        
         <div className="rounded-2xl flex items-center justify-center bg-white shadow-md">
        <Image
          src="/image.png"
          alt="Norwyn Solution LTD logo"
          width={180}
          height={180}
          style={{ objectFit: "contain" }} // Next.js 13+ uses style prop instead of objectFit
        />
      </div>

        {/* <div className="navTitle">
          <small>Official Member Profile</small>
          The Association of British Investigators
        </div> */}
    
    </nav>
  )
}
