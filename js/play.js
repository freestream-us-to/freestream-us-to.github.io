function getUrlVars() {
    var vars = {};
    var query = window.location.search.substring(1);
    var pairs = query.split("&");
    
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        vars[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }

    return vars;
}

function getUrlParam(parameter, defaultvalue) {
    var urlVars = getUrlVars();
    return urlVars.hasOwnProperty(parameter) ? urlVars[parameter] : defaultvalue;
}




var title = getUrlParam("n","Empty");
while(title.includes("%20")){
    title = title.replace("%20"," ");
}
document.getElementById("title").innerHTML = title;


var type = getUrlParam("t","Empty");
var src = getUrlParam("s","Empty");
var extra = getUrlParam("extra","Empty");
var embedlink = "";
var downloadlink = "";
var name = "";


if(type=="mega"){
    embedlink = "https://mega.nz/embed/" + src;
    downloadlink = "https://mega.nz/file/" + src;
    useadblock = false;
}
else if(type=="st"){
    embedlink = src;
    downloadlink = src;
    useadblock = true;
}
else if(type=="voe"){
    embedlink = "https://voe.sx/e/" + src;
    downloadlink = "https://voe.sx/" + src;
    useadblock = true;
}
else if(type=="vup"){
    embedlink = "https://vupload.com/e/" + src;
    downloadlink = "https://vupload.com/v/" + src;
    useadblock = true;
}
else if(type=="ds2play"){
    embedlink = "https://ds2play.com/e/" + src;
    downloadlink = "https://ds2play.com/d/" + src;
    useadblock = true;
}
else if(type=="vidoza"){
    embedlink = "https://vidoza.net/embed-" + src + ".html";
    downloadlink = "https://vidoza.net/embed-" + src + ".html";
    useadblock = true;
}
else if(type=="mfire"){
    embedlink = src;
    downloadlink = "https://www.mediafire.com/file/" + src;
    useadblock = true;
} 
else if(type=="Empty"){
    embedlink = src;
    downloadlink = src;
    useadblock = true;
}
else if(type=="undefined"){
    embedlink = src;
    downloadlink = src;
    useadblock = true;
}
else{
    embedlink = src;
    downloadlink = src;
    useadblock = true;
}



document.getElementById("iframe").src = embedlink;

if(type=="mfire"){
    document.getElementById("title").innerHTML = "NUR als Download: " + title;
}

document.getElementById('download-button').addEventListener('click', function() {
    window.open(downloadlink, "_blank");
});