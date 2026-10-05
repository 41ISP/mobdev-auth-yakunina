import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link } from "react-router-dom"
import { api } from "../api/api";

const SignUp = () => {
    const [error, setError] = useState("")

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.password2.value) {
            setError("Пароли не совпадают")
            return
        }
       const user = {
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
       }
       try {
        const data = await api.registerUser(user)
       }catch (error) {}
       }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        minlength={5}
                        maxlength={30}
                        type="text"
                        label="Имя пользователя"
                        required
                        placeholder="Введите имя пользователя"
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        minlength={5}
                        maxlength={50}
                        label="Почта"
                        required
                        placeholder="Введите почту"
                    />
                    <Input
                        id="password"
                        name="password"
                        minlength={6}
                        maxlength={30}
                        type="password"
                        label="Пароль"
                        required
                        placeholder="Введите пароль"
                    />
                    <Input
                        id="password2"
                        name="password2"
                        minlength={6}
                        maxlength={30}
                        type="password"
                        label="Подтверждение пароля"
                        required
                        placeholder="Подтвердите пароль"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={"/signin"}>Вход</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
