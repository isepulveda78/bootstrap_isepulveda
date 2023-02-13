import Layout from "components/Layout"
import NavBar from "components/NavBar"
import Footer from "components/Footer"
import Hero from "components/Hero"
import Post from "components/Post"
import Pagination from "components/Pagination"
export default function Home() {
  return (
    <>
     <NavBar />
      <Layout>
          <Hero />
          <Post />
          <Pagination />
      </Layout>
     <Footer />
    </>
  
  )
}
