let eng = [
    { name: "The Kill", duration: "3:30" },
    { name: "She Looks So Perfect", duration: "2:45" },
    { name: "Happy New Year", duration: "4:15" },
    { name: "Back in Black", duration: "3:00" },
    { name: "Highway To Hell", duration: "5:20" },
    { name: "What are you want from me", duration: "3:50" },
    { name: "Rollin In The Deep", duration: "2:15" },
    { name: "Set Fire To The Rain", duration: "4:10" },
    { name: "Someone Like You", duration: "2:30" },
    { name: "Hello", duration: "3:25" },
    { name: "Dream On", duration: "4:55" },
    { name: "I Don’t Want To Miss A Thing", duration: "2:40" },
    { name: "Faded", duration: "5:05" },
    { name: "Mr. Saxobeat", duration: "3:15" },
    { name: "No Roots", duration: "4:40" },
    { name: "Valerie", duration: "2:20" },
    { name: "Left Outside Alone", duration: "3:35" },
    { name: "We don't have to dance", duration: "4:25" },
    { name: "House of rising sun", duration: "2:55" },
    { name: "Life Burns", duration: "5:10" },
    { name: "Cambodia", duration: "5:05" },
    { name: "Sweet But Psycho", duration: "3:15" },
    { name: "Salt", duration: "4:40" },
    { name: "King and Queens", duration: "2:20" },
    { name: "Waiting for love", duration: "3:35", extra: 'holidays' },
    { name: "Skaterboy", duration: "4:25" },
    { name: "Girlfriend", duration: "2:55" },
    { name: "Larger Than Life", duration: "5:10" },
    { name: "Everybody", duration: "5:05" },
    { name: "If i were a boy", duration: "3:15" },
    { name: "Crazy In Love", duration: "4:40" },
    { name: "Halo", duration: "2:20" },
    { name: "Rock Around the Clock", duration: "3:35" },
    { name: "Bad Guy", duration: "4:25" },
    { name: "Rebel Yell", duration: "2:55" },
    { name: "I gotta Feeling", duration: "5:10" },
    { name: "Shut Up", duration: "5:05" },
    { name: "Song 2", duration: "3:15" },
    { name: "Jingle Bell Rock", duration: "4:40" },
    { name: "Freestyler", duration: "2:20" },
    { name: "It's My Life", duration: "3:35" },
    { name: "Living on a Prayer", duration: "4:25" },
    { name: "Toxic", duration: "2:55" },
    { name: "24K Magic", duration: "5:10" },
    { name: "Grenade", duration: "5:05" },
    { name: "Uptown Funk", duration: "3:15", extra: 'holidays' },
    { name: "Runaway baby", duration: "4:40" },
    { name: "Loked out of Heaven", duration: "2:20" },
    { name: "Treasure", duration: "3:35" },
    { name: "Thats what i like", duration: "4:25" },
    { name: "Lazy Song", duration: "2:55" },
    { name: "Just the way you are", duration: "5:10" },
    { name: "Marry you", duration: "5:05", extra: 'holidays'},
    { name: "Aint no sunshine", duration: "3:15" },
    { name: "How Deep Is Your Love", duration: "4:40" },
    { name: "Giant", duration: "2:20" },
    { name: "Havana", duration: "3:35" },
    { name: "Senorita", duration: "4:25" },
    { name: "Sub pielea mea (Eroina)", duration: "2:55" },
    { name: "Corazon", duration: "5:10" },
    { name: "Call Me Maybe", duration: "5:05" },
    { name: "Last Christmas (Dance Remix)", duration: "3:15" },
    { name: "My Heart Will Go on", duration: "4:40" },
    { name: "Something just like this", duration: "2:20" },
    { name: "Attention", duration: "3:35" },
    { name: "How long", duration: "4:25" },
    { name: "One Call away", duration: "2:55" },
    { name: "River", duration: "5:10" },
    { name: "See you Again", duration: "5:05" },
    { name: "Tic Tic Tac (Tambov)", duration: "3:15" },
    { name: "Wicked Game", duration: "4:40" },
    { name: "Hurt", duration: "2:20" },
    { name: "Candyman", duration: "3:35" },
    { name: "No Madonna", duration: "4:25" },
    { name: "Johnny B. Goode", duration: "2:55" },
    { name: "Rockabye", duration: "5:10" },
    { name: "Viva la Vida", duration: "5:05" },
    { name: "Adventure of a lifetime", duration: "3:15" },
    { name: "Paradise", duration: "4:40" },
    { name: "Hymn for the weekend", duration: "2:20" },
    { name: "Dura", duration: "3:35" },
    { name: "Despacito", duration: "4:25" },
    { name: "Love Don’t Let Me Go", duration: "2:55" },
    { name: "Say My Name", duration: "5:10" },
    { name: "Hey Mama", duration: "5:05" },
    { name: "Personal Jesus", duration: "3:15" },
    { name: "Sound of Silence", duration: "4:40" },
    { name: "Cake By The Ocean", duration: "2:20" },
    { name: "Body Moves", duration: "3:35" },
    { name: "Let the bodies hit the floor", duration: "4:25" },
    { name: "New Rules", duration: "2:55" },
    { name: "Don`t Start Now", duration: "5:10" },
    { name: "Levitation", duration: "5:05" },
    { name: "Mercy", duration: "3:15" },
    { name: "Hotel California", duration: "4:40" },
    { name: "September", duration: "2:20" },
    { name: "Photograph", duration: "3:35" },
    { name: "Shape Of You", duration: "4:25" },
    { name: "Shivers", duration: "2:55" },
    { name: "Bad Habits", duration: "5:10" },
    { name: "Blow", duration: "5:05" },
    { name: "Summertime", duration: "3:15" },
    { name: "Ex's And Oh's", duration: "4:40" },
    { name: "Love Me Like You Do", duration: "2:20" },
    { name: "Sorry Seems To Be", duration: "3:35" },
    { name: "Merry Christmas", duration: "4:25" },
    { name: "Little Less Conversation", duration: "2:55" },
    { name: "Blue Suede Shoes | Jailhouse Rock", duration: "5:10" },
    { name: "Corazon De Melao", duration: "5:05" },
    { name: "Tears From The Moon", duration: "3:15" },
    { name: "Final Countdown", duration: "4:40" },
    { name: "Sweet Dreams", duration: "2:20" },
    { name: "My Immortal", duration: "3:35" },
    { name: "Bring Me To Life", duration: "4:25" },
    { name: "Uma Thurman", duration: "2:55" },
    { name: "My songs know what you did in the dark", duration: "5:10" },
    { name: "Rocketeer", duration: "5:05" },
    { name: "Ain’t Nobody", duration: "3:15" },
    { name: "Cupid", duration: "4:40" },
    { name: "Finnish Polka", duration: "2:20" },
    { name: "Handsclap", duration: "3:35" },
    { name: "Sax", duration: "4:25" },
    { name: "Yeah! + Low mashup", duration: "2:55" },
    { name: "I don`t like it, I love it", duration: "5:10" },
    { name: "Hangover", duration: "5:05" },
    { name: "Toca Toca", duration: "3:15" },
    { name: "Lemon Tree", duration: "4:40" },
    { name: "Walking By Myself", duration: "2:20" },
    { name: "It's Raining Men", duration: "3:35" },
    { name: "Black sheep", duration: "4:25" },
    { name: "I Will Survive", duration: "2:55" },
    { name: "Crazy", duration: "5:10" },
    { name: "Feel Good inc", duration: "5:05" },
    { name: "What is love", duration: "3:15" },
    { name: "Hit The Road Jack", duration: "4:40" },
    { name: "Can`t take my Eye off you (I Love You Baby)", duration: "2:20" },
    { name: "Vehicle", duration: "3:35" },
    { name: "Believer", duration: "4:25" },
    { name: "Natural", duration: "2:55" },
    { name: "La la long", duration: "5:10" },
    { name: "Lil Mama", duration: "5:05" },
    { name: "I feel good", duration: "3:15" },
    { name: "Domino", duration: "4:40" },
    { name: "Price tag", duration: "2:20" },
    { name: "Bang Bang", duration: "3:35" },
    { name: "I hate myself for loving you", duration: "4:25" },
    { name: "I love rock-n-roll |We will rock you", duration: "2:55" },
    { name: "I love you", duration: "5:10" },
    { name: "Can you love me again", duration: "5:05" },
    { name: "Blame", duration: "3:15" },
    { name: "Only Human", duration: "4:40" },
    { name: "Sorry", duration: "2:20" },
    { name: "Baby", duration: "3:35" },
    { name: "Let me love you", duration: "4:25" },
    { name: "Love Yourself", duration: "2:55" },
    { name: "Stay", duration: "5:10" },
    { name: "Can't Stop This Feeling", duration: "5:05" },
    { name: "Castle in the Snow", duration: "3:15" },
    { name: "Hot-n-Cold", duration: "4:40", extra: 'christmas' },
    { name: "Roar", duration: "2:20", extra: 'christmas' },
    { name: "Dark Horse", duration: "3:35", extra: 'christmas'},
];

