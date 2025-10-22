//
export function renderloginform(){

    return
    `<form id="loginForm">
        <label>Nombre de usuario: </label>
        <input type="text" id="username" required></input>
        <label>Contraseña: </label>
        <input type="password" id="password" required></input>
        <button type="submit">Iniciar sesión</button>
    </form>;
    <p id="message"></p>`;
};