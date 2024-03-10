// == 데이터타입 비교 안함 값만 같으면 true ===데이터타입까지 비교
//if 조건문
const num = 10;
if (num < 10) {
  console.log("10보다 작습니다.");
} else if (num === 10) {
  console.log("같다");
} else {
  console.log("작다");
}

//3항연산자 조건?참 실행:거짓 실행;
num > 10 ? true : false;

//스위치 케이스문
const animal = "lion";
switch (animal) {
  case "lion":
    console.log("사자입니다");
    break;
  case "monkey":
    console.log("원숭이입니다");
    break;
  default:
    console.log("동물이 아닙니다");
    break;
}

//반복문1
const animals = [
  { name: "lion", size: "big" },
  { name: "monkey", size: "medium" },
  { name: "dog", size: "small" },
];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//반복문2
for (let animal of animals) {
  console.log(animal.name);
}
//while문
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
