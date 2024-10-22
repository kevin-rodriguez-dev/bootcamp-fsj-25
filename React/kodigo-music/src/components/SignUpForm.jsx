import { useState } from "react";

export const SignUpForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = "El usuario es requerido";
        }
        if (!formData.email.trim()) {
            newErrors.email = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Correo inválido";
        }
        if (!formData.password.trim()) {
            newErrors.password = "La contraseña es requerida";
        } else if (formData.password.length < 6) {
            newErrors.password = "La contraseña debe tener al menos 6 caracteres";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="sign-up-form">
            <h2>Regístrate</h2>
            <div>
                <label htmlFor="username">Usuario:</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                {errors.username && <span className="error">{errors.username}</span>}
            </div>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
};
