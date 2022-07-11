function none_visibility(id) {
    let e = document.getElementById(id);
    e.style.display = 'none';
}

function block_visibility(id) {
    let e = document.getElementById(id);
    e.style.display = 'block';
}

function hide_all() {
    let faelleids = ['fall1', 'fall2', 'fall3', 'fall4', 'fall5', 'fall6'];
    for (let i = 0; i < faelleids.length; ++i) {
        none_visibility(faelleids[i]);
    }
}

function show_descriptions(id) {
    if (getComputedStyle(document.getElementById(id)).display === 'block') {
        hide_all();
    }
    else {
        hide_all();
        block_visibility(id);
    }
    let e = $(event.target)[0];
    highlightimg(e);
}

function highlightimg(img) {
    unlightall(img.id);
    let e = img;
    if(e.classList.contains('imgtransformed')) {
        e.classList.remove('imgtransformed');
    }
    else {
        e.classList.add('imgtransformed');
    }


}

function unlightall(id) {
    let bildids = ['bild1', 'bild2', 'bild3', 'bild4', 'bild5', 'bild6'];
    for (let i = 0; i < bildids.length; ++i) {
        if(bildids[i] != id) {
            let e = document.getElementById(bildids[i]);
            if(e.classList.contains('imgtransformed')) {
                e.classList.remove('imgtransformed');
            }
        }

    }
}

function dialogbox() {
    $( "#dialog" ).dialog({width: '21vw'});
}
