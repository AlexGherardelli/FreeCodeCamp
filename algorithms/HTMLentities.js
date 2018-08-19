// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.k
function convertHTML(str) {

// str.replace(regexp|substr, newSubstr|function)
var entities = str.replace(/&/i, "&amp;").replace(/"/gi, "&​quot;").replace(/</gi,"&​lt;").replace(/>/gi, "&​gt;").replace(/'/gi, "&​apos;");
return entities;

}
convertHTML("Shindler's List")
