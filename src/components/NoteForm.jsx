import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (!title.trim() || !text.trim()) {
      setError(true);
      return;
    }
    onAdd(title, text);
    setTitle("");
    setText("");
    setError(false);
  };

  return (
    <section className="w-full lg:w-[450px] shrink-0">
      <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-xl flex flex-col overflow-hidden border transition-colors">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-5 flex items-center justify-center relative">
          <h2 className="text-white text-sm tracking-[0.2em] font-bold uppercase">
            Günlük Notum
          </h2>
        </div>

        {/* FORM */}
        <div className="p-8 flex flex-col gap-5">

          {/* BAŞLIK */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-400 ml-2 mb-1 uppercase tracking-wider">
              Başlık
            </label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Not başlığını girin..."
              className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-transparent
                focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-200
                transition-all outline-none text-gray-700 dark:text-gray-200
                ${error && !title ? "ring-2 ring-red-400" : ""}`}
            />
          </div>

          {/* İÇERİK */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-400 ml-2 mb-1 uppercase tracking-wider">
              İçerik
            </label>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Neler düşünüyorsun?"
              rows="3"
              className={`p-4 rounded-2xl bg-gray-50 dark:bg-gray-700 border border-transparent
                focus:bg-white dark:focus:bg-gray-600 focus:ring-2 focus:ring-purple-200
                transition-all outline-none resize-none text-gray-600 dark:text-gray-300 leading-relaxed
                ${error && !text ? "ring-2 ring-red-400" : ""}`}
            />
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-red-500 text-sm ml-2">
              ⚠️ Başlık ve not alanı boş bırakılamaz!
            </p>
          )}

          {/* BUTTON */}
          <button
            onClick={submit}
            className="mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 rounded-[1.5rem]
            shadow-lg hover:-translate-y-1 active:scale-95 transition-all"
          >
            Notu Kaydet
          </button>

        </div>
      </div>
    </section>
  );
}
