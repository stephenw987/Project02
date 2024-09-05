// Defines Function to Add (POST) new Note Taker Member
const newUserHandler = async function (user) {
  // REQUIRED: Prevents Autorefresh of User Entry Page
  user.preventDefault();
  console.log("add-user.js Line 5: newUserHandler is active.");

  // Assigns Join HTML Form fields to Database (Model) fields
  const user_name = document.querySelector("#username-join").value;
  const user_password = document.querySelector("#password-join").value;
  console.log("add-user.js Line 10: ", user_name, user_password);

  // Calls POST Route, entries (See: controllers/api/index.js, then userRoute.js)
  const res = await fetch(`/api/users`, {
    method: "POST",
    body: JSON.stringify({
      user_name,
      user_password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Assigns User (Entry) Page "Save" button to newUserHandler Function
document.querySelector("#join-form").addEventListener("submit", newUserHandler);
