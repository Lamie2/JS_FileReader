let fileInput = document.getElementById('fileInput');
let img = document.createElement('img');

fileInput.addEventListener('change',function(){
    
    [...this.files].forEach(file=>{
        
            let reader = new FileReader();

            reader.onload = function(){  
                img.setAttribute('src',reader.result);

                document.body.appendChild(img);
                btn.style.display= 'block';
            }
    
            reader.readAsDataURL(file);
              
    })
})


let imgUploadIcon = document.getElementById('imgUploadIcon');

imgUploadIcon.addEventListener('click',function(e){
    fileInput.click();
})


let btn = document.getElementById('btn')
btn.addEventListener('click', function(e){
    img.style.display= 'none';
    btn.style.display= 'none';

})