function piramid(rows) {
    for (let i = 0; i < rows; i++){
        var output = '';
        for (let j = 0; j < rows - i; j++) output += ' '; //membuat spasi
        for (let k = 0; k <= i; k++) output += '* '; //membuat segitiga piramid
        console.log(output);
    }
}
piramid(5);