let chinese = [
  { name: "夜空中最亮的星 | The Brightest Star in the Night Sky", duration: "3:30"},
  { name: "You Took My Heart Away", duration: "2:45" },
  { name: "我的秘密 | My Secret", duration: "4:15" },
  { name: "喜欢你 | Like You (Beyond cover)", duration: "3:00", extra: 'holidays'},
  { name: "少年 | Shao Nian | Youngster", duration: "5:20", extra: 'holidays'},
  { name: "突然想起你 | Suddenly Thinking of you", duration: "3:50" },
  { name: "你的酒馆对我打了烊 | Your Bar is Close to Me", duration: "2:15" },
  { name: "爱不爱我 | Do You love Me", duration: "4:10" },
  { name: "情深深雨濛濛 | Rain", duration: "2:30" },
  { name: "后来 | Afterwards", duration: "3:25" },
  { name: "东西 | Things", duration: "4:55" },
  { name: "Mojito", duration: "2:40" },
  { name: "海阔天空 | The Whole Wide World", duration: "5:05", extra: 'holidays' },
  { name: "你一定要幸福 | Happiness", duration: "3:15" },
  { name: "I Love You", duration: "4:40" },
  { name: "一生听爱 ｜ Life is listening to love", duration: "2:20" },
  { name: "不再犹豫 ｜No longer hesitate", duration: "3:35" },
  { name: "让我欢喜让我忧| Make Me Happy, Make Me Worry", duration: "4:25" },
  { name: "改变自己 | Change Yourself", duration: "2:55" },
  { name: "讲真的 | Tell the Truth", duration: "5:10" },
  { name: "自然醒  | Woke Up", duration: "5:05" },
  { name: "大风吹 | The Wind Blows", duration: "3:15" },
  { name: "红色高跟鞋 | Red High Heels", duration: "4:40" },
  { name: "甄魔鬼中的天使 | The Devil From Heaven", duration: "2:20" },
  { name: "月亮代表我的心 | Moon Heart", duration: "3:35" },
  { name: "隐形的翅膀 | Invisible Wings", duration: "4:25" },
  { name: "爱就一个字| Love is just a Word", duration: "2:55" },
  { name: "嘉宾 | Guest", duration: "5:10" },
  { name: "Cookie Can", duration: "5:05" },
  { name: "但愿人长久 | Long Live", duration: "3:15" },
  { name: "失恋阵线联盟 | Lost love Alliance", duration: "4:40" },
  { name: "你的答案 | Your answer", duration: "2:20" },
  { name: "⽉半⼩夜曲 | Moon Serenade", duration: "3:35" },
  { name: "恭喜发财 | Gong Xi Fa Cai", duration: "4:25", extra: 'chinNewYear' },
  { name: "说散就散 | If you say you leave", duration: "2:55" },
  { name: "恋爱ing | LOVE-ing", duration: "5:10" },
  { name: "愛要坦蕩蕩 | Love must be generous", duration: "5:05" },
  { name: "漠河舞厅  | MoHe Ballroom", duration: "3:15" },
  { name: "张国荣 (Leslie Cheung) — Monica", duration: "4:40" },
  { name: "张敬轩 — 只是太爱你 （Love you so much）", duration: "2:20" },
  { name: "陳奕迅 (Eason Chan) —  孤勇者 （Lonely Warrior）", duration: "3:35", extra: 'holidays' },
  { name: "Mike — 初恋 （First love）", duration: "4:25" },
  { name: "周蕙 — 不想让你知道（Don’t want you to know）", duration: "2:55" },
  { name: "韩红 — 青春（Youth）", duration: "2:30" },
  { name: "老狼 — 同桌的你 （My deskmate）", duration: "3:42" },
  { name: "许冠杰 — 財神到 （Coi San Dou， 春节 special）", duration: "4:54", extra: 'chinNewYear' },
  { name: "新裤子 —  你要跳舞吗 （Do you want to dance?)", duration: "6:06" },
  { name: "张艾嘉 — 爱的代价 (The price of love)", duration: "7:18" },
  { name: "梦然 — 是你 （Shi Ni)", duration: "8:30" },
  { name: "G.E.M. — 光年之外 （Light years away）", duration: "9:42" },
  { name: "告五人 (Accusefive) — 爱人错过 （Somewhere in time）", duration: "10:54" },
];

