let tagsElement = document.getElementById("tags");
let textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) =>{
    createTags(e.target.value);

    if(e.key === "Enter"){
        setTimeout(() =>{
            e.target.value = "";
        },10);
        randomSelect();
    }
});

function createTags(input){
    let tags = input.split(",")
    .filter(tag => tag.trim() !== "")
    .map(tag => tag.trim());
    //console.log(tags);
    tagsElement.innerHTML = "";

    tags.map(tag => {
        let tagElement = document.createElement("span");
        tagElement.classList.add("tag");
        tagElement.innerText = tag;
        tagsElement.appendChild(tagElement);
    });
}

function randomSelect(){
    // console.log(123);
    let times = 30;

    const interval = setInterval(() =>{
        const randomTag = pickRandomTag();
        highlightTag(randomTag);

        setTimeout(() =>{
            unHighlightTag(randomTag);
        },300);
    },300);

    setTimeout(() =>{
        clearInterval(interval);
        setTimeout(() =>{
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
        },300);
    }, times * 300);
}

function pickRandomTag(){
    const tags = document.querySelectorAll(".tag");
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add("highlight");
}

function unHighlightTag(tag){
    tag.classList.remove("highlight");
}