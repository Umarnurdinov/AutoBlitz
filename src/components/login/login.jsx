// // src/components/Login.js
// import React, { useState } from "react";
// import {
//   auth,
//   provider,
//   signInWithPopup,
//   signInWithEmailAndPassword,
// } from "../firebase";
// import "./login.scss";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div className="login">
//       <div className="container">
//         <form onSubmit={handleLogin}>
//           <h2>Login</h2>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//         <button onClick={handleGoogleLogin}>Login with Google</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
