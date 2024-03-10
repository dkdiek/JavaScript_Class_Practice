console.log("hello");

//var, let, const

//var는 전역으로 사용할 수 있음 안쓰는게 좋다
for (var i = 0; i < 10; i++) {
  var name = "scalper";
}
console.log(name);

//let은 변수가 빈번하게 바뀌어야 할때
//const는 상수 값 변경 불가 예측 가능
//let과 const는 블럭 밖에서 사용불가

//데이터 타입
//String, Number, boolean, null, undefined

const isMale = false;
const age = 30;
const name2 = "scalper";
let money = null;
let girlFriend = undefined;

console.log(typeof name2);
//표현식 사용
console.log("my name is %s and i am %d", name2, age);
//백틱사용 템플릿 문법
console.log(`my name is ${name} and i am ${age}`);
//문자열 자르기
const animal = "tiger";
//0번째부터 두 글자 0,1
console.log(animal.substring(0, 2));

//기준으로 짜르기 배열로 출력
let fruits = "사과, 딸기, 배";
fruits = fruits.split(", ");
//콤마로 배열에 넣고 2번째 즉 배 출력
console.log(fruits[2]);

//array(js는 여러 데이터타입 혼합으로 배열 생성 가능)
const animals = ["lion", "rabbit", "monkey"];
//특정 인덱스에 추가
animals[3] = "tiger";
//마지막에 추가
animals.push("tiger");
//첫번째에 추가
animals.unshift("dog");
//마지막 하나 빼기
animals.pop();
//범위 지정해서 빼기
//0번부터 3개 스플라이스(시작인덱스,갯수)
animals.splice(0, 3);
//slice(시작인덱스,끝인덱스) 슬라이스는 원본에 수정이 아니고 결과 값을 반환해준다
animals.slice(0, 2);

//배열인지 확인
console.log(Array.isArray(animals));
//배열의 인덱스 찾기
console.log(animals.indexOf("monkey"));

//object 속성과 값 쌍을 이루는 데이터(내부에 배열, 오브젝트 등 다양하게 추가가능)
const monkey = {
  name: "kiki",
  age: 5,
  weight: 40,
  gender: "male",
  isCute: true,
  food: ["banana", "carrot"],
  home: {
    location: "zoo",
    size: "big",
    price: 3000,
  },
};
//object 값 빼는 방법
console.log(monkey["name"]);
console.log(monkey.weight);
//object 값 변경
monkey.gender = "female";

//json -데이터를 전송할때 문자열 형태로 보낼때
const monkeyJson = JSON.stringify(monkey); //object를 json화
console.log(monkeyJson);
const parseJson = JSON.parse(monkeyJson); // json을 object 형태로 parsing
console.log(parseJson);