function counter(timer, sets, selectedAttributes) {
  let resultList = [];
  const songsGap = 10;

  // filtering arrays without extra property
  let filteredEngArr = eng.filter(song => !song.extra);
  let filteredChinArr = chinese.filter(song => !song.extra);;

   // filtering arrays with extra property based on attributes checked in HTML
  if (selectedAttributes.length !== 0) {
    for (let i = 0; i < selectedAttributes.length; i++) {
      let attributeEng = eng.filter(song => song.extra === selectedAttributes[i]);
      let attributeChin = chinese.filter(song => song.extra === selectedAttributes[i]);

      filteredEngArr.push(...attributeEng);
      filteredChinArr.push(...attributeChin);
    }
  }

  // Loop through the number of sets specified
  for (let set = 0; set < sets; set++) {
    let count = timer * 60;
    let result = [];

        // Create a shuffled copy of the English and Chinese song arrays
    let sortedEng = [...filteredEngArr].sort(() => Math.random() - 0.5);
    let sortedChin = [...filteredChinArr].sort(() => Math.random() - 0.5);

    // Sets to keep track of selected songs to avoid repetition
    let selectedEng = new Set();
    let selectedChin = new Set();
    let attributeCounter = 0;

     // Loop until the set length is reached
    while (count > 0) {
      attributeCounter ++;

      console.log(selectedAttributes);

      // Looking in English array
      // let findIndexEng = sortedEng.findIndex(value => converterToSeconds(value.duration) <= count);

      // if (findIndexEng === -1) {
      //   break;
      // }
// Experimental code ***********************************************************************************
  let findIndexEng; // Default value

  if (selectedAttributes.length === 1 && attributeCounter === 2 && selectedAttributes != "chinNewYear") {
    findIndexEng = sortedEng.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[0]);
  } else if (selectedAttributes.length === 2 && attributeCounter === 2) {
    findIndexEng = sortedEng.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[0]);
  } else if (selectedAttributes.length === 2 && attributeCounter === 3 && selectedAttributes[1] != "chinNewYear") {
    findIndexEng = sortedEng.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[1]);
  } else {
    findIndexEng = sortedEng.findIndex(value => converterToSeconds(value.duration) <= count);
  }

  if (findIndexEng === -1) {
    break;
  }

  let findEng = sortedEng[findIndexEng];
  if (!selectedEng.has(findEng.name)) {
    result.push(findEng);
    count -= converterToSeconds(findEng.duration) + songsGap;
    selectedEng.add(findEng.name);
  }


