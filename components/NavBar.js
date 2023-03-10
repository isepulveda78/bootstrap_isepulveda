import Link from "next/link"
import Image from "next/image"
export default function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="navbar-brand"><Image src="/img/isepulveda.png" className="img-fluid" width={100} height={100} alt="isepulveda"></Image><Link className="pacifico fs-2 ms-2 text-decoration-none text-dark" href="/">isepulveda</Link></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-bold" href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
        </>
    )
}