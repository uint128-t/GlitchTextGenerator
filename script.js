var zalgo="̴̵̶̷̸̡̢̧̨̛̖̗̘̙̜̝̞̟̠̣̤̥̦̩̪̫̬̭̮̯̰̱̲̳̹̺̻̼͇̳͇͇͇͉͍͎̀́̂̃̄̅̆̇̈̉̊̋̌̍̎̏̐̑̒̓̔̽̾̿̀̀́̓̈́͊͋͌̕̚ͅ͏͓͔͕͖͙͚͐͑͒͗ͣͤͥͦͧͨͩͪͫͬͭͮͯ҃҄҅҆҇͘͜͟͢͝͞͠͡҈҉᷂᷊᷿͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈͈᷀᷁᷃᷄᷅᷆᷇᷉᷾⃰︠︡︢͂͆͆͂͂͆͛͛͆͛͆͛͆͂͆͛͆͆͆͂͆͛͂͛͆͆͆͂͂͂͂͂͛͛͛͂͛͛͂͛͆͛͂͛͆͂͂͛͛͆͂͂͆͛͆͂͆͂͆͛͆͆͂͂͛͆͆͛͂͆͆͆͛͂͆͆͂͆͂͂͂͂͛͛͆͆͛͛͛"
var intext=document.getElementById("in")
var outtext=document.getElementById("out")
function generate(){
  let text=intext.value
  let newtext=""
  for (char of text){
    let nc=char
    amount=parseInt(document.getElementById("glitchamount").value)
    for (let c=0;c<amount;c++){
      let ix=Math.floor(Math.random()*zalgo.length)
      nc+=zalgo[ix]
    }
    newtext+=nc
  }
  outtext.value=newtext
}
function ungen(){
  let text=outtext.value
  newtext=""
  for (char of text){
    if (zalgo.indexOf(char) == -1){
      newtext+=char
    }
  }
  intext.value=newtext
}

function copy(){
  outtext.select()
  outtext.setSelectionRange(0,9999999)
  document.execCommand("copy")
  outtext.setSelectionRange(0,0,"none")
}
// document.getElementById("in").addEventListener("keydown",generate)
// document.getElementById("glitchamount").addEventListener("onclick",generate)
