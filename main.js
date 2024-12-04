

document.addEventListener("DOMContentLoaded", () => {
    const avatarUser = document.querySelector('#avatar');
    const nameUser = document.querySelector('#nameUser');
    const nickName = document.querySelector('#nickName');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const gitLink = document.querySelector('#link');

    fetch("https://api.github.com/users/thiinhobarreto")
        .then((r) => {
            if (!r.ok) {

                throw new Error(`${r.status}`);
            }
            return r.json();

        }).then((json) => {
            avatarUser.src = json.avatar_url;
            nameUser.innerText = json.name;
            nickName.innerText = '@' + json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            gitLink.href = json.html_url;

        }).catch((error) => {
            const match = error.message.match(/\d{3}/);
            const statusCode = match ? parseInt(match[0], 10) : null;

            if (statusCode) {
                if (statusCode >= 100 && statusCode < 200) {
                    console.error("Erro informativo: O servidor está processando.");
                } else if (statusCode >= 200 && statusCode < 300) {
                    console.error("Erro de sucesso inesperado.");
                } else if (statusCode >= 300 && statusCode < 400) {
                    console.error("Erro de redirecionamento: Verifique a URL.");
                } else if (statusCode >= 400 && statusCode < 500) {
                    console.error("Erro do cliente:", error.message);
                } else if (statusCode >= 500 && statusCode < 600) {
                    console.error("Erro no servidor:", error.message);
                } else {
                    console.error("Código de erro desconhecido:", statusCode);
                }
            } else {
                console.error("Erro inesperado:", error.message);
            }


        }).finally(() => {
            console.log('Código finalizado!')
        });
    });
