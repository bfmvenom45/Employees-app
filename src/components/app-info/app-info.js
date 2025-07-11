import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Кількість праціників в компанії N</h1>
            <h2>Сумарна к-сть працівників: {employees}</h2>
            <h2>Пакет допомоги: {increased}</h2>
        </div>
    )
}

export default AppInfo;