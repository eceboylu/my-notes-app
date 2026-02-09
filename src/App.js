import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] dark:bg-gray-900 transition-colors">

      <header className="flex justify-between items-center px-10 py-5 bg-white dark:bg-gray-800 shadow-sm border-b transition-colors">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-extrabold" style={{ color: "#FF69B4" }}>
            Papyrus Notes
          </h1>
          <i className="fa-solid fa-pencil text-gray-400 ml-2"></i>
        </div>

        <ThemeToggle />
      </header>

      <Home />

    </div>
  );
}
