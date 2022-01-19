function run() {
    // initializing the variables with entered code
    let htmlCode = document.getElementById("htmlTA").value;
    let cssCode = "<style>"+document.getElementById("cssTA").value+"</style>";
    let jsCode = document.getElementById("jsTA").value;
    let output = document.getElementById("iframeId");

    let doc = output.contentDocument;
    doc.body.innerHTML = htmlCode;
    doc.head.innerHTML = doc.head.innerHTML + cssCode;

    let window = output.contentWindow;
    window.eval(jsCode);
}
document.getElementById("runButtonId").onclick = function() {
    run();
}
document.getElementById("htmlButtonId").onclick = function() {
   let display =  document.getElementById("htmlTA").style.visibility;
   if(display == "hidden") {
    document.getElementById("htmlTA").style.visibility = "visible";
    document.getElementById("htmlButtonId").style.backgroundColor = "grey";
   }else {
    document.getElementById("htmlTA").style.visibility = "hidden";
    document.getElementById("htmlButtonId").style.backgroundColor = "lightgrey";
   }
}
document.getElementById("cssButtonId").onclick = function() {
    let display =  document.getElementById("cssTA").style.visibility;
    if(display == "hidden") {
     document.getElementById("cssTA").style.visibility = "visible";
     document.getElementById("cssButtonId").style.backgroundColor = "grey";
    }else {
     document.getElementById("cssTA").style.visibility = "hidden";
     document.getElementById("cssButtonId").style.backgroundColor = "lightgrey";
    }
 }
 document.getElementById("jsButtonId").onclick = function() {
    let display =  document.getElementById("jsTA").style.visibility;
    if(display == "hidden") {
     document.getElementById("jsTA").style.visibility = "visible";
     document.getElementById("jsButtonId").style.backgroundColor = "grey";
    }else {
     document.getElementById("jsTA").style.visibility = "hidden";
     document.getElementById("jsButtonId").style.backgroundColor = "lightgrey";
    }
 }
 document.getElementById("resultButtonId").onclick = function() {
    let display =  document.getElementById("iframeId").style.visibility;
    if(display == "hidden") {
     document.getElementById("iframeId").style.visibility = "visible";
     document.getElementById("resultButtonId").style.backgroundColor = "grey";
    }else {
     document.getElementById("iframeId").style.visibility = "hidden";
     document.getElementById("resultButtonId").style.backgroundColor = "lightgrey";
    }
 }
  