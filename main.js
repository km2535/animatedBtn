// active를 태그에 붙였다 삭제하면서 style 속성을 바꿀꺼임 속성이 바뀌면 움직인다.
//list태그를 list 변수에 담는다.(All은 배열형태로 담는다.)
let list = document.querySelectorAll('.list')
// 함수를 만든다.(addEvent쓸때 유용함.)
function set_active_class(){
    //list를 forEach로 반복시킨다. 
    list.forEach((item) =>
    //item들은 1~5번째 list 태그들이다. 
    //list태그에 active가 있다면 제거 할 것이다. 
    item.classList.remove('active'));
    //아래의 이벤트 핸들러에서 설정된 값을 받는다. 
    //해당 li태그에 active를 추가한다. 
    this.classList.add('active')    
    }
    //list태그들을 반복시킨다.
list.forEach((item) =>
// item에는 li태그의 내용들이 담겨있다. 
// item 태그를 이벤트 핸들러로 마우스오버할때 함수를 실행한다. 이때 마우스 오버된 값이 함수의 this로 넘어간다.
    item.addEventListener('mouseover', set_active_class))