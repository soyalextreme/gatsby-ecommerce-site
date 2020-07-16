import React from "react"
import { Link } from "gatsby"

const navItems = [
  {
    caption: "Home",
    href: "/",
  },
  {
    caption: "Products",
    href: "/products",
  },
]
const Nav = () => {
  return (
    <header className="bg-blue-900 text-blue-100 shadow-md">
      <nav>
        <ul className="flex">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className="hover:bg-blue-700 px-4 inline-block py-6"
                to={item.href}
              >
                {item.caption}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav
