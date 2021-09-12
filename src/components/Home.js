import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const auth = getAuth();
  const [userId, setUserId] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(1);
        setUserId(uid);
      } else {
        // console.log(0);
        setUserId(false);
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Вы вышли из аккаунта");
      })
      .catch((error) => {
        alert("Ошибка");
        console.log(error);
      });
  };

  return (
    <div
      style={{
        marginRight: "auto",
        marginLeft: "auto",
        width: 420,
        textAlign: "center",
      }}
    >
      <h3 style={{ marginTop: 20 }}>
        {userId ? `Вы авторизованы, ID: ${userId}` : "Вы не авторизованы"}
      </h3>
      {userId ? (
        <button type="button" onClick={handleSignOut}>
          Выход
        </button>
      ) : (
        <Link to="/signin">
          <button type="button">Авторизация</button>
        </Link>
      )}
    </div>
  );
};

export default Home;
