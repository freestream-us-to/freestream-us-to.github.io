const urlParams = new URLSearchParams(window.location.search);

var title = decodeURIComponent(urlParams.get('n'));
document.getElementById("title").innerHTML = title;


var type = decodeURIComponent(urlParams.get('t'));
var src = decodeURIComponent(urlParams.get('s'));
var extra = "Empty";
if(urlParams.get('extra')){
    extra = decodeURIComponent(urlParams.get('extra'));
}
var embedlink = "";
var downloadlink = "";
var name = "";


if(type=="mega"){
    embedlink = "https://mega.nz/embed/" + src;
    downloadlink = "https://mega.nz/file/" + src;
}
else if(type=="voe"){
    embedlink = "https://voe.sx/e/" + src;
    downloadlink = "https://voe.sx/" + src + "/download";
}
else if(type=="vup"){
    embedlink = "https://vupload.com/e/" + src;
    downloadlink = "https://vupload.com/v/" + src;
}
else if(type=="ds2play"){
    embedlink = "https://ds2play.com/e/" + src;
    downloadlink = "https://ds2play.com/d/" + src;
}
else if(type=="vidoza"){
    embedlink = "https://vidoza.net/embed-" + src + ".html";
    downloadlink = "https://dirpy.com/studio?url=https://vidoza.net/embed-" + src + ".html";
}
else if(type=="streamtape"){
    embedlink = "https://streamtape.com/e/" + src;
    downloadlink = "https://streamtape.com/v/" + src;
}
else if(type=="supervideo"){
    embedlink = "https://supervideo.tv/e/" + src;
    downloadlink = "https://supervideo.tv/dl?op=download_orig&id=" + src;
}
else if(type=="mfire"){
    embedlink = "/assets/error.mp4";
    downloadlink = "https://www.mediafire.com/file/" + src;
}
else if(type=="yt"){
    embedlink = "https://www.youtube.com/embed/" + src;
    downloadlink = "https://dirpy.com/studio?url=https://www.youtube.com/watch?v=" + src;
}
else{
    embedlink = "/assets/error.mp4";
    downloadlink = "";
}


document.getElementById("iframe").src = embedlink;


if(type=="mfire"){
    let tmptitle = document.getElementById("title").innerHTML;
    document.getElementById("title").innerHTML = "NUR als Download: " + tmptitle;
}

if(extra != "Empty"){
    let tmptitle = document.getElementById("title").innerHTML;
    document.getElementById("title").innerHTML = tmptitle + " - " + extra;
}

document.getElementById('download-button').addEventListener('click', function() {
    window.open(downloadlink, "_blank");
});