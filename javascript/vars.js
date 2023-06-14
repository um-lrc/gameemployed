/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['A game with Mangos & Kiwis','A game with Dwarves and Elves Children','A game with Rolling Balls & Pizza','A game with Anime or Movie Characters','A game with Spaceships & Gungan outcasts','A game with Goats and Monkeys','A game with Sharks with Laserbeams','A game with Steampunk Submarines','A game with Two-headed Stallions','A game with Cyclops & Faires','A game with Holy Hand Grenades','A game with Killer Bunnies','A game with Ewoks & Rancors','A game with Cooking & Hunting Skills','A game with Potbellied Pigs and Truffles','A game with Necromancy & love potions','A game with Pocket Monsters','A game with Teen Wolves & Vampires','A game with Ventriloquist & Levitation Skills','A game with He Who Must Not Be Named','A game with Horocruxes and Parseltongue ','A game with Foot Pedaled Vehicles & Dinosaurs','A game with Trading Cards and Parking Tickets','A game with Unique Mechanics','A game with Easter Eggs & False Doors','A game that Wins Game of the Year','A game with a Unique Journey','A game that Doesnt Hog All Your Time Away','A game with Noticeable Influences','A game with a Coop Experience','A game with Ninjitsu and Pico de Gallo','A game about Isekia and Lost Lovers','A game with Stages and Loot Boxes','A game with Heroic and Iroman Mode','A game that Can be Played with Your Feet','A game about The Passage of Time','A game about Platypuses and Pangolins','A game with Road Rage and Explosives','A game with Prices and Princesses','A game with Toads and Imprisoned Beasts','A game with a Laberinths and Strings','A game with Caves and Spelunsky','A game with Bananas and Splits','A game thats over 9000','A game with Racial Challenges','A game with Stingrays and Dolphins','A game with Supervillans and Janitors','A game with Ninjas and Ramen','A game with Devil Fruits and Flying Clouds','A game set in a Jungle','A game set in a City','A game about Language Learning','A game about Math & Science','A game with Dice Rolls','A game with Dungeons and Dragons','A game with Pubs and Bards','A game with Plumbers and Pipes','A game with Characters Named Goku and Vegeta','A game with an Elven Archer and a Dwarf Warrior','A game with an Undead Love Interest','A game with Warm Zombies','A game with Fishing Skills','A game with Permadeath','A game with Branching Storylines','A game with Deckbuilding','A game with Various Races','A game with an Undefeatable Enemy','A game set in Space','A game set in a Dystopian Society','A game with Gymnists and/or Swimmers','A game with Cyclist and/or Runners','A game with Hackers and Netrunners','A game with a Dangeous AI','A game with Characters with Quirks','A game with Slimes and Chibi Spiders','A game with a Journey to the Unknown','A game with Avatars and Sunken Ships','A game with Time Travel and Lottery Tickets','A game with a Casino and a Heist','A game with Lawmen and Robbers','A game with Telekinesis','A game with Mindreading','A game with Multiple and-or Parallel Lives','A game with Reincarnation','A game with Civilizations','A game with Ancient Relics','A game with Levels and Passwords','A game with Traps and Beasts','A game with Paintguns','A game with Body Enhancements','A game with Gender Swapping','A game with Fear and Loathing','A game with Mavericks and Geese','A game with Crafting and Evolutions','A game with Bouncing and Bending Bullets','A game with Ogres and Donkeys','A game with Warp Reactors and Blackholes','A game with Mutliple Dimensions','A game with Conspiracy Theories','A game with Submarine Creatures','A game in a World of Water','A game with Dark and Light Mages','A game with One Punch Wins','A game with Wonder Woman and Superman','A game with Batman and the Joker','A game with the Coronel and Ronald McDonald','A game with the Flanders','A game with an Unexpected Twist','A game with Subverts Expectations','A game that Breaks the Fourth Wall','A game with Nazis','A game with a Soccer Pitch','A game with a Swimming Pool','A game with Mythril and Adamantium','A game with Adamantium and Vibranium ','A game with an Office Building','A game with Floating Coin Rings & Rupees','A game with Boosts and Power Ups','A game with Killing Streaks','A game with Strategy and Turns','A game with Jump Scares','A game with Giant Bazookas','A game with Sport & Game Balls'];
var jobs_used = [];
var quals = [['Casual','Action','Adventure','Strategy','Simulation','RPG','Sports','Racing','Puzzle','Arcade','Shooter','Platformer','Visual Novel','Point & Click','Sandbox','Roguelike','Interactive Fiction','JRPG','Dating Sim','Walking Simulator','Education','Card Game','Board Game','Tabletop','Tower Defense','Life Sim','Beat \'em up','City Builder','Party-Based RPG','Automobile Sim','Rhythm','Space Sim','Grand Strategy','eSports','Word Game','Battle Royale','Colony Sim','Farming Sim','God Game','4X','Auto Battler','Trivia','MOBA','Exploration','Side Scroller','Shoot \'Em Up','Hidden Object','Roguelite','Choose Your Own Adventure','Bullet Hell','Hack and Slash','Dungeon Crawler','Immersive Sim','Clicker','Precision Platformer','Flight','Arena Shooter','Time Management','Real Time Tactics','Runner','Wargame','Metroidvania','Twin Stick Shooter','Match 3','Idler','Collectathon','Souls-like','CRPG','Card Battler','Mystery Dungeon','Solitaire','Hero Shooter','Combat Racing','Sokoban','Spectacle fighter','Creature Collector','Looter Shooter','Trading Card Game','Political Sim','On-Rails Shooter','Typing','Action RTS','Traditional Roguelike','Spelling','Medical Sim','Outbreak Sim'],['2D','3D','Colorful','Pixel Graphics','Cute','First-Person','Anime','VR','Third Person','Top-Down','Stylized','Minimalist','Cartoony','Realistic','Hand-drawn','Cartoon','Text-Based','Isometric','Abstract','2.5D','Cinematic','Psychedelic','Comic Book','Beautiful','Split Screen','Noir','3D Vision','Voxel','FMV','360 Video','Story Rich','Female Protagonist','Open World','Combat','Physics','Choices Matter','PvP','Linear','Multiple Endings','Character Customization','PvE','Procedural Generation','Turn-Based Combat','Score Attack','Resource Management','Base Building','Narration','Perma Death','Conversation','Tutorial','Team-Based','Nonlinear','Level Editor','Grid-Based Movement','Moddable','Inventory Management','Deckbuilding','6DOF','Vehicular Combat','Bullet Time','Time Manipulation','Class-Based','Hex Grid','Gun Customization','Quick-Time Events','Trading','Dynamic Narration','Music-Based Procedural Generation','Asymmetric VR','Singleplayer','Multiplayer','Co-op','Local Multiplayer','Online Co-Op','Local Co-Op','Massively Multiplayer','4 Player Local','Co-op Campaign','Asynchronous Multiplayer'],['Atmospheric','Fantasy','Comedy','Funny','Retro','Relaxing','Family Friendly','Sci-fi','Horror','Survival','Mystery','Dark','Space','Old School','Logic','Tactical','Magic','Management','Building','Futuristic','Romance','Medieval','Crafting','Drama','Zombies','War','Historical','1990\'s','Surreal','Post-apocalyptic','Emotional','Nature','Stealth','Memes','LGBTQ+','1980s','Military','Cyberpunk','Robots','Aliens','Investigation','Detective','Driving','Economy','Demons','Psychological','Artificial Intelligence','Thriller','Modern','Destruction','Supernatural','Parkour','Loot','Lore-Rich','Alternate History','Cats','Crime','Mythology','World War II','Philosophical','Science','Swordplay','Dragons','Lovecraftian','Mechs','Automation','Capitalism','America','Steampunk','Ninja','Satire','Agriculture','Tanks','Conspiracy','Martial Arts','Gothic','Underground','Pirates','Time Travel','Underwater','Otome','Dog','Mining','Hacking','Hunting','Programming','Politics','Political','Faith','Cooking','Dinosaurs','Western','Superhero','Illuminati','Fishing','Naval','Vampire','Assassin','Transportation','Cold War','Trains','Snow','Soccer','Archery','Gambling','Foreign','Diplomacy','Football','Heist','Game Development','Sailing','Mars','Offroad','Sniper','Boxing','Horses','Werewolves','World War I','Jets','Motorbike','Golf','Rome','Transhumanism','Bikes','LEGO','Submarine','Basketball','Mini Golf','Tennis','Pool','Lemmings','Motocross','Wrestling','Baseball','Skateboarding','Warhammer 40K','Cycling','Skating','Bowling','Hockey','Skiing','Snowboarding','ATV','BMX','Parody','Dystopian'],['Atmospheric','Fantasy','Comedy','Funny','Retro','Relaxing','Family Friendly','Sci-fi','Horror','Survival','Mystery','Dark','Space','Old School','Logic','Tactical','Magic','Management','Building','Futuristic','Romance','Medieval','Crafting','Drama','Zombies','War','Historical','1990\'s','Surreal','Post-apocalyptic','Emotional','Nature','Stealth','Memes','LGBTQ+','1980s','Military','Cyberpunk','Robots','Aliens','Investigation','Detective','Driving','Economy','Demons','Psychological','Artificial Intelligence','Thriller','Modern','Destruction','Supernatural','Parkour','Loot','Lore-Rich','Alternate History','Cats','Crime','Mythology','World War II','Philosophical','Science','Swordplay','Dragons','Lovecraftian','Mechs','Automation','Capitalism','America','Steampunk','Ninja','Satire','Agriculture','Tanks','Conspiracy','Martial Arts','Gothic','Underground','Pirates','Time Travel','Underwater','Otome','Dog','Mining','Hacking','Hunting','Programming','Politics','Political','Faith','Cooking','Dinosaurs','Western','Superhero','Illuminati','Fishing','Naval','Vampire','Assassin','Transportation','Cold War','Trains','Snow','Soccer','Archery','Gambling','Foreign','Diplomacy','Football','Heist','Game Development','Sailing','Mars','Offroad','Sniper','Boxing','Horses','Werewolves','World War I','Jets','Motorbike','Golf','Rome','Transhumanism','Bikes','LEGO','Submarine','Basketball','Mini Golf','Tennis','Pool','Lemmings','Motocross','Wrestling','Baseball','Skateboarding','Warhammer 40K','Cycling','Skating','Bowling','Hockey','Skiing','Snowboarding','ATV','BMX','Parody','Dystopian'],['Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','The Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Congo, Democratic Republic of the','Congo, Republic of the','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor (Timor-Leste)','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','The Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, North','Korea, South','Kosovo','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia, Federated States of','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar (Burma)','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Macedonia','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','Spain','Sri Lanka','Sudan','Sudan, South','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe']];
var quals_used = [[],[],[],[],[]];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(qualClass){
	if(quals[qualClass].length === 0){
		quals[qualClass] = quals[qualClass].concat(quals_used[qualClass]);
		quals_used[qualClass] = [];
	}
	var index = Math.floor(Math.random() * quals[qualClass].length); //random var
	var result = quals[qualClass][index]; //returns result later
	quals_used[qualClass] = quals_used[qualClass].concat(quals[qualClass].splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

