import { Link } from "react-router-dom"

const Error = () => {
  return (
    <>
      <section
        className="error"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Error 404. Page Not Found</h1>
        <Link
          to="/"
          style={{ backgroundColor: "#F7DF94", padding: 10, color: "black" }}
        >
          Generator
        </Link>
      </section>
    </>
  )
}

export default Error