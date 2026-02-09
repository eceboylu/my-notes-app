import { useState } from "react";

export default function NoteCard({ note, onDelete, onUpdate }) {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);

  const save = () => {
    if (!title.trim() || !text.trim()) {
      alert("Başlık ve içerik boş olamaz!");
      return;
    }
    onUpdate(note.id, title, text);
    setEdit(false);
  };

  return (
    <div
      className={`
        bg-white dark:bg-gray-800 w-[300px] 
        ${edit ? "h-auto" : "h-[150px]"} 
        rounded-3xl p-5 flex flex-col justify-between border dark:border-gray-700
        transition-all duration-300 overflow-hidden
      `}
    >
      {/* VIEW MODE */}
      {!edit && (
        <div className="view-mode flex flex-col justify-between h-full">
          <div>
            <h2 className="font-bold text-lg truncate dark:text-white">{note.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{note.text}</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-400">{note.date}</span>
            <div className="flex gap-3">
              <i
                className="fa-solid fa-pencil cursor-pointer text-gray-500 hover:text-pink-500"
                onClick={() => setEdit(true)}
              ></i>
              <i
                className="fa-solid fa-trash-can cursor-pointer text-red-500"
                onClick={() => onDelete(note.id)}
              ></i>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODE */}
      {edit && (
        <div className="edit-mode flex flex-col gap-2">
          <input
            className="title-edit p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="2"
            className="text-edit p-2 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex justify-end gap-2">
            <button
              className="cancel px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-600 dark:text-white text-sm"
              onClick={() => setEdit(false)}
            >
              İptal
            </button>
            <button
              className="save px-3 py-1 rounded-lg bg-pink-400 text-white text-sm"
              onClick={save}
            >
              Kaydet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
