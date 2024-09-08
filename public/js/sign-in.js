const signinHandler = async function (event) {
  event.preventDefault();

  const user_name = document.querySelector("#username-signin").value;
  const user_password = document.querySelector("#password-signin").value;

  const res = await fetch("/api/userRoute/signin", {
    method: "POST",
    body: JSON.stringify({
      user_name,
      user_password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("sign-in.js Line 18: ", res);

  if (res.ok) {
    document.location.replace("/");
  } else {
    alert("User Sign In failed.");
  }
};
