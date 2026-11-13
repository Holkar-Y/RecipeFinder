
import { useState } from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = ({
  favorites,
  currentUser,
  setCurrentUser,
  setFavorites
}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setFavorites([]);
    navigate("/");
    setMenuOpen(false);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-[#D97745] font-semibold"
        : "text-[#252B28] hover:text-[#D97745]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8E5DC] bg-[#F8F6F0]/95 backdrop-blur-md">

      <div className="page-container flex items-center justify-between py-4">

        {/* Logo */}
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
          <span className="text-3xl transition-transform duration-300 group-hover:rotate-12">🍃</span>

          <span className="text-2xl font-bold text-[#183D32]">
            Recipe<span className="text-[#D97745]">Finder</span>
          </span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-[#183D32] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <section
          className={`
            ${menuOpen ? "flex" : "hidden"}
            md:flex
            flex-col md:flex-row
            items-stretch md:items-center
            gap-5 md:gap-8
            absolute md:static
            top-full left-0
            w-full md:w-auto
            bg-[#F8F6F0] md:bg-transparent
            border-b md:border-0 border-[#E8E5DC]
            p-6 md:p-0
            shadow-md md:shadow-none
          `}
        >

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className="group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.03] hover:text-amber-600"
          >
            Home
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={closeMenu}
            className={navLinkClass}
          >
            <span className="flex items-center gap-2">
              Favorites

              <span className="rounded-full bg-[#DCE8D8] px-2 py-0.5 text-xs text-[#183D32]">
                {favorites.length}
              </span>
            </span>
          </NavLink>

          {currentUser && (
            <NavLink
              to="/profile"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Profile
            </NavLink>
          )}

          {currentUser ? (
            <button
              onClick={handleLogout}
              className="rounded-full border border-[#E8E5DC] px-5 py-2 text-[#183D32] transition-colors hover:bg-[#DCE8D8]"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={closeMenu}
              className="rounded-full bg-[#183D32] px-5 py-2 text-center text-white transition-colors hover:bg-[#245443]"
            >
              Login
            </NavLink>
          )}

        </section>
      </div>
    </nav>
  );
};

export default Navbar;
