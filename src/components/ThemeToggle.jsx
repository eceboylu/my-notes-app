export default function ThemeToggle() {
  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      html.classList.contains("dark") ? "dark" : "light"
    );
  };

  return (
    <button onClick={toggleTheme} className="focus:outline-none">
      <div className="w-12 h-6 bg-gray-300 dark:bg-indigo-600 rounded-full relative transition-colors duration-300">
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 transform dark:translate-x-6"></div>
      </div>
    </button>
  );
}
