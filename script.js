const api = "2fd88f6b8584e21bb703d4719e78a7383d2c9369";
const btnEl = document.getElementById("btn");
const emoji_nameEl = document.getElementById("emoji-name");

const emoji = [];


async function Creatamoji() {
  let response = await fetch(
    "https://emoji-api.com/emojis?access_key= 2fd88f6b8584e21bb703d4719e78a7383d2c9369"
  );

   data = await response.json();
   
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}



btnEl.addEventListener("click", () => {
    Creatamoji();
  const random = Math.floor(Math.random()* emoji.length);
  btnEl.innerText = emoji[random].emojiName;
  emoji_nameEl.innerText=emoji[random].emojiCode;

});
