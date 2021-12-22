import SOCfinalGrade from "./main.js";
//👉 Write your tests below here:

/*
School of Code Grade

takes inputs of (project, daily tests)
project score - 90+
daily test completed- 40-48
return final grade - "A - You're getting hired"

project score - 80-89
daily test completed- 30-39
return final grade - "B - You're doing well"

project score - 60-79
daily test completed- 20-29
return final grade - "C - Come to code camp"

project score - Less than 60
daily test completed- Less than 20
return final grade - "F - Do your recap tasks again"
*/

test("Given a project score, and a daily test score, SOCfinalGrade function returns the correct final grade A based on these criteria", () => {
  //arrange
  let project = 100;
  let dailytests = 48;
  let expected = "A - You're getting hired";

  //act
  let actual = SOCfinalGrade(project, dailytests);

  //assert
  expect(actual).toBe(expected);
});

// testing for B Grade
test("Given a project score, and a daily test score, SOCfinalGrade function returns the correct final grade B based on these criteria", () => {
  //arrange
  let project = 82;
  let dailytests = 35;
  let expected = "B - You're doing well";

  //act
  let actual = SOCfinalGrade(project, dailytests);

  //assert
  expect(actual).toBe(expected);
});

// testing for C Grade
test("Given a project score, and a daily test score, SOCfinalGrade function returns the correct final grade C based on these criteria", () => {
  //arrange
  let project = 63;
  let dailytests = 23;
  let expected = "C - Come to code camp";

  //act
  let actual = SOCfinalGrade(project, dailytests);

  //assert
  expect(actual).toBe(expected);
});

// testing for F Grade
test("Given a project score, and a daily test score, SOCfinalGrade function returns the correct final grade F based on these criteria", () => {
  //arrange
  let project = 45;
  let dailytests = 15;
  let expected = "F - Do your recap tasks again";

  //act
  let actual = SOCfinalGrade(project, dailytests);

  //assert
  expect(actual).toBe(expected);
});