//experimental code *******************************************************************************************
      // Check if the song is not already selected to avoid repetition
      // let findEng = sortedEng[findIndexEng];
      // if (!selectedEng.has(findEng.name)) {
      //   result.push(findEng);
      //   count -= converterToSeconds(findEng.duration) + songsGap;
      //   selectedEng.add(findEng.name);
      // }

      // Remove selected song from sortedEng array
      sortedEng.splice(findIndexEng, 1);

      // Looking in Chinese array
      let findIndexChinese; // Default value

      if (selectedAttributes.length === 1 && attributeCounter === 2 && selectedAttributes != "christmas") {
        findIndexChinese = sortedChin.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[0]);
      } else if (selectedAttributes.length === 2 && attributeCounter === 2) {
        findIndexChinese = sortedChin.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[0]);
      } else if (selectedAttributes.length === 2 && attributeCounter === 3 && selectedAttributes[1] != "christmas") {
        findIndexChinese = sortedChin.findIndex(value => converterToSeconds(value.duration) <= count && value.extra === selectedAttributes[1]);
      } else {
        findIndexChinese = sortedChin.findIndex(value => converterToSeconds(value.duration) <= count);
      }
    
      if (findIndexChinese === -1) {
        break;
      }
    
      let findChin = sortedEng[findIndexEng];
      if (!selectedEng.has(findChin.name)) {
        result.push(findChin);
        count -= converterToSeconds(findChin.duration) + songsGap;
        selectedEng.add(findChin.name);
      }

      sortedChin.splice(findIndexChinese, 1);
    }

    resultList.push(result);
  }

  let songsGenerated = '';
  let totalSetLength = 0;


  for (let set = 0; set < resultList.length; set++) {
    songsGenerated += `Set ${set + 1}:<br><br>`;
    let gapCounter = 0;
    for (let i = 0; i < resultList[set].length; i++) {
      songsGenerated += `${i + 1}. ${resultList[set][i].name} - ${resultList[set][i].duration}<br>`;
      totalSetLength += converterToSeconds(resultList[set][i].duration);
      gapCounter +=1;
    }
    songsGenerated += '<br>';
    songsGenerated += `<h3>Total set length: ${timerGenerator(totalSetLength)}<br></h3>`;
    songsGenerated += `<h5>Total gap lenght: ${gapCounter *10} seconds</h5> Total Set length: 
    ${timerGenerator(totalSetLength + gapCounter * 10)}<br>`;
    songsGenerated += '<br>';
    totalSetLength = 0;
  }

  return songsGenerated;

  // Helper function to convert time from 'mm:ss' format to seconds
  function converterToSeconds(time) {
    const [minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    return totalSeconds;
  }

  // Helper function to convert time from seconds to 'mm:ss' format
  function timerGenerator(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    return formattedTime;
  }
}

