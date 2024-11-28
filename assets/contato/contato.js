//JAVA SCRIPT DO HEADER-----------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const itens_menu = document.getElementsByClassName("nav-item");

    //Fechar o menu sandwich quando um item dele for clicado!
    for(var i = 0; i < itens_menu.length; i++)
    {
        var item = itens_menu.item(i);
        item.addEventListener('click', function ()
    {
        mobileMenu.style.display = "none";
    });
    }
});

//FUNÇÃO DE ABRIR O MENU SANDWICH!
function menu_sandwich_open()
{
    console.log("Abriu porra!");
    const mobileMenu = document.getElementById("mobile-menu");
    const nullscreen = document.getElementById("null-screen");
    mobileMenu.style.display = "flex";
    nullscreen.style.display = "flex";
}

//FUNÇÃO DE FECHAR O MENU SANDWICH!
function menu_sandwich_close()
{
    const mobileMenu = document.getElementById("mobile-menu");
    const nullscreen = document.getElementById("null-screen");
    mobileMenu.style.display = "none";
    nullscreen.style.display = "none";
}
//END JAVA SCRIPT DO HEADER-----------------------------------------------