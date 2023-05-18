import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Profile = () => {

    const [monprofil, setMonProfil] = useState("Pas de profil")


    useEffect(() => {
        if (Cookies.get("token")) {
            fetch("http://localhost:1337/api/users/me", {
                method: "get",
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((responseData) => {
                    setMonProfil(`email : ${responseData.email}
                            id : ${responseData.id}
                            username : ${responseData.username}
                            créé le : ${responseData.createdAt} `);
                });
        } else {
            setMonprofil(`Vous n'êtes pas connecté. Vous n'avez donc pas de profil`);
        }
    }, [])

    return (
        <div>
            <div>
                <h2>Profil user</h2>
                <div>{monprofil}</div>
            </div>
        </div>
    );
};

export default Profile;