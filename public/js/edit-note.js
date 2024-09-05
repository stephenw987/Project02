const note_id = document.querySelector("#note-id").value;

const editNoteHandler = async function (note) {
  note.preventDefault();

  const note_title = document.querySelector("#note-title").value;
  const note_body = document.querySelector("#note-body").value;

  const res = await fetch(`/api/notes/${note_id}`, {
    method: "PUT",
    body: JSON.stringify({
      note_title,
      note_body,
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
  note.preventDefault();

  const res = await fetch(`/api/notes/${note_id}`, {
    method: "DELETE",
  });

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
