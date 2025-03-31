import Button from "../ UI/Button";
import Input from "../ UI/Input";

function AuthForm({type, onSubmit, loading}) {

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            {type === 'register' && (
                <Input name="username" label="Имя пользователя" required/>
            )}
            <Input name="email" type="email" label="Email" required/>
            <Input name="password" type="password" label="Пароль" required/>
            {type === 'register' && (
                <Input name="confirmPassword" type="password" label="Подтвердите пароль" required/>
            )}
            <Button type="submit" disabled={loading}>
                {loading ? 'Загрузка...' : type === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </form>
    );
};
export default AuthForm;