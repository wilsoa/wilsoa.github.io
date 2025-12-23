---
layout: default
title: Jump Start Commander
---

When it comes to building commander decks, I lean toward the esoteric. I think of each deck concept as a puzzle and each game as an opportunity to show off a hard-won solution. With this project, I wanted to deconstruct the very concept of a deck a little---what if a deck could actually be ten decks?

I played bit of the Jumpstart product, in which two packs from a list of different themes are shuffled together to form a ready-to-play 40 card deck. I slowly worked through a box of Jumpstart 2024 with one of my former students over the course of a few weeks, and I was impressed by the replayability. In particular, how playing the same pack twice paired with different themes created very different experiences.

**Goal:** Inspired by Jumpstart, this project consists of a set half-decks, each helmed by a partner commander. One must be able to take any two of these half decks, shuffle them together, and have a functional commander deck.

To skip to decklists and playtesting, click [here](#try-it-out).

## Some Considerations and Constraints
One consideration has to do with logistic: the decks must be separable back into its two halves.  Another concerns scope: the more half-decks in the set, the more complicated the interactions between them are. In light of these two considerations, I settled on five mono-color half-decks. My options for partners are then covered by the following Scryfall query.
[`o:partner -o:"partner with" -o:"partner—" ci=1 legal:commander`](https://scryfall.com/search?q=o%3Apartner+-o%3A%22partner+with%22+-o%3A%22partner%E2%80%94%22+ci%3D1+legal%3Acommander)

## Skeleton
When two halves are shuffled together, the result should feel like a cohesive whole. With this goal in mind, we want to place cards in each half that play well with other halves. Specifically, each half will have six cards chosen to synergize with each other half. For example, the white half will have six cards that work well with the blue half, six for the black half, and so on for the red and green halves. This leaves 25 cards: eight cards making up the "core" strategy of the half and 17 lands. <button id="skeletontoggle">Toggle Skeleton Spreadsheet</button>

<div id="skeletonsheet" class="hidden">
<style type="text/css">.ritz .waffle a { color: inherit; }.ritz .waffle .s0{text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s5{background-color:#d9ead3;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s7{text-align:left;color:#0c0c14;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s2{background-color:#c9daf8;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s4{background-color:#f4cccc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s6{background-color:#000000;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s3{background-color:#cccccc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}.ritz .waffle .s1{background-color:#fff2cc;text-align:left;color:#000000;font-family:Arial;font-size:10pt;vertical-align:bottom;white-space:nowrap;direction:ltr;padding:2px 3px 2px 3px;}</style><div class="ritz grid-container" dir="ltr"><table class="waffle" cellspacing="0" cellpadding="0"><thead><tr><th class="row-header freezebar-vertical-handle"></th><th id="0C0" style="width:100px;" class="column-headers-background">A</th><th id="0C1" style="width:100px;" class="column-headers-background">B</th><th id="0C2" style="width:100px;" class="column-headers-background">C</th><th id="0C3" style="width:100px;" class="column-headers-background">D</th><th id="0C4" style="width:100px;" class="column-headers-background">E</th><th id="0C5" style="width:100px;" class="column-headers-background">F</th></tr></thead><tbody><tr style="height: 20px"><th id="0R0" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">1</div></th><td class="s0" dir="ltr">Partner:</td><td class="s1"></td><td class="s2"></td><td class="s3"></td><td class="s4"></td><td class="s5"></td></tr><tr><th style="height:3px;" class="freezebar-cell freezebar-horizontal-handle"></th><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td><td class="freezebar-cell"></td></tr><tr style="height: 20px"><th id="0R1" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">2</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R2" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">3</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R3" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">4</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R4" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">5</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R5" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">6</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R6" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">7</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R7" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">8</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R8" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">9</div></th><td class="s0" dir="ltr">Core</td><td></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R9" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">10</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R10" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">11</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R11" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">12</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R12" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">13</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R13" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">14</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R14" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">15</div></th><td class="s1"></td><td class="s6"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R15" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">16</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R16" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">17</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R17" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">18</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R18" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">19</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R19" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">20</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R20" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">21</div></th><td class="s2"></td><td></td><td class="s6"></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R21" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">22</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R22" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">23</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R23" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">24</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R24" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">25</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R25" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">26</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R26" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">27</div></th><td class="s3"></td><td></td><td></td><td class="s6"></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R27" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">28</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R28" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">29</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R29" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">30</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R30" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">31</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R31" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">32</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R32" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">33</div></th><td class="s4"></td><td></td><td></td><td></td><td class="s6"></td><td></td></tr><tr style="height: 20px"><th id="0R33" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">34</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R34" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">35</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R35" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">36</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R36" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">37</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R37" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">38</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R38" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">39</div></th><td class="s5"></td><td></td><td></td><td></td><td></td><td class="s6"></td></tr><tr style="height: 20px"><th id="0R39" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">40</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R40" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">41</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R41" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">42</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R42" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">43</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R43" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">44</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R44" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">45</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R45" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">46</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R46" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">47</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R47" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">48</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R48" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">49</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R49" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">50</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R50" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">51</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R51" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">52</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R52" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">53</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R53" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">54</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R54" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">55</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr><tr style="height: 20px"><th id="0R55" style="height: 20px;" class="row-headers-background"><div class="row-header-wrapper" style="line-height: 20px">56</div></th><td class="s0" dir="ltr">Lands</td><td class="s7" dir="ltr"></td><td></td><td></td><td></td><td></td></tr></tbody></table></div>
</div>

## Choosing a Theme: Artifacts
For my first attempt at this kind of project, I figured I should make things easier on myself by choosing partners that have some mechanical overlap. Looking over the options, one word that appears on a partner of each color is "artifact," so I let that word be my guiding theme.

<img class="portrait" src="{{site.url}}/assets/images/blog/cmr-10-ardenn-intrepid-archaeologist.png" />

## White: Ardenn, Intrepid Archaeologist
While [Rebbec, Architect of Ascension](https://scryfall.com/card/cmr/42/rebbec-architect-of-ascension) is the white partner that actually has "artifact" in its rules text, I figured Ardenn's more specific theme of equipment would help to focus the project.

I want to leverage Ardenn's ability to put equipment on an *opponent's* creatures. One way to utilize this ability is to suit up an opposing creature, then goad it. Because white has few ways to goad a creature, we will look to the other halves (particularly red) to include some goad support to synergize with this game plan.

Another reason one might want to equip their opponents' creatures is to laden them with detrimental equipment.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/tdc-103-skullclamp.png" />
	<img src="{{site.url}}/assets/images/blog/snc-235-cement-shoes.png" />
	<img src="{{site.url}}/assets/images/blog/rix-177-captain-s-hook.png" />
</div>

If an opponent's creature equipped with my Skullclamp dies, *I* draw the two cards. Cement Shoes and similar equipment can lock down an opponent's creature. Whenever we move Captain's Hook off of an opponent's creature, they have to sacrifice that creature. The additional effect of making a creature a pirate segues well into our next choice of partner.


<img class="portrait" src="https://cards.scryfall.io/large/front/b/b/bbc3bbda-a4bc-4302-a3fc-b1c89f0f5461.jpg?1608909299" />

## Blue: Malcolm, Keen-Eyed Navigator
Malcolm's game plan is to create a bunch of treasures. 
We are avoiding cards that statically count the number of artifacts on the field because in some combinations, we will want to feel free to sacrifice artifacts often. Instead, we focus on cards that trigger upon an artifact entering the battlefield.

<div class="cardgallery">
	<img src="{{site.url}}/assets/images/blog/eoc-74-kappa-cannoneer.png" />
	<img src="{{site.url}}/assets/images/blog/mkc-107-junk-winder.png" />
</div>

## Black: Keskit, the Flesh Sculptor
(Image: Keskit)

## Red: Toggo, Goblin Weaponsmith
(image: Toggo)

## Green: Ich-Tekik, Salvage Splicer
(image: Ich-Tekik)
Ich-Tekik wants to do two things: make golems and make tokens that can innately be sacrificed.

## Overlaps
Before discussing overlaps, I want note that I am avoiding having any "dead" cards, so a card included in any half needs to support that half's theme. For example, I don't want to include Lightning-Rig Crew in Toggo---despite the fact that it works very well with Malcolm, it doesn't really make sense in any other combination.

### WU: Ardenn and Malcolm
Here, blue can give Ardenn access to evasive creatures to suit up, and Malcolm benefits from equipment that let pirates hit opponents multiple times
- Evasive creatures
- Equipment that grants double strike or deals direct damage

### UB: Malcolm and Keskit
Black has access to a few pirates, though we'll want to focus on those with some form of evasion. Malcolm's treasure generation already synergizes very well with Keskit's hunger for artifacts, so we'll focus on some cards that synergize with the graveyard.
- Black pirates with evasion
- Blue pirates with graveyard abilities

### BR: Keskit and Toggo
With these two halves, we will have no problem sacrificing plenty of artifacts. 
- Deathtouch creatures to synergize with Toggo's rocks

### RG: Toggo and Ich-Tekik
Green can help Toggo trigger landfall with ramp spells. Including ways to sacrifice artifacts in Toggo will help Ich-Tekik trigger.
- Ramp spells
- Ways to sacrifice artifacts
- Landfall triggers that make more artifact tokens

### GW: Ich-Tekik and Ardenn
The overlap between these two partners is primarily in modifying creatures, whether that's with counters or equipment.
- Cards that care about modifications
- White golems

### WB: Ardenn and Keskit
- Equipment that comes with a second game object to be sacrificed to Keskit

### BG: Keskit and Ich-Tekik
Here, Keskit's sacrificing artifacts helps feed into growing Ich-Tekik's golems
- Black golems
- Green cards that come along with artifact tokens

### GU: Ich-Tekik and Malcolm
These two partners care about a particular creature type, so we're looking for creatures that are both types or ways to transform our team's type.
- Changelings
- Effects that set our creatures' types

### UR: Malcolm and Toggo
- Red pirates
- Blue cards that care about artifact tokens

### RW: Toggo and Ardenn
These two already have a great deal of overlap in that one creates equipment and the other cares about that equipment.
- Creatures that like to carry equipment
- Cards in read to goad opponents' creatures
- Equipment that ramps


- Looting effects to get you past irrelevant cards?
- Tutors to find pieces

## Try It Out

Choose two partners below to see their decklist. 
<ul>
	<li id="decklist_link">Decklist: </li>
	<li id="playtest_link">Playtest: </li>
</ul>

<div id="playtest">
	<img id="ardenn" src="{{site.url}}/assets/images/blog/cmr-10-ardenn-intrepid-archaeologist.png" />
	<img id="malcolm" src="{{site.url}}/assets/images/blog/cmr-79-malcolm-keen-eyed-navigator.png" />
	<img id="keskit" src="{{site.url}}/assets/images/blog/cmr-131-keskit-the-flesh-sculptor.png" />
	<img id="toggo" src="{{site.url}}/assets/images/blog/cmr-204-toggo-goblin-weaponsmith.png" />
	<img id="ich" src="{{site.url}}/assets/images/blog/cmr-233-ich-tekik-salvage-splicer.png" />
</div>


<script src="{{site.url}}/assets/scripts/blog/jumpstart.js"></script>

<style>
#playtest {
	text-align:center;
}

#playtest img {
	width: 16%;
	transition: transform 330ms ease-in-out;
}

.glow {
	transform: translate(0px, 30px);
}

#playtest img:hover {
	cursor:pointer;
	transform: scale(1.1);
}

#playtest img:hover.glow {
	transform: scale(1.1) translate(0px, 30px);
}

.portrait {
	float:right;
	height:24em;
}

#skeletonsheet {
  display: flex;
  align-items: center;
  justify-content: center;
}

#skeletonsheet.hidden {
	display: none;
}

.cardgallery {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cardgallery img {
	width: 30%;
	margin:auto;
}

</style>
