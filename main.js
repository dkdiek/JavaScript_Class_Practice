const coronaCases = [
  { name: "Seoul", case: 1000 },
  { name: "Daejeon", case: 1200 },
  { name: "Daegu", case: 1400 },
  { name: "Busan", case: 1500 },
  { name: "Gwangju", case: 1100 },
];

//forEach, map, filter, reduce
//foreach(index도 출력가능)
coronaCases.forEach((corona, index) => {
  console.log(corona, index);
});
//map - 배열을 가공하여 새로운 형태의 배열을 만들때
//name만으로 새로운 배열
const coronaCities = coronaCases.map((corona) => {
  return corona.name;
});
//filter - 배열에서 특정한 값을 가진 데이터를 필터링
const dangerousCity = coronaCases.filter(function (corona, index) {
  return corona.case > 1200; //조건에 맞는 데이터만 출력
});
console.log(dangerousCity);

//reduce - 배열 값들을 합치거나 더한 새로운 값으로 재가공 할때
//처음에 object가 들어가는 게 싫다면,0으로 기본 값 저장
const totalCases = coronaCases.reduce((acc, cur) => {
  return acc + cur.case;
}, 0);
console.log(totalCases);
