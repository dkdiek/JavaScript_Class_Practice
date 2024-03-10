const item1 = 3000;
const item2 = 2000;
const item3 = 5000;
const loyalty = 1000;

console.log(showPrice(item1));
showPrice(item2);
showPrice(item3);

// function
/* 이 방식은 함수 선언식입니다. 함수 이름(showPrice)이 주어지고,
그 다음에 매개변수(item)가 따라옵니다. 이 함수는 호출될 때마다 새로운 showPrice 함수 인스턴스가 생성됩니다.
이 방식은 this 키워드가 동적으로 바인딩되며, 자체적으로 this 값을 가지게 됩니다.
이 방식은 일반적으로 객체의 메서드로 사용될 때 유용합니다. 
window에 등록된다. 함수가 선언되기 전 위에 작성해도 작동한다.
*/
function showPrice(item) {
  return item + loyalty;
}
//es6 화살표 함수
/* 이 방식은 ES6에서 도입된 화살표 함수입니다. 화살표 함수는 function 키워드 대신 =>를 사용하여 정의됩니다.
이 방식은 함수 표현식입니다. 변수(showPrice)에 함수가 할당됩니다. 화살표 함수는 항상 익명입니다.
화살표 함수는 자신의 this 값을 갖지 않고, 상위 스코프의 this 값을 그대로 사용합니다.
이는 화살표 함수가 생성될 때의 스코프에서 this 값을 가져와서 사용한다는 의미입니다.
window에 등록X. 함수가 선언되기 전 위에 작성하면 초기화 에러가 난다.
렉시컬 스코프
 */
const showPrice2 = (item) => {
  return item + loyalty;
};
//
const obj = {
  name: "test",
  test1: function () {
    console.log(this);
  },
  test2: () => {
    console.log(this);
  },
};

//this가 객체 자신을 가리키고
obj.test1();
//화살표 함수는 this가 윈도우를 가리킨다
obj.test2();

//아래처럼 하면 둘다 윈도우를 가리킨다 즉 화살표 함수는 항상 고정된 스코프를 가진다
const a = obj.test1;
const b = obj.test2;
a();
b();
