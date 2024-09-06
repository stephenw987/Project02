// Defines Function to Add (POST) new Category
const newCategoryHandler = async function (category) {
  // REQUIRED: Prevents Autorefresh of Category Entry Page
  category.preventDefault();

  const category_name = document.querySelector("#category-name").value;

  console.log("add-category.js Line 8: ", category_name);

  // Calls POST Route, categories (See: controllers/api/index.js, then categoryRoute.js)
  const res = await fetch(`/api/categories`, {
    method: "POST",
    body: JSON.stringify({
      category_name,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    document.location.replace("/category");
  } else {
    alert("New Category was not saved");
  }
};

// Assigns Category (Entry) Page "Save" button to newCategoryHandler Function
document
  .querySelector("#new-category-form")
  .addEventListener("submit", newCategoryHandler);
