import Image from "next/image";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navBrand">
        <div className="navLogoMark">
          {/* <span>ABI</span> */}
          <Image src="/image.png" width={120} height={100} alt="logo"/>
        </div>
        {/* <div className="navTitle">
          <small>Official Member Profile</small>
          The Association of British Investigators
        </div> */}
      </div>
    </nav>
  )
}
