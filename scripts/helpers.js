export const decode = function (text = "") {
  const doc = new DOMParser().parseFromString(text, "text/html");
  return doc.documentElement.textContent;
};

export const randomise = function (arr) {
  const randomisedAnswers = [];
  arr.slice().forEach(() => {
    let index = Math.floor(Math.random() * arr.length);
    randomisedAnswers.push(arr[index]);
    arr.splice(arr.indexOf(arr[index]), 1);
  });
  return randomisedAnswers;
};
