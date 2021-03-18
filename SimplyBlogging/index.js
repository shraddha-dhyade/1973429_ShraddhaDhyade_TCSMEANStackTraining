function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    var img = document.getElementById("imageId").files[0];
    var imgURL = URL.createObjectURL(img);

    var div = document.getElementById("blogContent");

    var contentTag = document.createElement("div");
    contentTag.classList.add("row");
    
    var col1Tag = document.createElement("div");
    col1Tag.classList.add("col-7");
    
    var titleTag = document.createElement("h2");
    titleTag.classList.add("featurette-heading");
    titleTag.textContent = title;

    var descTag = document.createElement("p");
    descTag.textContent = desc;
    descTag.classList.add("lead")
    descTag.style.whiteSpace = "pre-line";
    
    var col2Tag = document.createElement("div");
    col2Tag.classList.add("col-5");

    var imgTag = document.createElement("img");
    imgTag.src = imgURL;
    imgTag.classList.add("featurette-image");
    imgTag.classList.add("img-fluid");
    imgTag.classList.add("mx-auto");
    imgTag.style.height = "250px";
    imgTag.style.width = "250px";

    var hrTag = document.createElement("hr");
    hrTag.classList.add("featurette-divider");

    col1Tag.appendChild(titleTag);
    col1Tag.appendChild(descTag);
    col2Tag.appendChild(imgTag);
   
    contentTag.appendChild(col1Tag);
    contentTag.appendChild(col2Tag);

    div.appendChild(contentTag);
    div.appendChild(hrTag);

    document.getElementById("formTag").reset()
}