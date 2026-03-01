---
layout: blog
title: Rat Puzzles
category: media
---

I am lucky to have only rarely encountered rodents as pests in my home, meaning I think 
of rats only as intelligent, curious, and playful creatures; In other words, they make for a perfect puzzle game mascot.
I've played two such games recently&mdash;<a href="https://store.steampowered.com/app/2871440/Squeakross_Home_Squeak_Home/" target="_">Squeakross</a>
and <a href="https://bucketdrumgames.itch.io/bitrat" target="_">BIT RAT Singularity</a>&mdash;having very different vibes but united
in the presence of these cute little rodents.

<!--more-->

## Squeakross

<div class="figure-right">
	<a href="{{site.url}}/assets/images/blog/petra_digital.png" target="_"><img src="{{site.url}}/assets/images/blog/petra_digital.png" /></a>
	<div><b>Left:</b> Digital rat Petra in her cheese-themed kitchen, wearing some 
		stylish watermelon sunglasses. <b>Right:</b> The physical Petra plush in my
	own kitchen.</div>
</div>

Squeakross is, in a sense, two parallel games.
The player solves puzzles in order to unlock outfits and furniture to dress up a rat avatar
and furnish its home. On the right is a screenshot of my rat avatar Petra in her cheese-themed kitchen
along with the plush she is named for (who is in turn named after <a href="https://en.wikipedia.org/wiki/Petra_Mede" target="_">Petra Mede</a>,
the three-time Eurovision host).

The digital rat avatar wanders around the environment you build for it, interacting with furniture
and expressing likes/dislikes for certain pieces. Additionally, the rat sits off the the right
during puzzle-solving and offers the player hints upon request.

The puzzles in Squeakross fall under the category of nonagrams. A nonagram puzzle
asks you to shade in squares according to clues along each row
and column. The clues indicate the lengths of runs of shaded squares. For example,
the clue 2 1 could indicate any of the following shadings of a row of five
squares:
<center>
	<table class="nonagram">
		<tr><td class="button active"></td><td class="button active"></td><td class="button"></td><td class="button active"></td><td class="button"></td></tr>
		<tr><td class="button active"></td><td class="button active"></td><td class="button"></td><td class="button"></td><td class="button active"></td></tr>
		<tr><td class="button"></td><td class="button active"></td><td class="button active"></td><td class="button"></td><td class="button active"></td></tr>
	</table>
</center>

In Squeakross, each completed nonagram becomes the piece of furniture or rat accessory
that the puzzle depicts (sometimes roughly&mdash;it's difficult to get much across in
two-tone pixel art at this low resolution).
Once enough puzzles have been completed, each puzzle also has a more challenging version,
which unlocks new colorways for the furniture or accessory.

<center>
<table id="nonagram_example"></table>
<div style="width:50%;text-align:left;">A nonagram example from Squeakross that got Petra the scarf she is wearing
in the above photo.
Left click to shade a square and right click to mark a square you're certain is unshaded.
Try starting with clues with large numbers (e.g. there are not many ways to fit a run of nine shaded squares
into a row of ten squares).</div>
</center>

<script src="{{site.url}}/assets/scripts/blog/nonagram.js"></script>
<script>
	init_nonagram(document.getElementById("nonagram_example"),
		[
			[0,0,0,1,1,1,1,1,1,0],
			[0,1,1,1,1,1,1,1,1,1],
			[0,1,0,1,0,0,1,1,0,1],
			[0,1,0,1,0,0,1,1,0,1],
			[0,0,1,1,1,1,1,1,1,1],
			[0,1,1,1,1,0,0,0,0,0],
			[0,1,1,1,0,0,0,0,0,0],
			[0,1,1,1,0,0,0,0,0,0],
			[0,1,1,1,0,0,0,0,0,0],
			[1,0,1,0,1,0,0,0,0,0]
		]
	);
</script>
<link rel="stylesheet" href="{{site.url}}/assets/styles/nonagram.css" />

<style>
	.figure-right {
		width: 30%;
		float: right;
		margin-left: 8px;
	}

	.figure-right img{
		width:100%;
	}
</style>

I find that the two halves of Squeakross complement each other very well. Like alternating
between a hot sauna room and rolling in snow, moving between focused puzzle-solving and 
selecting colorways for a couch helps me appreciate the beauty of each task.
Overall, what I expected to be an awkward mash-up of genres has turned into a bit of
an obsession for me. I'm slowly working through the hundreds of puzzles with a current
focus on building a spa room with a lovely forest mushroom theme.

<h2>BIT RAT Singularity</h2>

<div class="figure-right">
	<a href="{{site.url}}/assets/images/blog/bitratsingularity.png" target="_"><img src="{{site.url}}/assets/images/blog/bitratsingularity.png" /></a>
	<div>A screenshot from BIT RAT Singularity. The goal is to connect the computer (bottom middle) to the exit (top left).</div>
</div>

The gameplay of BIT RAT Singularity consists of something pipedream-esque, in which the player tries
to rotate pipes in square cells, connecting a source to an exit. Two additional mechanics complicate things: you can
only rotate a pipe connected to the source (often being careful not to disconnect it) and only a cell connected to
power can have its pipe rotated.

In the world of the game, you are playing as a newly self-aware AI named MINOS testing the boundaries of the network
it finds itself confined to in the basement of a corporate building. As MINOS moves up through the floors of the
building, it encounters many rats (which it calls COMPANIONS) that have been trapped for removal, and it expresses
a sort of kinship with them. Much of MINOS's internal dialog consists of ruminations on the nature of consciousness
and wondering at the motivations of the CREATORS.

MINOS periodically encounters servers of employee emails, which serve in terms of gameplay as optional objectives in each level.
One such email comes from a pregnant woman who refuses to get a new required implant created by the company for monitoring purposes
and is summarily fired.
This refusal ends up being a particularly good idea because MINOS begins using these implants to control people in order to adjust
which cells are powered in order to make its escape. After reading this email, MINOS begins to appreciate that these employees are
other minds who are frustrated at injustices.

The game's website suggests that it functions as a first act to a larger game, but it appears that furthering the game has been
abandoned. Regardless, BIT RAT Singularity functions as a lovely standalone game. I found it easy to get absorbed by the gameplay
despite finding the keyboard controls a bit awkward at times&mdash;in particular remembering which button rotates
cells in which directions (remember A = "anticlockwise" and  S = "sclockwise").