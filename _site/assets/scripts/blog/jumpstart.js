var skeletontoggle = document.getElementById("skeletontoggle");
var skeletonsheet = document.getElementById("skeletonsheet");

skeletontoggle.onclick = function () {
	skeletonsheet.classList.toggle("hidden");
}


const playtest = document.getElementById("playtest");
const playtest_link = document.getElementById("playtest_link");
const decklist_link = document.getElementById("decklist_link");
const ardenn = document.getElementById("ardenn");
const malcolm = document.getElementById("malcolm");
const keskit = document.getElementById("keskit");
const toggo = document.getElementById("toggo");
const ich = document.getElementById("ich");
var cards_selected = 0;

playtest.onclick = function(e) {
	var target = e.target;
	if (target.id != "playtest"){
		if (target.classList.contains("glow")) {
			target.classList.remove("glow");
			cards_selected--;
		}
		else
		{
			if (cards_selected >= 2) {
				cards_selected = 0;
				ardenn.classList.remove("glow");
				malcolm.classList.remove("glow");
				keskit.classList.remove("glow");
				toggo.classList.remove("glow");
				ich.classList.remove("glow");
				create_playtest_link ();
			}
			target.classList.add("glow");
			cards_selected++;
			if (cards_selected == 2) {
				create_playtest_link ();
			}
		}
	}
}

const names = {
	"am": "Ardenn & Malcolm",
	"ak": "Ardenn & Keskit",
	"at": "Ardenn & Toggo",
	"ai": "Ardenn & Ich-Tekik",
	"mk": "Malcolm & Keskit",
	"mt": "Malcolm & Toggo",
	"mi": "Malcolm & Ich-Tekik",
	"kt": "Keskit & Toggo",
	"ki": "Keskit & Ich-Tekik",
	"ti": "Toggo & Ich-Tekik"
}

const links = {
	"am": "5EVgQP2zoEmLtG9axxTp5A",
	"ak": "4QKsoL-MPkiYwNt08Won5w",
	"at": "3f8uHR26hkCk3L775I2dEw",
	"ai": "pdBzdSEOoUi-mRvBVLR57Q",
	"mk": "WAzMUP3YwUCTFFn6oN6zsQ",
	"mt": "8g9epI6KLEKWV-OyFVESVw",
	"mi": "V_pZkWPgAkyXT6jqxdFyIw",
	"kt": "pHrwCHGMv0a8VFTjzCwnKg",
	"ki": "0uYLztQacEizoUS6I1NIwQ",
	"ti": "ezrRX5F72EqOHbOdcpch0g"
}

function create_playtest_link () {
	var identifier = "";
	if (ardenn.classList.contains("glow")) {
		identifier += "a";
	}
	if (malcolm.classList.contains("glow")) {
		identifier += "m";
	}
	if (keskit.classList.contains("glow")) {
		identifier += "k";
	}
	if (toggo.classList.contains("glow")) {
		identifier += "t";
	}
	if (ich.classList.contains("glow")) {
		identifier += "i";
	}
	
	if (identifier == "") {
		decklist_link.innerHTML = "Decklist:";
		playtest_link.innerHTML = "Playtest:";
	}
	else
	{
		decklist_link.innerHTML = "<a href='https://moxfield.com/decks/" + links[identifier] + "' target='_blank'>Decklist: " + names[identifier] + "</a>";
		playtest_link.innerHTML = "<a href='https://moxfield.com/decks/" + links[identifier] + "/goldfish' target='_blank'>Playtest: " + names[identifier] + "</a>"
	}	
}
