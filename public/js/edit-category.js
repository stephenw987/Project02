// Identifies Note ID for selected Note using Form ID
const category_id = document.querySelector("#category-id").value;

const editCategoryHandler = async function (category) {
  // REQUIRED: Prevents Autorefresh of Note Page
  category.preventDefault();

  const category_name = document.querySelector("#category-name").value;

  console.log("edit-category.js Line 10: ", category_name);

  const res = await fetch(`/api/categories/${category_id}`, {
    method: "PUT",
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
    alert("Updated Category was not saved.");
  }
};

// NEED CASCADE OR REMOVE CATEGORY FROM NOT OPTION !!!
const deleteCategoryHandler = async function (category) {
  // REQUIRED: Prevents Autorefresh of Note Page
  category.preventDefault();
  // console.log("edit-category.js Line 32: deleteCategoryHandler is active.");

  const res = await fetch(`/api/categories/${category_id}`, {
    method: "DELETE",
  });

  // THIS DOESNT WORK !!!
  if (res.ok) {
    document.location.replace("/category");
  } else {
    alert("Selected Category was not deleted.");
  }
};

document
  .querySelector("#edit-category-form")
  .addEventListener("submit", editCategoryHandler);

document
  .querySelector("#delete-btn")
  .addEventListener("click", deleteCategoryHandler);
