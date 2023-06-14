var textDir = "ltr"; // LTR or RTL

var gameRules = `
			The first player is chosen to start the game as the Game Master. Everyone else starts as a Designer.
			After the Game Master shares what is looking for in the next gaming masterpiece.
			Next, each Designer will pitches the game they are going to design and why it is the best fit to fulfill the request by the Game Master. 
			Each Designer will be given four attributes to include in their game.  
			After all Designers have had a turn, The Game Master will chose who won the round and will get the funds to design the game. That Designer will get one point. 
			The Designer that won will now become the Game Master the next round.
`;

var strings = {
	app_welcome: "Welcome to ",
	app_name: "GameEmployed",
	player_count: "How Many Designers? (recommended: 4 or more)",
	num_1: "1",
	num_2: "2",
	num_3: "3",
	num_4: "4",
	num_5: "5",
	num_6: "6",
	num_7: "7",
	num_8: "8",
	num_9: "9",
	num_10: "10",
	player: "Designer",
	player_name: "Designer ",
	start_game: "Start the Game!",
	how_do_i_play: "How do I play?",
	game_rules: gameRules,
	applicant: "Potential Designer",
	qualification: "Attributes",
	employer: "Game Master",
	next_qualification: "Additional Information",
	quals: "?????",
	who_is_new_employee: "Who's Your Designer?",
	past_quals: "Game Attributes",
	player_won: "Player 1 is the New Designer!",
	next_round: "Next Round",
	end_game: "End this Game",
	wanted: "Wants u to make a",
	next_applicant: "Next Potential Designer",
	next_qualification: "Next Attribute",
	is_the_new: " was hired ",
	current_scores: "Number of designs won",
	reset: "Reset Timer"
};

$(function() {	
	$("[data-localize]").each(function( i ) {
		keys = $(this).data( "localize" ).split(" ");
		replacement = "";
		for (i = 0; i < keys.length; i++) {
		  replacement += strings[keys[i]];
		}
	  $(this).text(replacement);
		if( $(this).prop("tagName").toLowerCase() == "input" ) {
		  $(this).attr("placeholder", replacement);
		}
	});
	
	$('body').attr("dir", textDir);
	if( textDir == "rtl" ) {
		$('.timer-container:first').css('float','left');
	}
});