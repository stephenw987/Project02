// router.get("/", async function (req, res) {
//   try {
//     const noteData = await Note.findAll();
//     const categoryData = await Category.findAll();

//     const notes = noteData.map((note) => note.get({ plain: true }));
//     // console.log("pageRoutes.js Line 16: Data: ", notes);

//     const categories = categoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     console.log(categories);

//     // Renders Page, index.handlebars
//     res.render("index", { notes, signedin: req.session.signed_in });
//   } catch (err) {
//     console.log("pageRoutes.js Line 20: Error: ", err);
//     res.json(err);
//   }
// });
