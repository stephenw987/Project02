// Defines Function to Add (POST) new Note
const newNoteHandler = async function (note) {
  // REQUIRED: Prevents Autorefresh of Note Entry Page
  note.preventDefault();

  const note_title = document.querySelector("#note-title").value;
  const note_body = document.querySelector("#note-body").value;
  const category_id = document.querySelector("#category-id").value;

  console.log("add-note.js Line 10: ", note_title, note_body, category_id);

  // Calls POST Route, notes (See: controllers/api/index.js, then noteRoute.js)
  const res = await fetch(`/api/notes`, {
    method: "POST",
    body: JSON.stringify({
      note_title,
      note_body,
      category_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("New Note was not saved");
  }
};

// Assigns Note (Entry) Page "Save" button to newNoteHandler Function
document
  .querySelector("#new-note-form")
  .addEventListener("submit", newNoteHandler);
