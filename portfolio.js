
let skills=document.querySelectorAll(".Container");
function skillSection(){
    for(let i=0;i<skills.length;i++){
        let skills_position=skills[i].getBoundingClientRect();
        if(skills_position.top<window.innerHeight-100){
            skills[i].classList.add("second_class");
    }
}
}
window.addEventListener("scroll",skillSection);
skillSection();
let projects=document.querySelectorAll(".PROJECTS");
function projectSection(){
    for(let i=0;i<projects.length;i++){
        let projects_position=projects[i].getBoundingClientRect();
        if(projects_position.top<window.innerHeight-100){
            projects[i].classList.add("projects_class");
        }
    }
}
window.addEventListener("scroll",projectSection);
projectSection();
let about=document.querySelector("#about_section");
function aboutSection(){
    let about_position=about.getBoundingClientRect();
    if(about_position.top<window.innerHeight-100){
        about.classList.add("about_class");
    }
}
window.addEventListener("scroll",aboutSection);
aboutSection();
let contact=document.querySelector("#contact_section");
function contactSection(){
    let contact_position=contact.getBoundingClientRect();
    if(contact_position.top<window.innerHeight-100){
        contact.classList.add("contact_section");
    }
}
window.addEventListener("scroll",contactSection);
contactSection();
