const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const filename = document.querySelector('#filename');
const outputPath = document.querySelector('#output-path');
const widthInput = document.querySelector('#width');
const heightInput = document.querySelector('#height');

function imageUpload (e){

    const file = e.target.files[0];
    if(!isİmage(file)){
        console.log('Lütfen doğru uzantılı bir dosya yükleyiniz..');
        return;
    // biome-ignore lint/style/noUselessElse: <explanation>
    }else{
        console.log('Başarılı bir şekilde dosya yüklendi');
        form.style.display = 'block';
        filename.parentElement.style.display = 'block';
        outputPath.parentElement.style.display = 'block';

        filename.innerText = file.name;

        const image = new Image();
        image.src=URL.createObjectURL(file);
        image.onload = function(){
           widthInput.value=this.width;
           heightInput.value=this.height; 
        };

    }

}

console.log(versions.node())

function isİmage(file){
    const extensions = ['image/gif','image/jpg','image/jpeg'];
    return file && extensions.includes(file.type);
}

img.addEventListener('change',imageUpload);