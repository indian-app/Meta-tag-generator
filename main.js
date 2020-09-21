function Generate() {
    var title = document.getElementById('title').value;
    var desc = document.getElementById('desc').value;
    var keyword = document.getElementById('keyword').value;
    var url = document.getElementById('url').value;
    var imgurl = document.getElementById('imgurl').value;

    $('#output').val('<title>' + title + '</title>' + '\n' + '<meta name="keywords" content="' + keyword + '"/>' + '\n' + '<meta name="description" content="' + desc + '"/>' + '\n' + '<meta name="url" content="' + url + '">' + '\n' + '<meta name="robots" content "index, follow">' + '\n' + '<meta name="twitter:card" content="' + desc + '"/></meta>'+ '\n' +'<meta name="og:title" content="' + title + '"/>' + '\n' + '<meta name="og:description" content="' + desc + '"/>' + '\n' + '<meta name="og:url" content="' + url + '"/>' + '\n' + '<link rel="canonical" href="' + url + '" />' + '\n' + '<meta name="og:image" content="' + imgurl + '"/>');
}

function count_title() {
    var title_count = document.getElementById('title').value.length;
    document.getElementById('title_len').value = title_count + " character.";

}

function count_desc() {
    var desc_count = document.getElementById('desc').value.length;
    document.getElementById('desc_len').value = desc_count + " character.";
}