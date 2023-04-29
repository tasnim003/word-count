var StrText=document.getElementById('text');
var word=document.querySelector('.word');
var charPrint=document.querySelector('.char');
StrText.addEventListener('keyup',function(){
	
	function WordCount(str){
	 return str.split(" ").length;
}
word.innerText=WordCount(StrText.value);


function charCount(charStr){
	return charStr.length;
}
charPrint.innerText=charCount(StrText.value);
})