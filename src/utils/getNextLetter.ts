const getNextLetter = (letter: string) => {
  return letter.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
    var c = a.charCodeAt(0);
    switch (c) {
      case 90:
        return 'A';
      case 122:
        return 'a';
      default:
        return String.fromCharCode(++c);
    }
  });
};

export default getNextLetter;
