import Link from "next/link"

export default function Post(){
    return (
       <>
         <div className="row mt-5">
            <div className="col-md-4">
                <p className="mt-2">January 29, 2023</p>
            </div>
       
            <div className="col-md-8">
                <h2><Link href="/projects" className="text-decoration-none fs-4 fw-bold text-dark">How to create a website with React.js?</Link></h2>
                <div>
                <ul className="nav category-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" href="/">React</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-secondary" href="/">Node.js</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-secondary"  href="/">Bootstrap</Link>
                    </li>
                </ul>
                <p className="fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="mt-5">
                    <Link href="/projects" className="text-decoration-none text-secondary">Read More →</Link>
                </div>
                </div>
            </div>
         </div>
         <hr/>
         <div className="row mt-5">
            <div className="col-md-4">
                <p className="mt-2">January 29, 2023</p>
            </div>
       
            <div className="col-md-8">
                <h2><Link href="/projects" className="text-decoration-none fs-4 fw-bold text-dark">How to create a website with React.js?</Link></h2>
                <div>
                <ul className="nav category-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" href="/">React</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-secondary" href="/">Node.js</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-secondary"  href="/">Bootstrap</Link>
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="mt-5">
                    <Link href="/projects" className="text-decoration-none text-secondary">Read More →</Link>
                </div>
                </div>
            </div>
          
         </div>
         <hr/>
         <div className="row mt-5">
            <div className="col-md-4">
                <p className="mt-2">January 29, 2023</p>
            </div>
       
            <div className="col-md-8">
                <h2><Link href="/projects" className="text-decoration-none fs-4 fw-bold text-dark">How to create a website with React.js?</Link></h2>
                <div>
                <ul className="nav category-nav">
                    <li className="nav-item">
                        <Link className="nav-link text-secondary" href="/">React</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link text-secondary" href="/">Node.js</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-secondary"  href="/">Bootstrap</Link>
                    </li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <div className="mt-5">
                    <Link href="/projects" className="text-decoration-none text-secondary">Read More →</Link>
                </div>
                </div>
            </div>
         </div>
         <hr/>
       </>
    )
}