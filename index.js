function shout(string) {
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string){
  console.log(string.toUpperCase())

}
function logWhisper(string){
  console.log(string.toLowerCase())
}



function sayHiToGrandma(string){
  var response = ""
if (string === "I love you, Grandma."){
  response = 'I love you, too.'
}

else if  (string === string.toLowerCase()){
response = "I can't hear you!" }


else if (string === string.toUpperCase()) {
  response = "YES INDEED!"}
  return response }
