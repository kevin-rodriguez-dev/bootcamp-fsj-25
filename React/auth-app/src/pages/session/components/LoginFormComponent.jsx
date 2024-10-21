import { set, useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../../../context/UserDataContext";

export const LoginFormComponent = () => {
    const { register, handleSubmit } = useForm();

    const navigate = useNavigate();

    const { user, setUser } = useContext(UserDataContext);

    const onSubmitForm = (data) => {
        console.log(data);

        signInWithEmailAndPassword(auth, data.mail, data.pass)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setUser(user);

                alert("Inicio de sesion con exito. Bienvenido!");

                navigate("/");
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label>Email</label>
                <input type="text" id="email" placeholder="Example: mail@mail.com" {...register("mail")} />
                <label>Password</label>
                <input type="password" id="password" placeholder=" ****** " {...register("pass")} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
