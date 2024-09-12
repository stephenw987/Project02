Handlebars.registerHelper(
  "filterByCategory",
  function (notes, selectedCategory, options) {
    var filteredNotes = notes.filter(function (note) {
      return note.category === selectedCategory;
    });

    // Render the filtered notes
    var result = "";
    for (var i = 0; i < filteredNotes.length; i++) {
      result += options.fn(filteredNotes[i]);
    }
    return result;
  }
);
