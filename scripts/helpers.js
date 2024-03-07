export const decode = function (text = "") {
  const entities = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
  };
  return text.replace(
    /&amp;|&lt;|&gt;|&quot;|&#39;/g,
    (match) => entities[match]
  );
};

export const randomise = function (arr) {
  const randomisedAnswers = [];
  arr.slice().forEach(() => {
    let index = Math.floor(Math.random() * arr.length);
    randomisedAnswers.push(arr[index]);
    /* arr.splice(arr.indexOf(arr[index]), 1); */
  });
  return randomisedAnswers;
};
