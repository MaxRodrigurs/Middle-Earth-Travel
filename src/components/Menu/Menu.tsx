function Menu() {
  return (
    <nav className="flex sm:mt-5 lg:mt-0 gap-6 text-white">
      <ul>
        <a href="">
          <li className="hover:border-b-2">Home</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Estadias</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Voos</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2">Pacotes</li>
        </a>
      </ul>

      <ul>
        <a href="">
          <li className="hover:border-b-2 font-gilroy-bold">Log in</li>
        </a>
      </ul>
    </nav>
  )
}
export default Menu