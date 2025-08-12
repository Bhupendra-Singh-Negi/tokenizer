const textEncode = document.getElementById('textEncode');
const textDecode = document.getElementById('textDecode');
const encodeButton = document.getElementById('encodeButton');
const decodeButton = document.getElementById('decodeButton');

encodeButton.addEventListener("click", () => {
    const str = textEncode.value;
    const arr2=[];
    for(let i=0;i<str.length;i++){
        arr2.push(str.charCodeAt(i));
    }
    const encoded=arr2.join(" ");
    textDecode.value=encoded;
})

decodeButton.addEventListener("click",()=>{
    const str= textDecode.value;
    const arr2=str.split(" ");
    const deconded=arr2.map(num => String.fromCharCode(num)).join("");
    textEncode.value=deconded;
})

// show vocabulary
const vocabButton = document.getElementById('vocabButton');
const vocabDisplay = document.getElementById('vocabDisplay');

    vocabButton.addEventListener('click', () => {
        const isHidden = vocabDisplay.classList.contains("hidden");
        if( isHidden ) {
        vocabDisplay.innerHTML = ''; // clear previous content

        for (let i = 32; i <= 126; i++) {
            const char = i === 32 ? 'Space (␣)' : String.fromCharCode(i);
            // Create a span for character with styling
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.className = 'bg-indigo-200 rounded px-2 py-1 text-center';
            
        // Create a span for ASCII code
        const codeSpan = document.createElement('span');
        codeSpan.textContent = i;
        codeSpan.className = 'bg-indigo-100 rounded px-2 py-1 text-center';
        
        vocabDisplay.appendChild(charSpan);
        vocabDisplay.appendChild(codeSpan);
    }
        vocabDisplay.classList.remove("hidden");
        vocabButton.textContent = "Hide Vocabulary";
    }else{
        vocabDisplay.classList.add("hidden");
        vocabButton.textContent = "Show Vocabulary";
    }
    });