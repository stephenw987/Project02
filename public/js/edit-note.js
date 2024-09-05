// Identifies Note ID for selected Note using Form ID
const note_id = document.querySelector("#note-id").value;

const editNoteHandler = async function (note) {
  // REQUIRED: Prevents Autorefresh of Note Page
  note.preventDefault();

  const note_title = document.querySelector("#note-title").value;
  const note_body = document.querySelector("#note-body").value;
  const category_id = document.querySelector("#category-id").value;

  const res = await fetch(`/api/notes/${note_id}`, {
    method: "PUT",
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
    alert("Updated Note was not saved.");
  }
};

const deleteNoteHandler = async function (note) {
  // REQUIRED: Prevents Autorefresh of Note Page
  note.preventDefault();
  // console.log("edit-note.js Line 30: deleteNoteHandler is active.");

  const res = await fetch(`/api/notes/${note_id}`, {
    method: "DELETE",
  });

  // THIS DOESNT WORK !!!
  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("Selected Note was not deleted.");
  }
};

document
  .querySelector("#edit-note-form")
  .addEventListener("submit", editNoteHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteNoteHandler);
