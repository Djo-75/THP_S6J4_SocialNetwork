import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Profile = () => {
    const [monprofil, setMonProfil] = useState("Pas de profil");

    useEffect(() => {
        const token = Cookies.get("token");

        if (token) {
            fetch("http://localhost:1337/api/users/me", {
                method: "get",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((responseData) => {
                    const { email, id, username, createdAt } = responseData;
                    setMonProfil(`email: ${email}\nid: ${id}\nusername: ${username}\ncréé le: ${createdAt}`);
                });
        } else {
            setMonProfil("Vous n'êtes pas connecté. Vous n'avez donc pas de profil");
        }
    }, []);

    return (
        <div>
            <h2>Profil utilisateur</h2>
            <div>{monprofil}</div>
        </div>
    );
};

export default Profile;
