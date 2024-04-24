var personName = "misbah ahmed";
//shows the name in all small letters.
console.log(personName.toLowerCase());
//shows the name in all big letters.
console.log(personName.toUpperCase());
//shows the name with the first big letter.
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
