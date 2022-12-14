import { Logo } from "../../Icons/Logo";

const NAVIGATION = [
  { name: "ABOUT", href: "#" },
  { name: "EDUCATION", href: "#" },
  { name: "RESOURCES", href: "#" },
  { name: "HOPE", href: "#" },
  { name: "GET INVOLVED", href: "#" },
  { name: "CALL US: 346-703-0051", href: "#" },
];

const BTN_LABEL = "Donate";

export default function Navigation() {
  return (
    <div className="flex items-center flex-shrink-0 h-32 ml-16">
      <figure className="ml-10">
        <Logo />
      </figure>
      <nav className="absolute flex space-x-10" style={{ left: "250px" }}>
        {NAVIGATION.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="px-3 py-2 m-0 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          style={{ backgroundColor: "#edb331", left: "1120px" }}
          type="button"
          className="absolute px-6 py-2 font-bold text-white rounded "
        >
          {BTN_LABEL}
        </button>
      </div>
    </div>
  );
}
