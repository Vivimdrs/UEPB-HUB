export function getToken(){
    return localStorage.getItem('token');
}

export function salvaToken(token){
    localStorage.setItem('token', token);
}

export function logout(){
    localStorage.removeItem('token');
}