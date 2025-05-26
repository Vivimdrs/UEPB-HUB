document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.campus').forEach(campusDiv => {
        campusDiv.addEventListener('click', () =>{
            const campusId = mapeamento_campus[campusDiv.id];
            window.location.href = `comunidades.html?campus_id=${campusId}`;
        });
    });
});