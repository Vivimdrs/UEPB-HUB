import { getToken } from "./token.js";

const api_infouser = ''; //api que pega os dados do usuario

export async function checaSeSegueComunidade(userId, comunidadeId) {
    const Response = await fetch('${api_infouser}/statusSeguindo?userId=${userId}&comunidadeId=${comunidadeId}',{
        headers:{
            'Authorization': 'Bearer ${getToken()}'
        }
    });
    return await Response.json();
}

export async function alternaSeguir(userId, comunidadeId, action) {
    const Response = await fetch('${api_infouser}/seguircomunidade', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ${getToken()}',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userId, comunidadeId, action})
    });
    return await Response.json();
}