// Uploading to HTML document

document.getElementById('generateButton').addEventListener('click', function(event) {
  event.preventDefault();
  generateList();
});

document.getElementById('copyButton').addEventListener('click', function(event) {
  event.preventDefault();
  copyToClipboard();
});

function generateList() {
  const setLength = document.getElementById('setLength').value;
  const numSets = document.getElementById('numSets').value;
  const holidaysCheckbox = document.getElementById('holidays');
  const christmasCheckbox = document.getElementById('christmas');
  const chinNewYearCheckbox = document.getElementById('chinNewYear');

  let selectedAttributes = [];

  if (holidaysCheckbox.checked) {
    selectedAttributes.push('holidays');
  }

  if (christmasCheckbox.checked) {
    selectedAttributes.push('christmas');
  }

  if (chinNewYearCheckbox.checked) {
    selectedAttributes.push('chinNewYear');
  }

  let generatedList = counter(setLength, numSets, selectedAttributes);

  let messageContainer = document.getElementById('messageContainer');
  messageContainer.innerHTML = '';

  if (generatedList.length > 0) {
    messageContainer.innerHTML = generatedList;
  } else {
    let noSongsMessage = document.createElement('p');
    noSongsMessage.textContent = 'No songs found for the given duration.';
    messageContainer.appendChild(noSongsMessage);
  }
}

// copy to clipboard function

function copyToClipboard() {
  const messageContainer = document.getElementById('messageContainer');
  const textToCopy = messageContainer.innerText;

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Copied to clipboard!'))
      .catch((err) => console.error('Unable to copy to clipboard', err));
  }
}

// script for showing full set lists
document.addEventListener("DOMContentLoaded", function () {
  var chineseSongsButton = document.getElementById("chineseSongsList");
  var englishSongsButton = document.getElementById("englishSongsList");

  chineseSongsButton.addEventListener("click", function () {
    displaySongsList(chinese, "songsListContainer");
  });

  englishSongsButton.addEventListener("click", function () {
    displaySongsList(eng, "songsListContainer");
  });
});

function displaySongsList(songs, containerId) {
  let listContainer = document.getElementById(containerId);
  let list = document.createElement('ul');

  for (let i = 0; i < songs.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `${i + 1}. ${songs[i].name} - ${songs[i].duration}`;
    list.appendChild(listItem);
  }

  // Clear existing content before appending the new list
  listContainer.innerHTML = "";
  listContainer.appendChild(list);
}
