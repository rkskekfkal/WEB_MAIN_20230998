
var jb = 'hi';
var a = 1;
var b;
b = 5;

/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
}
//console.log(c); // Error?
console.log(c_1);

let d = 5;
//let d = '갑 재할당'; // Error?
console.log(d);

const e = '상수1 접근';
//e = 5;
//const f // Error?
console.log(e);

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value; // 검색어로 설정
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    // 새 창에서 구글 검색을 수행
    window.open(googleSearchUrl, "_blank"); // 새로운 창에서 열기.
    return false;
}
    
document.getElementById("search_message").addEventListener('click', search_message);

/*
function search_message(){
    alert("검색을 수행합니다!");
}
*/
const search_message = () => {
    const c = '검색을 수행합니다';
    alert(c);
};