import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  User,
  Settings,
  BarChart3,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const API_URL = "http://localhost:5000/api";

const NAV_ITEMS = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Analytics", icon: BarChart3 },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

const Dashboard = () => {
  const [active, setActive] = useState("Overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [loggingOut, setLoggingOut] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Close the profile dropdown when clicking outside it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Pull the logged-in user's info to render name/email/avatar.
  // Requires a backend route like GET /api/me that reads the httpOnly cookie
  // and returns { name, email }. Swap the endpoint if yours differs.
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${API_URL}/auth/me`, { credentials: "include" });
        if (res.ok) {
          const data = await res.json();
          setUser({ name: data.name, email: data.email });
        }
      } catch {
        // Silently ignore — page still renders with placeholder initials
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      // The JWT is stored as an httpOnly cookie, so JS can't clear it directly —
      // this needs a backend route (e.g. POST /api/logout) that calls
      // res.clearCookie("token") and responds 200.
      await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    } catch {
      // Even if the request fails, still send the user back to login
    } finally {
      navigate("/login");
    }
  };

  const initials = user.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-[#1F2430] flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-30 top-0 left-0 h-full w-64 bg-[#14171F] text-[#C7CAD1] flex flex-col transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white font-semibold tracking-tight text-lg">
            Northline
          </span>
          <button
            className="lg:hidden text-[#C7CAD1] hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-6 space-y-1">
          {NAV_ITEMS.map(({ label, icon: Icon }) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                onClick={() => {
                  setActive(label);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors relative ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-[#9DA1AB] hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-3 rounded-r bg-[#4C6FFF]" />
                )}
                <Icon size={18} />
                {label}
              </button>
            );
          })}
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-[#9DA1AB] hover:bg-white/5 hover:text-white transition-colors disabled:opacity-50"
          >
            <LogOut size={18} />
            {loggingOut ? "Logging out..." : "Log out"}
          </button>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-[#E4E7EC] flex items-center justify-between px-4 lg:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden text-[#4C5563] hover:text-[#1F2430]"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={22} />
            </button>
            <h1 className="text-lg font-semibold">{active}</h1>
          </div>

          {/* Profile dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-[#F1F2F5] transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-[#4C6FFF] text-white text-xs font-semibold flex items-center justify-center">
                {initials}
              </div>
              <span className="hidden sm:block text-sm font-medium text-[#1F2430]">
                {user.name || "Account"}
              </span>
              <ChevronDown
                size={16}
                className={`text-[#8A8F98] transition-transform ${
                  menuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#E4E7EC] overflow-hidden">
                <div className="px-4 py-3 border-b border-[#E4E7EC]">
                  <p className="text-sm font-medium text-[#1F2430] truncate">
                    {user.name || "Signed in"}
                  </p>
                  <p className="text-xs text-[#8A8F98] truncate">
                    {user.email || ""}
                  </p>
                </div>
                <button
                  onClick={() => setActive("Profile")}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#1F2430] hover:bg-[#F7F8FA] flex items-center gap-2"
                >
                  <User size={16} />
                  View profile
                </button>
                <button
                  onClick={() => setActive("Settings")}
                  className="w-full text-left px-4 py-2.5 text-sm text-[#1F2430] hover:bg-[#F7F8FA] flex items-center gap-2"
                >
                  <Settings size={16} />
                  Settings
                </button>
                <button
                  onClick={handleLogout}
                  disabled={loggingOut}
                  className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 border-t border-[#E4E7EC] disabled:opacity-50"
                >
                  <LogOut size={16} />
                  {loggingOut ? "Logging out..." : "Log out"}
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="bg-white rounded-2xl border border-[#E4E7EC] p-8 min-h-[60vh] flex items-center justify-center">
            <p className="text-[#8A8F98] text-sm">
              {active} content goes here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
