let text = "   HELLO WORLD       ";
result = text.trim()
console.log(result); // Output: "HELLO WORLD"
text.length; // 21
result.length; // 11


// trimStart() and trimEnd()
result = text.trimStart();
console.log(result); // Output: "HELLO WORLD       "

result = text.trimEnd();
console.log(result); // Output: "   HELLO WORLD"    
