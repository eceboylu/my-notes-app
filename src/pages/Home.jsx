import { useState } from "react";
import { NoteManager } from "../interfaces/NoteInterface";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

const manager = new NoteManager();

export default function Home() {
  const [notes, setNotes] = useState(manager.all());

  const refresh = () => setNotes([...manager.all()]);

  return (
    <main className="flex justify-around items-start mt-16 px-10">
      {/* Not ekleme formu */}
      <NoteForm
        onAdd={(title, text) => {
          manager.add(title, text);
          refresh();
        }}
      />

      {/* Kartlar */}
      <section className="grid grid-cols-2 gap-5 auto-rows-min">
        {notes.map(note => (
          <NoteCard
            key={note.id}
            note={note}
            onDelete={id => {
              manager.delete(id);
              refresh();
            }}
            onUpdate={(id, t, x) => {
              manager.update(id, t, x);
              refresh();
            }}
          />
        ))}
      </section>
    </main>
  );
}
