import { Link } from "react-router-dom"
import WooviColorfulLogo from "../assets/images/colorful-logo.svg"

export function Header() {
  return (
    <header className="flex justify-center items-center my-9">
      <Link to={"/"}>
        <img
          src={WooviColorfulLogo}
          alt="Logotipo da Woovi"
          className="h-9 hover:cursor-pointer"
        />
      </Link>
    </header>
  )
}
