const btn_collaspe = document.getElementById('collaspe-side');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('body');
//////////////////////////////////////////////////////////////////

btn_collaspe.addEventListener('click', triggerSide);
function triggerSide(e) {
    if(sidebar.style.width == "0px") {
        sidebar.removeAttribute('style');
        main.removeAttribute('style');
        btn_collaspe.removeAttribute('style');
    }
    else {
        btn_collaspe.style.transform = "rotate(-90deg)";
        sidebar.style.width = "0";
        main.style.gridTemplateAreas = '"head" "main" "foot"';
        main.style.gridTemplateColumns = "100%";
    }   
}
