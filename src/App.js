
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import axios from "./components/axiosConfig";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import SignUp from "./pages/SignIn/SignUp";
import SignIn from "./pages/SignUp/SignIn";
import Homepage from "./pages/Homepage/Homepage";
import NewQuestion from "./pages/Questions/NewQuestion";
import Answer from "./pages/Answers/Answer";
export const AppState = createContext();
function App() {
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const checkUser = async () => {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUser(data);
      // console.log(data);
    } catch (error) {
      navigate("/login");
      return error.response;
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppState.Provider value={{ user, setUser }}>
      <Header />
      <Routes>
        <Route path="/askquestion" element={<NewQuestion />} />
        <Route path="/Answer/:questionid" element={<Answer />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
      <Footer />
    </AppState.Provider>
  );
}

export default App;





























































































































// import React, { useEffect, useState, createContext, useContext } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./SignIn/Login";
// import Register from "./Pages/Register";
// import axios from "./axiosConfig";

// export const AppState = createContext();

// function App() {
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     async function checkUser() {
//       if (!token) {
//         // If token is not present, navigate to login
//         // Navigate or set user accordingly based on your app's logic
//         return;
//       }

//       try {
//         const { data } = await axios.get("/users/check", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(data);
//       } catch (error) {
//         console.log(error.response);
//         // Handle error or navigate to login page
//       }
//     }

//     checkUser();
//   }, []);

//   return (
//     <AppState.Provider value={{ user, setUser }}>
//       <Router>
//         <div>
//           <Routes>
//             <Route path="/" element={<ProtectedRoute />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//           </Routes>
//         </div>
//       </Router>
//     </AppState.Provider>
//   );
// }

// function ProtectedRoute() {
//   const { user, setUser } = useContext(AppState);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     async function checkUser() {
//       if (!token) {
//         // If token is not present, navigate to login
//         navigate("/login");
//         return;
//       }

//       try {
//         const { data } = await axios.get("/users/check", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setUser(data);
//       } catch (error) {
//         console.log(error.response);
//         navigate("/login");
//       }
//     }

//     checkUser();
//   }, [navigate, setUser, token]);

//   return token ? <Home /> : null;
// }

// export default App;

//one


//  import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

//  import Home from "./Pages/Home";
// import Login from "./Pages/Login";
//  import Register from "./Pages/Register";
//  import { useEffect } from "react";
//  import axios from "./axiosConfig";

//  function App() {

//    return (
//     <Router>
//        <div>
//          <Routes>
//            <Route path="/" element={<ProtectedRoute />} />
//            <Route path="/login" element={<Login />} />
//            <Route path="/register" element={<Register />} />
//          </Routes>
//        </div>
//      </Router>
//    );
//  }

 
//  function ProtectedRoute() {
//    const navigate = useNavigate();
//    const token = localStorage.getItem("token");

//    useEffect(() => {
//      async function checkUser() {
//        try {
//          await axios.get("/user/check", {
//            headers: {
//              Authorization: `Bearer ${token}`, // Proper way to set Authorization header
//            },
//          });
//        } catch (error) {
//          console.log(error.response);
//          navigate("/login");
//        }
//      }

//      checkUser();
//    }, [navigate, token]); // Ensure 'token' is included as a dependency

//    return <Home />;
//  }

//  export default App;

// // import { BrowserRouter as Router, Routes, Route, useNavigate } from   "react-router-dom";
// // import Home from "./Pages/Home";
// // import Login from "./Pages/Login";
// // import Register from "./Pages/Register";
// // import { useEffect } from "react";
// // import axios from "./axiosConfig";

// // function App() {

// //   const navigate = useNavigate();
// //   async function checkUser(){
// //  try {
// //       await axios.get('/user/check');
// //  } catch (error) {
// //   console.log(error.response);
// //   navigate('/login');
// //   }
// //  }
// //  useEffect(()  =>{
// //   checkUser();
// //  }, []);
// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // import Home from "./Pages/Home";
// // import Login from "./Pages/Login";
// // import Register from "./Pages/Register";
// // import { useEffect } from "react";
// // import axios from "./axiosConfig";

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route path="/" element={<ProtectedRoute />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // function ProtectedRoute() {
// //   const navigate = useNavigate(); // Ensure this is within the Router scope
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     async function checkUser() {
// //       try {
// //         await axios.get("/users/check", {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //       } catch (error) {
// //         console.log(error.response);
// //         navigate("/login");
// //       }
// //     }

// //     checkUser();
// //   }, [navigate, token]);

// //   return <Home />;
// // }

// // export default App;

// // import React, { useEffect } from "react";
// // import {

// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   useNavigate,
// // } from "react-router-dom";
// // import Home from "./Pages/Home";
// // import Login from "./Pages/Login";
// // import Register from "./Pages/Register";
// // import axios from "./axiosConfig";

// // function App() {
// //   const navigate = useNavigate();

// //   async function checkUser() {
// //     try {
// //       await axios.get("/user/check");
// //     } catch (error) {
// //       console.log(error.response);
// //       navigate("/login");
// //     }
// //   }

// //   useEffect(() => {
// //     checkUser();
// //   }, []);

// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

// // import React, { useEffect } from "react";
// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Navigate,
// // } from "react-router-dom";
// // import Home from "./Pages/Home";
// // import Login from "./Pages/Login";
// // import Register from "./Pages/Register";
// // import axios from "./axiosConfig";

// // function App() {
// //   async function checkUser() {
// //     try {
// //       await axios.get("/users/check");
// //     } catch (error) {
// //       console.log(error.response);
// //       // Redirect to login if check fails
// //       return <Navigate to="/login" />;
// //     }
// //   }

// //   useEffect(() => {
// //     checkUser();
// //   }, []);

// //   return (
// //     <Router>
// //       <div>
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/login" element={<Login />} />
// //           <Route path="/register" element={<Register />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import React, { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,

//   useNavigate,
// } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import axios from "./axiosConfig";
// import { createContext } from "react";

// export const AppState = createContext()

// function App() {
//   const [user, setuser] = useState({});
//   setuser(data);
//   return (
//     <Router>
//       <AppState.Provider value={{ user, setuser }}>
//         <Routes>
//           <Route path="/" element={<ProtectedRoute />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </AppState.Provider>
//     </Router>
//   );
// }

// function ProtectedRoute() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     async function checkUser() {
//       if (!token) {
//         // If token is not present, navigate to login
//         navigate("/login");
//         return;
//       }

//       try {
//         const {data} = await axios.get("/users/check", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setuser(data);
//       } catch (error) {
//         console.log(error.response);
//         navigate("/login");
//       }
//     }

//     checkUser();
//   }, [navigate, token]);

//   return token ? <Home /> : null; // Render Home if token exists, otherwise render nothing
// }

// export default App;
