function appear(){
    const ww = document.getElementById("i1").value.toLowerCase();

    if(ww === "html"){
        window.location.href = "html.html";
    }
    else if(ww === "css"){
        window.location.href = "css.html";
    }
    else if(ww === "javascript"){
        window.location.href = "js.html";
    }
    else if(ww === "java"){
        window.location.href = "j.html";
    }
    else if(ww === "cs50"){
        window.location.href = "cs50.html";
    }
    else if(ww === "c#"){
        window.location.href = "C.html";
    }
    else if(ww === "python"){
        window.location.href = "py.html";
    }
    else if(ww === "ما قبل البرمجة"){
        window.location.href = "lh rdf.html";
    }
    else{
        alert("لا توجد صفحة  لهذا البحث");
    }
}