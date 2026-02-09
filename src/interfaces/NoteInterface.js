export class Note {
  constructor(id, title, text, date) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.date = date;
  }
}

export class NoteManager {
  constructor() {
    const data = JSON.parse(localStorage.getItem("notes"));
    if (!data || data.length === 0) {
      this.notes = [
        new Note(Date.now(), "Hoşgeldin", "İlk notun 🎉", this.getDate()),
        new Note(Date.now() + 1, "Papyrus", "Not almaya başla!", this.getDate())
      ];
      this.save();
    } else {
      this.notes = data;
    }
  }

  getDate() {
    return new Date().toLocaleDateString("tr-TR");
  }

  save() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  add(title, text) {
    this.notes.push(new Note(Date.now(), title, text, this.getDate()));
    this.save();
  }

  delete(id) {
    this.notes = this.notes.filter(n => n.id !== id);
    this.save();
  }

  update(id, title, text) {
    const note = this.notes.find(n => n.id === id);
    if (note) {
      note.title = title;
      note.text = text;
      this.save();
    }
  }

  all() {
    return this.notes;
  }
}
