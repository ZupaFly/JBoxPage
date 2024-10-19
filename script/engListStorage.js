// let eng = [
//     { name: "The Kill", duration: "3:30" },
//     { name: "She Looks So Perfect", duration: "2:45" },
//     { name: "Happy New Year", duration: "4:15" },
//     { name: "Back in Black", duration: "3:00" },
//     { name: "Highway To Hell", duration: "5:20" },
//     { name: "What are you want from me", duration: "3:50" },
//     { name: "Rollin In The Deep", duration: "2:15" },
//     { name: "Set Fire To The Rain", duration: "4:10" },
//     { name: "Someone Like You", duration: "2:30" },
//     { name: "Hello", duration: "3:25" },
//     { name: "Dream On", duration: "4:55" },
//     { name: "I Don’t Want To Miss A Thing", duration: "2:40" },
//     { name: "Faded", duration: "5:05" },
//     { name: "Mr. Saxobeat", duration: "3:15" },
//     { name: "No Roots", duration: "4:40" },
//     { name: "Valerie", duration: "2:20" },
//     { name: "Left Outside Alone", duration: "3:35" },
//     { name: "We don't have to dance", duration: "4:25" },
//     { name: "House of rising sun", duration: "2:55" },
//     { name: "Life Burns", duration: "5:10" },
//     { name: "Cambodia", duration: "5:05" },
//     { name: "Sweet But Psycho", duration: "3:15" },
//     { name: "Salt", duration: "4:40" },
//     { name: "King and Queens", duration: "2:20" },
//     { name: "Waiting for love", duration: "3:35", extra: 'holidays' },
//     { name: "Skaterboy", duration: "4:25" },
//     { name: "Girlfriend", duration: "2:55" },
//     { name: "Larger Than Life", duration: "5:10" },
//     { name: "Everybody", duration: "5:05" },
//     { name: "If i were a boy", duration: "3:15" },
//     { name: "Crazy In Love", duration: "4:40" },
//     { name: "Halo", duration: "2:20" },
//     { name: "Rock Around the Clock", duration: "3:35" },
//     { name: "Bad Guy", duration: "4:25" },
//     { name: "Rebel Yell", duration: "2:55" },
//     { name: "I gotta Feeling", duration: "5:10" },
//     { name: "Shut Up", duration: "5:05" },
//     { name: "Song 2", duration: "3:15" },
//     { name: "Jingle Bell Rock", duration: "4:40" },
//     { name: "Freestyler", duration: "2:20" },
//     { name: "It's My Life", duration: "3:35" },
//     { name: "Living on a Prayer", duration: "4:25" },
//     { name: "Toxic", duration: "2:55" },
//     { name: "24K Magic", duration: "5:10" },
//     { name: "Grenade", duration: "5:05" },
//     { name: "Uptown Funk", duration: "3:15", extra: 'holidays' },
//     { name: "Runaway baby", duration: "4:40" },
//     { name: "Loked out of Heaven", duration: "2:20" },
//     { name: "Treasure", duration: "3:35" },
//     { name: "Thats what i like", duration: "4:25" },
//     { name: "Lazy Song", duration: "2:55" },
//     { name: "Just the way you are", duration: "5:10" },
//     { name: "Marry you", duration: "5:05", extra: 'holidays'},
//     { name: "Aint no sunshine", duration: "3:15" },
//     { name: "How Deep Is Your Love", duration: "4:40" },
//     { name: "Giant", duration: "2:20" },
//     { name: "Havana", duration: "3:35" },
//     { name: "Senorita", duration: "4:25" },
//     { name: "Sub pielea mea (Eroina)", duration: "2:55" },
//     { name: "Corazon", duration: "5:10" },
//     { name: "Call Me Maybe", duration: "5:05" },
//     { name: "Last Christmas (Dance Remix)", duration: "3:15" },
//     { name: "My Heart Will Go on", duration: "4:40" },
//     { name: "Something just like this", duration: "2:20" },
//     { name: "Attention", duration: "3:35" },
//     { name: "How long", duration: "4:25" },
//     { name: "One Call away", duration: "2:55" },
//     { name: "River", duration: "5:10" },
//     { name: "See you Again", duration: "5:05" },
//     { name: "Tic Tic Tac (Tambov)", duration: "3:15" },
//     { name: "Wicked Game", duration: "4:40" },
//     { name: "Hurt", duration: "2:20" },
//     { name: "Candyman", duration: "3:35" },
//     { name: "No Madonna", duration: "4:25" },
//     { name: "Johnny B. Goode", duration: "2:55" },
//     { name: "Rockabye", duration: "5:10" },
//     { name: "Viva la Vida", duration: "5:05" },
//     { name: "Adventure of a lifetime", duration: "3:15" },
//     { name: "Paradise", duration: "4:40" },
//     { name: "Hymn for the weekend", duration: "2:20" },
//     { name: "Dura", duration: "3:35" },
//     { name: "Despacito", duration: "4:25" },
//     { name: "Love Don’t Let Me Go", duration: "2:55" },
//     { name: "Say My Name", duration: "5:10" },
//     { name: "Hey Mama", duration: "5:05" },
//     { name: "Personal Jesus", duration: "3:15" },
//     { name: "Sound of Silence", duration: "4:40" },
//     { name: "Cake By The Ocean", duration: "2:20" },
//     { name: "Body Moves", duration: "3:35" },
//     { name: "Let the bodies hit the floor", duration: "4:25" },
//     { name: "New Rules", duration: "2:55" },
//     { name: "Don`t Start Now", duration: "5:10" },
//     { name: "Levitation", duration: "5:05" },
//     { name: "Mercy", duration: "3:15" },
//     { name: "Hotel California", duration: "4:40" },
//     { name: "September", duration: "2:20" },
//     { name: "Photograph", duration: "3:35" },
//     { name: "Shape Of You", duration: "4:25" },
//     { name: "Shivers", duration: "2:55" },
//     { name: "Bad Habits", duration: "5:10" },
//     { name: "Blow", duration: "5:05" },
//     { name: "Summertime", duration: "3:15" },
//     { name: "Ex's And Oh's", duration: "4:40" },
//     { name: "Love Me Like You Do", duration: "2:20" },
//     { name: "Sorry Seems To Be", duration: "3:35" },
//     { name: "Merry Christmas", duration: "4:25" },
//     { name: "Little Less Conversation", duration: "2:55" },
//     { name: "Blue Suede Shoes | Jailhouse Rock", duration: "5:10" },
//     { name: "Corazon De Melao", duration: "5:05" },
//     { name: "Tears From The Moon", duration: "3:15" },
//     { name: "Final Countdown", duration: "4:40" },
//     { name: "Sweet Dreams", duration: "2:20" },
//     { name: "My Immortal", duration: "3:35" },
//     { name: "Bring Me To Life", duration: "4:25" },
//     { name: "Uma Thurman", duration: "2:55" },
//     { name: "My songs know what you did in the dark", duration: "5:10" },
//     { name: "Rocketeer", duration: "5:05" },
//     { name: "Ain’t Nobody", duration: "3:15" },
//     { name: "Cupid", duration: "4:40" },
//     { name: "Finnish Polka", duration: "2:20" },
//     { name: "Handsclap", duration: "3:35" },
//     { name: "Sax", duration: "4:25" },
//     { name: "Yeah! + Low mashup", duration: "2:55" },
//     { name: "I don`t like it, I love it", duration: "5:10" },
//     { name: "Hangover", duration: "5:05" },
//     { name: "Toca Toca", duration: "3:15" },
//     { name: "Lemon Tree", duration: "4:40" },
//     { name: "Walking By Myself", duration: "2:20" },
//     { name: "It's Raining Men", duration: "3:35" },
//     { name: "Black sheep", duration: "4:25" },
//     { name: "I Will Survive", duration: "2:55" },
//     { name: "Crazy", duration: "5:10" },
//     { name: "Feel Good inc", duration: "5:05" },
//     { name: "What is love", duration: "3:15" },
//     { name: "Hit The Road Jack", duration: "4:40" },
//     { name: "Can`t take my Eye off you (I Love You Baby)", duration: "2:20" },
//     { name: "Vehicle", duration: "3:35" },
//     { name: "Believer", duration: "4:25" },
//     { name: "Natural", duration: "2:55" },
//     { name: "La la long", duration: "5:10" },
//     { name: "Lil Mama", duration: "5:05" },
//     { name: "I feel good", duration: "3:15" },
//     { name: "Domino", duration: "4:40" },
//     { name: "Price tag", duration: "2:20" },
//     { name: "Bang Bang", duration: "3:35" },
//     { name: "I hate myself for loving you", duration: "4:25" },
//     { name: "I love rock-n-roll |We will rock you", duration: "2:55" },
//     { name: "I love you", duration: "5:10" },
//     { name: "Can you love me again", duration: "5:05" },
//     { name: "Blame", duration: "3:15" },
//     { name: "Only Human", duration: "4:40" },
//     { name: "Sorry", duration: "2:20" },
//     { name: "Baby", duration: "3:35" },
//     { name: "Let me love you", duration: "4:25" },
//     { name: "Love Yourself", duration: "2:55" },
//     { name: "Stay", duration: "5:10" },
//     { name: "Can't Stop This Feeling", duration: "5:05" },
//     { name: "Castle in the Snow", duration: "3:15" },
//     { name: "Hot-n-Cold", duration: "4:40", extra: 'christmas' },
//     { name: "Roar", duration: "2:20", extra: 'christmas' },
//     { name: "Dark Horse", duration: "3:35", extra: 'christmas'},
// ];

