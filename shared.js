var backDrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalActionsNo = document.querySelector(".modal__actions button")
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");


var action = function(){
    // backDrop.style.display = "none";
    // modal.style.display = "none";
    backDrop.classList.remove('open');
    if(modal)
        modal.classList.remove('open');
}

if(modalActionsNo)
{
    modalActionsNo.addEventListener('click', action)
}


backDrop.addEventListener('click', function(){
    // mobileNav.style.display = "none";
    mobileNav.classList.remove('open');
    action();
})

for(var i = 0; i< selectPlanButton.length; i++)
{
    selectPlanButton[i].addEventListener('click', function(){
        // backDrop.style.display = "block";
        // modal.style.display = "block";
        // modal.className = "open"; //This will overwrite All the classes of the element
        backDrop.classList.add('open');
        modal.classList.add('open');
    })
}

toggleButton.addEventListener('click',function(){
    // backDrop.style.display = "block";
    // mobileNav.style.display = "block";
    backDrop.classList.add('open');
    mobileNav.classList.add('open');
})