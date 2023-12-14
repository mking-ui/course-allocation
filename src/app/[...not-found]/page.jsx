import Link from "next/link";


const NotFoundPage = () => {
  return (
    <div className=" container ">
      <section className="w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        <h3>Oooops...</h3>
        <h4>You just hit a wrong url.</h4>
        <p>
          will you like to go back to 
          <Link className=" text-decoration-none " href="/"> Home Page?
          </Link>
        </p>
      </section>
    </div>
  )
}

export default NotFoundPage



