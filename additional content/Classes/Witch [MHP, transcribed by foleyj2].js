var iFileName = "Witch [MHP, transcribed by foleyj2].js";
RequiredSheetVersion(12.999);
/* eslint no-unused-vars: 0*/
/* eslint no-undef: 0*/

/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://www.reddit.com/r/mpmb/comments/7gkjkw/sheet_downloads_faq/
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called the "Witch" and its 14 subclasses
	
				This class has been made by MageHandPress 
				It can be found here: https://store.magehandpress.com/products/witch
				This code is based upon the version published on 2017
					
	Code by:	foleyj2 <foley AT RU dot IS>
	Date:		2018-02-12 (sheet v12.999)
        Source:         https://github.com/foleyj2/MPMBs-Character-Record-Sheet.git
                        on branch mhp-witch

*/

/* Known issues: For some strange reason, the sorcerer class is triggered on line 1192 in _vars/ListsClasses.js if the ID has "witch" in it.  This is intentional and detailed at https://github.com/morepurplemorebetter/MPMBs-Character-Record-Sheet/pull/49
   Workarounds: 1) call the class witch-class or something longer than witch
                2) change the regexp (chosen)
*/
ClassList.sorcerer.regExpSearch = /sorcerer/i;

/*************** SOURCES *******************************/
SourceList["MHP:CW"] = {
    name : "MageHandPress: Complete Witch",
    abbreviation : "MHP:CW",
    group : "MageHandPress",
    url : "https://store.magehandpress.com/products/witch",
    date : "2018/02/10",    
};


/*************** SPELLS ********************************/
// Define the "witch" spells that are not already defined
SpellsList["accursed act"] = {
    name : "Accursed Act",
    classes : ["witch"],
    source : ["MHP:CW", 26],
    level : 1,
    school : "Ench",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "incense and a black candle",
    duration: "Conc, 1min",
    save : "Wis",
    description : "1 crea save or take 1d8/SL+SpellMod psychic when Attack or Cast",
    descriptionFull : "Lighting a candle, you speak dark curses in a lost tongue, directed at one creature you can see within range. That creature must make a Wisdom saving throw or be cursed for the duration. While cursed, whenever that creature takes the Attack or Cast a Spell action, it takes psychic damage equal to 1d8 + your spellcasting modifier. The creature can repeat their saving throw at the end of their turn, ending the effect on a success A remove curse spell ends this curse early.  \n   At Higher Levels. When you cast this spell using a spell slot of 2nd-level or higher, you deal an additional 1d8 psychic damage for each slot level above 1st."
};

SpellsList["corruption curse"] = {
    name : "Corruption Curse",
    classes : ["witch"],
    source : ["MHP:CW", 26],
    level : 6,
    school : "Necro",
    time : "1 a",
    range : "60 ft",
    components : "V,S,",
    duration: "Conc, 1hr",
    description : "disadv on: DEX chk +save or CON sav+no regain HP or WIS sav+spel atk ",
    descriptionFull : "With a piercing glare and sinister gesture, you send a ribbon of dark magic into a target’s body. A creature you can see within range is cursed for the duration and suffers from one of the following effects of your choice while cursed: \n   Dull Reflexes. The target has disadvantage on Dexterity checks and saving throws. \n  Feeble Fortitude. The target has disadvantage on Constitution saving throws and can't regain hit points. \n  Weak Will. The target has disadvantage on Wisdom saving throws as well as spell attack rolls. \n  A remove curse spell ends this curse early.",
};

SpellsList["curse of aging"] = {
    name : "Curse of Aging",
    classes : ["witch"],
    source : ["MHP:CW", 26],
    level : 6,
    school : "Trans",
    time : "1 a",
    range : "60 ft",
    components : "V,S",
    duration: "Until dispelled",
    save : "Wis",
    description : "WIS save or disadv STR chk+sav",
    descriptionFull : "A creature you touch must succeed on a Wisdom saving throw or become cursed to age and wither. While cursed, the target ages at twice their normal rate, becoming two days older for every day that passes. In addition, it has disadvantage on all Strength checks and saving throws.\n   A remove curse spell ends this curse.",
};

SpellsList["curse of binding"] = {
    name : "Curse of Binding",
    classes : ["witch"],
    source : ["MHP:CW", 26],
    level : 7,
    school : "Ench(rit)",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "body part targ",
    duration: "Until dispelled",
    save : "Chr",
    description : "Bind creat to 20ft loc.  STR sav DC or dragged back.  Teleport CHR save.",
    descriptionFull : "You bind one creature or object to a location, cursing it so that it may never leave. Choose a target and a location within range, both of which you must be able to see. If the target is a creature, it must make a Charisma saving throw (a willing creature may choose to fail this save), or be cursed to be permanently bound to the chosen location. While cursed, the target can act and move around freely, as long as it remains within 20 feet of the point it is bound to. If the target begins its turn outside of this area, it must make a Strength saving throw against your spell save DC or be dragged 60 feet towards the point it was bound to.\n   In addition, if the creature attempts to teleport or use any other means of extraplanar travel, it must make another Charisma saving throw. On a failure, the travel attempt fails and any resources used are wasted. On a success, the curse is suppressed until the creature returns to the plane on which it was bound, at which point the dragging effect resumes.\n   A remove curse spell ends this curse.",
};

SpellsList["curse of blades"] = {
    name : "Curse of Blades",
    classes : ["witch"],
    source : ["MHP:CW", 26],
    level : 3,
    school : "Necro",
    time : "1 a",
    range : "60 ft",
    components : "V,S",
    duration: "Conc, 1min",
    save : "Wis",
    description : "Crea save or attack self.",
    descriptionFull : "Unholy bands of black energy tie a creature to its weapon. Choose a creature you can see that is holding a weapon within range to make a Wisdom saving throw. On a failed save, the creature is cursed for the duration. A cursed target can't willingly drop or stow its weapon. Additionally, whenever it takes the Attack action on its turn, it makes one additional attack using its weapon targeting itself, against its own AC, dealing damage as normal on a hit.\n   A remove curse spell ends this curse early.",
};

SpellsList["curse of chains"] = {
    name : "Curse of Chains",
    classes : ["witch"],
    source : ["MHP:CW", 27],
    level : 1,
    school : "Necro",
    time : "1 a",
    range : "120 ft",
    components : "V,S",
    duration: "Conc, 1min",
    save : "Con",
    description : "Two crea 30 ft apart save or cannot move away from each other",
    descriptionFull : "A black brand resembling iron shackles darkens the ankles of two creatures you can see. Choose two creatures you can see within range of the spell and within 30 feet of each other to make a Constitution saving throw. A willing creature can choose to fail this saving throw. On a failed save, a target is cursed for the duration. If only one target is cursed by this spell, you can use your action or bonus action on a subsequent turn to choose another target within 30 feet of the cursed creature to make a saving throw. While two creatures are cursed by this spell, they are unable to willingly move further away from each other.\n   A remove curse spell ends this curse early.",
};

SpellsList["curse of tomes"] = {
    name : "Curse of Tomes",
    classes : ["witch"],
    source : ["MHP:CW", 27],
    level : 1,
    school : "Ench",
    time : "1 a",
    range : "60 ft",
    components : "V,S",
    duration: "24 hr",
    save : "Wis",
    description : "Creat save or illiterate.  Check 1/hr.",
    descriptionFull : "You speak the backward words of a dead language, scrambling the letters in a target's mind. Choose one creature within range to make a Wisdom saving throw. On a failed save, the target is cursed for the duration. A cursed target can't read or write any language for the duration, prepare spells from a spellbook, perform rituals, or cast any spells that involve writing runes or sigils. At the end of each hour, the target can repeat this spell, ending the effects early on a success.\n   A remove curse spell ends this curse early.",
};

SpellsList["curse ward"] = {
    name : "Curse Ward",
    classes : ["witch"],
    source : ["MHP:CW", 27],
    level : 2,
    school : "Abjur",
    time : "1 a",
    range : "Touch",
    components : "V,S",
    duration: "1hr",
    description : "Prot curse, posessed, hex.  Max HP can't be lowered.",
    descriptionFull : "You reach out your hand and touch a willing target within your reach, raising a smoke-like barrier around it. For the duration, the target has resistance to necrotic damage and can't be cursed, possessed, or targeted by a hex. Also, its maximum hit points can't be lowered. If the target is already affected by one of these effects, the effect is suspended until the spell ends.",
};

SpellsList["curse weapon"] = {
    name : "Curse Weapon",
    classes : ["witch"],
    source : ["MHP:CW", 27],
    level : 5,
    school : "Trans",
    time : "1 a",
    range : "Touch",
    components : "V,S",
    duration: "Until dispelled",
    description : "Enchant weapon (fey immune), cursed roll d6 see table MHP:CW p.28",
    descriptionFull : "You touch a weapon. Until the spell ends, the weapon becomes magical (if it wasn’t already) and gains the following property in addition to any others it has:\n   Curse. This weapon is cursed, and touching it extends this curse to you, unless you are a fey creature, in which case you suffer no ill effect. As long as you remain cursed, you are unwilling to part with the weapon, keeping it within reach at all times.  Whenever you roll a 1 on an attack roll with this weapon, roll a d6 and apply the result from the table below. \n   1: You fall prone and your turn ends immediately.\n   2: You are blinded until the end of your next turn.\n   3: You are deafened until the end of your next turn.\n   4:   You are immediately teleported 20 feet in a random direction. If you would end up within a solid obstacle, you take 2d6 bludgeoning damage and end up as close to the destination as possible.\n   5: All food items within ten feet of you immediately spoil, becoming completely inedible.\n   6: The weapon transforms into a live goose (or another animal chosen by the GM), which is magically bound to your hand and cannot be removed by any means (except by ending the curse). It reverts to its original form after one minute.\n   A remove curse spell ends this curse",
};

SpellsList["curse of youth"] = {
    name : "Curse of Youth",
    classes : ["witch"],
    source : ["MHP:CW", 28],
    level : 4,
    school : "Trans",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "a child's toy",
    duration: "Conc, 1hr",
    save : "Wis",
    description : "Crea to baby if not save.  Baby 50% HP, can't do anything, prone.",
    descriptionFull : "This spell reverses time for a creature that you can see within range until it becomes a helpless baby. An unwilling creature must make a Wisdom saving throw to avoid the effect. Shapechangers and creatures that do not experience infancy automatically succeed on this saving throw.\n   If the target drops to 0 hit points, it reverts back to its original age, and excess damage carries over to its normal form. As long as the excess damage doesn’t reduce the creature’s normal form to 0 hit points, it isn’t knocked unconscious.\n   The target retains all of its game statistics except its base movement speed, hit points, and size, which are changed to 10 feet, half of the target's maximum, and one size category smaller, respectively. It cannot take any actions, bonus actions, or reactions, cannot cast spells, and cannot communicate, except by crying (a person using the spell comprehend languages or similar abilities can interpret such crying to gain a rough understanding of the baby’s emotional state). While under the effects of this spell, the target is prone and cannot stand up without the help of an adult.\n  The target’s gear is unaffected by this spell; it will likely fall off the target due to being vastly oversized.\n   A remove curse spell ends this curse early.\n   At Higher Levels. If you cast this spell using a spell slot of 7th level or higher and maintain your concentration on it for the entire possible duration, the target makes another Wisdom saving throw. On a failure, the target is cursed to remain as a baby until a remove curse spell ends the curse. Additionally, if the target drops to 0 hit points, it does not revert to original age, and begins making death saves as normal. On a success, the effects end.",
};

// Elemental Curse is missing from book

SpellsList["flawed reconstruction"] = {
    name : "Flawed Reconstruction",
    classes : ["witch"],
    source : ["MHP:CW", 28],
    level : 1,
    school : "Trans",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    compMaterial : "needle and thread",
    duration: "Inst",
    description : "Targ regain 4d8.  Start of targ turn bleed 1d8, stop by action",
    descriptionFull : "You stitch together the wounds of a creature you touch, which regains 4d8 hit points. However, the mending is imperfect, and the target begins to bleed profusely. At the start of its turn, the target takes an unavoidable and irreducible 1d8 damage. A bleeding creature can stop the bleeding by using its action to bandage its wounds. A creature that regains hit points due to this spell will be left with some permanent scars.\n   At  Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st",
};

SpellsList["frolicking fountain"] = {
    name : "Frolicking Fountain",
    classes : ["witch"],
    source : ["MHP:CW", 28],
    level : 1,
    school : "Ench",
    time : "1 a",
    range : "120 ft",
    components : "V,S,M",
    compMaterial : "conductor's baton",
    duration: "Conc, 1min",
    save : "Wis",
    description : "5ft cube water hypnotize.  Save or approach.  At 5ft, bons 4d6 bludg",
    descriptionFull : "You cause a 5-foot cube of water within range to animate in a hypnotic motion. The water swirls for the duration, not leaving its space except to send small jets up to five feet into the air. Each creature except for the caster within 60 feet which sees the fountain must make a Wisdom saving throw or become charmed by you for the duration. While charmed by this spell, a creature must use its movement on each of its turns to get as close to the water as possible. A charmed creature can’t willingly move away from the fountain. At the end of its turn, a charmed creature can attempt the saving throw again, ending the effect on a success. Once a creature has succeeded on a save against this spell, it cannot be affected by the same instance of it again.\n   If a creature is within 5 feet of the dancing waters, you can use a bonus action to command the water to lash out at that creature. Make a melee spell attack against the target. On a hit, the water deals 4d6 bludgeoning damage to the target. If the target is charmed by this spell, it can attempt the saving throw again after taking damage from it.",
};

SpellsList["hollowing curse"] = {
    name : "Hollowing Curse",
    classes : ["witch"],
    source : ["MHP:CW", 29],
    level : 1,
    school : "Necro",
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration: "Conc, 1min",
    save : "Dex",
    description : "Mist drain 1d12/SL failed save, next action 1d12",
    descriptionFull : "Tendrils of black mist extend from your fingertips, latching onto a creature and draining its vitality. Choose a creature you can see within range to make a Dexterity saving throw. On a failed save, the target takes 1d12 necrotic damage and is cursed for up to one minute. While the target is cursed, you can use your action to deal 1d12 necrotic damage to it automatically. The curse ends early if you use your action to do anything else, or if the target is ever outside the spell’s range or if it has total cover from you. A remove curse spell also ends this curse.\n   At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st.",
};

SpellsList["identity curse"] = {
    name : "Identity Curse",
    classes : ["witch"],
    source : ["MHP:CW", 29],
    level : 9,
    school : "Ench",
    time : "1 a",
    range : "60 ft",
    components : "V,S,M",
    duration: "Until Dispelled",
    save : "Wis",
    description : "Fail save uncon 1hr and forget identity",
    descriptionFull : "You extend a finger to a creature's temple, who then forgets its own name. Choose one creature you can touch to make a Wisdom saving throw. On a failed save, the target falls unconscious for 1 hour and is cursed to forget its identity. When the target awakes, it loses all its personal memories, though the target retains all of its general knowledge, proficiencies, and other statistics. The target will not realize it has any class features or special abilities, and so does not willingly make use of them. If left to its own devices, the target will quickly adopt a new name and begin to build a new identity.\n   A remove curse spell ends this curse. When this curse ends, the target regains all its past memories.",
};

SpellsList["intrusive thought"] = {
    name : "Intrusive thought",
    classes : ["witch"],
    source : ["MHP:CW", 29],
    level : 2,
    school : "Trans",
    time : "reaction",
    range : "60 ft",
    components : "V,S",
    duration: "Instantaneous",
    save : "Wis",
    description : "Crea save on Atk, Dash, Dodge, Diseng. fail and you choose",
    descriptionFull : "As a reaction when a creature you can see within range takes the Attack, Dash, Dodge, or Disengage action, you can attempt to distort its thinking. The target makes a Wisdom saving throw. On a failed save, the creature instead takes your choice of those actions.",
};

SpellsList["pharaoh's curse"] = {
    name : "Pharaoh's Curse",
    classes : ["witch"],
    source : ["MHP:CW", 29],
    level : 5,
    school : "Necro",
    time : "1 a",
    range : "10 ft",
    components : "V,S",
    duration: "Until dispelled",
    save : "Con",
    description : "Puff of dust.  Creat fail mummy rot: -3d6 HP/24 hr, no regain HP",
    descriptionFull : "Opening your palm, you release a puff of dust, the pestilence of mummy rot. Choose one creature within range to make a Constitution saving throw. On a failed save, the target is cursed with mummy rot. The cursed target can’t regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target’s hit point maximum to 0, the target dies, and its body turns to dust.\n   The curse lasts until removed by the remove curse spell or any other spell or magical effect that cures mummy rot.",
};

SpellsList["ruby-eye curse"] = {
    name : "Ruby-Eye Curse",
    classes : ["witch"],
    source : ["MHP:CW", 29],
    level : 3,
    school : "Necro",
    time : "1 a",
    range : "Touch",
    components : "V,S",
    duration: "Conc, 10min",
    save : "Con",
    description : "Red haze in eyes.  Crea save or blind past 5ft",
    descriptionFull : "A red haze clouds the eyes of a creature that meets your gaze. Choose one creature you can see within range to make a Constitution saving throw. On a failed save, the creature is cursed for the duration. A cursed target can see normally out to 5 feet, but is blind beyond this radius",
};


// Add the witch as a class for spells that do not already have it
[ // cantrips
    "acid splash", "chill touch", "dancing lights", "mage hand", "message", "minor illusion", "presdigitation", "resistance", "spare the dying", "true strike",
    
    // 1st level
    "animal friendship", "bane", "charm person", "comprehend languages", "detect magic", "disguise self", "expeditious retreat", "faerie fire",
    "fog cloud", "hellish rebuke", "hex", "hideous laughter", "protection from evil and good", "silent image", "sleep", "thunderwave", "unseen servant",

    // 2nd level
    "animal messenger", "blindness/deafness", "calm emotions", "curse ward", "darkenss", "detect thoughts", "enthrall", "hold person", "intrusive thought", "invisibility", "knock", "misty step", "ray of enfeeblement", "shatter", "suggestion",

    // 3rd level
    "bestow curse", "clairvoyance", "curse of blades", "dispel magic", "fear", "hypnotic pattern", "magic circle", "major image", "nondetection", "sending", "slow", "speak with dead", "speak with plants", "stinking cloud", "tongues",

    // 4th level
    "arcane eye", "banishment", "compulsion", "confusion", "confusion", "dimension door", "greater invisibility", "locate creature", "phantasmal killer",

    // 5th level
    "dispel evil and good", "dominate person", "dream", "geas", "hold monster", "insect plague", "mislead", "modify memory", "planar binding", "scrying", "seeming",

    // 6th level
    // elemental curse seems to be missing
    "eyebite", "guards and wards", "magic jar", "mass suggestion", "programmed illusion", "true seeing",

    // 7th level
    "etherealness", "forcecage", "mirage arcane", "project image", "plane shift", "sequester", "symbol",
    // 8th level
    "antipathy/sympathy", "demiplane", "dominate monster", "feeblemind", "glibness", "mind blank", "power word stun",

    // 9th level
    "astral projection", "foresight", "imprisonment", "weird"
].forEach(function (mySpells) {
    if (SpellsList[mySpells]) SpellsList[mySpells].classes.push("witch");
});

// TODO: write script that looks for cantrips of sorcerer and warlock and adds them to witch list.


ClassList["witch"] = {
    regExpSearch : /witch/i,
    name : "Witch",
    source : ["MHP:CW", 1],
    primaryAbility : "\n \u2022 Witch: Charisma;",
    abilitySave : 6,
    prereqs : "\n \u2022 Witch: Charisma 13;",
    improvements :  levels.map( function(n) {
        return n < 4 ? 0 : n < 8 ? 1 : n < 12 ? 2 : n < 16 ? 3 : n < 19 ? 4 : 5;
    }),
    die : 8,
    saves : ["Wis", "Cha"],
    skills : ["\n\n" + toUni("Witch") + ": Choose two from Arcana, Animal Handling, History, Insight, Medicine, Nature, and Religion."],
    toolProfs : {
        primary : ["Alchemist's supplies", "Poisoner's kit"],
        secondary : ["Alchemist's supplies", "Poisoner's kit"],
    },
    armor : [
        [true, false, false, false],
        [true, false, false, false]//multiclass
    ],
    weapons : [
        [true, false, ["blowgun", "shortsword", "whip"]],
        [true, false, ["blowgun", "shortsword", "whip"]]//multiclass
    ],
    equipment : "Witch starting equipment:\n \u2022 A whip and blowgun -or- a light crossbow and 20 bolts -or- any simple weapon;\n \u2022 A component pouch -or- an a totem;\n \u2022 A scholar's pack -or- dungeoneer's pack;\n \u2022 Leather armor, any simple weapon and one daggers.\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
    attacks : levels.map( function(n) { return 1; } ),
    spellcastingFactor : 1,
    spellcastingKnown : {
        cantrips :  levels.map( function(n) { return n < 4 ? 2 : n < 10 ? 3 : 4 ; } ),
        spells : [4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14, 14],
    },
    subclasses : ["Witch Craft", ["witch-black magic", "witch-blood magic", "witch-blue magic", "witch-cloud magic", "witch-fragrant magic", "witch-green magic", "witch-heart magic", "witch-lunar magic", "witch-purple magic", "witch-red magic", "witch-salt magic", "witch-sand magic", "witch-tea magic", "witch-white magic",]],
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["MHP:CW", 3],
            minlevel : 1,
            description : desc([
                "I can cast prepared witch cantrips/spells, using Charisma as my spellcasting ability.",
                "I can cast my prepared witch spells as rituals if they have the ritual tag.",
                "I can use an arcane focus as my spellcasting focus.",
            ]),
            additional : levels.map( function(n) { return (n < 4 ? 2 : n < 10 ? 3 : 4) + " cantrips known"; })
        },
        "witch's curse" : {
            name : "Witch's Curse",
            source : ["MHP:CW", 3],
            minlevel : 1,
            description : "\n   You are wracked by a terrible curse which infects your body and soul. At 1st level, choose the form that this curse takes on \"Choose Feature\".",
            choices: ["Hideous", "Hollow", "Possessed"],
            "hideous": {
                name : "Hideous",
                source : ["MHP:CW", 3],
                description : "Your appearance is ghastly to behold. When you roll initiative, you can choose one humanoid you can see to scare. That creature must make a Wisdom saving throw or be frightened until the end of your next turn.",
                action : ["action", ""]
            },
            "hollow": {
                name : "Hollow",
                source : ["MHP:CW", 3],
                description : "Your soul has been divorced from your body, trapping you in a limbo between life and death. When you reduce a hostile creature to 0 hit points, you drain some of its life force, and gain temporary hit points equal to your witch level + Charisma modifier (minimum of 1).",
            },
            "possessed": {
                name : "Possessed",
                source : ["MHP:CW", 4],
                description : "Your soul is occupied by a foreign spirit that sometimes tries to wrest away your consciousness. However, while you sleep, the spirit whispers magical secrets to you. You learn an additional witch spell at a level for which you have spell slots at 1st level, and again at 4th level, 8th level, 12th level, and 16th level. These spells do not count against your total number of spells known.",
                spellcastingBonus : {
                    name : "Possessed",
                    class : "witch",
                    times : levels.map( function(n) { return (n < 4 ? 1 : n < 8 ? 2 : n < 12 ? 3 : 4); } ),
                    oncelr : true,
                }
            },
        },
        "subclassfeature3" : {
            name : "Witch's Craft",
            source : ["MHP:CW", 4],
            minlevel : 3, 
            description : desc([
                "Choose a Witch Craft that you belong to and put it in the \"Class\" field",
                "Choose either the Magic of Black, Blue, Red, Green, etc."
            ])
        },
        "hexes" : {
            name : "Hexes",
            source : ["MHP:CW", 4],
            minlevel : 1,
            description : desc([
                "You can learn a number of powerful incantations, known as Hexes, derived from the same insidious magic which cursed you.",
                "At 1st level, you gain two hexes of your choice. Your hex options are detailed at the end of the class description. When you gain certain witch levels, you gain additional hexes of your choice, as shown in the Hexes Known column of the Witch table. Additionally, when you gain a level in this class, you can choose one of the hexes you know and replace it with another hex that you could learn at that level.",
                "Unless otherwise noted, you can only have one hex active at a time and you concentrate on this hex like a spell. You can concentrate on a hex and a spell at the same time, and you make only one check to maintain your concentration on both.",
                "Use the \"Choose Feature\" button above to add Eldritch Invocations to the third page."
            ]),
            extraname : "Hex",
            extrachoices : ["Abate", "Apathy", "Beckon Familiar", "Charm", "Cripple", "Dire Familiar", "Discord", "Doomward", "Duplicity", "Evil Eye", "Face Swap", "Finagle", "Fortune", "Go Unseen", "Hesitate", "Knowing", "Mind's Eye", "Mire", "Misfortune", "Nails", "Obfuscate", "Peacebond", "Pestilence", "Prehensile Hair", "Ruin", "Scurry", "Shriek", "Slumber", "Telepathy", "Tremors", "Ward",],
            "abate" : {
                name : "Abate",
                description : desc(["You can use your action to temper those around you. Creatures you choose within 30 feet cannot take reactions. This effect lasts until the end of your next turn."]),
            },
            "apathy" : {
                name : "Apathy",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Wisdom saving throw. On a failed save, until the end of your next turn, the creature becomes indifferent toward one creature of your choice that it is hostile towards. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the hex ends, the creature becomes hostile again, unless the GM rules otherwise."]),
            },
            "beckon familiar" : {
                name : "Beckon Familiar",
                description : "You can cast the find familiar spell as an action without expending a spell slot or spell components."
            },
            "bleeding" : {
                name : "Bleeding",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Constitution saving throw. On a failed save, each time this creature takes damage, it takes an additional 1d4 damage. This effect lasts until the end of your next turn."]),
            },
            "charm" : {
                name : "Charm",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Wisdom saving throw. On a failed save, the creature is charmed by you until the end of your next turn. When the hex ends, the creature knows it was charmed."]),
            },
            "cripple" : {
                name : "cripple",
                description : "As an action, choose one creature you can see within 60 feet to make a Constitution saving throw. On a failed save, the creature can move a maximum of 10 feet or half its movement speed on its turn, whichever is lower, until the end of your next turn.",
            },
            "dire familiar" : {
                name : "Dire Familiar",
                description : desc([
                    "As an action, you can bolster your summoned familiar. For 1 minute, your familiar's current and maximum hit points is increased by your witch level and it gains a bonus to its damage rolls equal to your Charisma modifier.",
                    "You can cast other hexes while this hex is in effect. Once you cast this hex, you can't cast it again until your familiar is dismissed, or until its duration expires."]),
            },
            "discord" : {
                name : "Discord",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Wisdom saving throw. On a failed save, the creature must use its action before moving to make a melee weapon attack a creature that you choose. If no creatures are within its reach, the creature acts normally. This effect lasts until the end of your next turn."]),
            },
            "disorient" : {
                name : "Disorient",
                description : desc(["As an action, choose one creature that you can see within 60 feet to make a Constitution saving throw. On a failed save, whenever this target makes an attack roll before the end of your next turn, it must roll a d6 and subtract the number rolled from the attack roll."]),
            },
            "doomward" : {
                name : "Doomward",
                description : desc(["As an action, choose one friendly creature other than yourself you can see within 60 feet. If this creature drops to 0 hit points before the end of your next turn and doesn’t die outright, it drops to 1 hit point instead. This hex then ends and can’t be used to target the same creature until you finish a short or long rest."]),
            },
            "duplicity" : {
                name : "Duplicity",
                description : desc(["s an action, you can create a duplicate self, composed of shadowstuff, to confuse your enemies. When a creature attacks you, roll any die. On an odd number, the attack roll misses. This effect lasts until the end of your next turn or until you attack or cast a spell."]),
            },
            "evil eye" : {
                name : "Evil Eye",
                description : desc(["As an action, choose one creature you can see that can see you within 60 feet to make a Wisdom saving throw. On a failed save, the creature is frightened of you until the end of your next turn."]),
            },
            "face swap" : {
                name : "Face Swap",
                description : desc([
                    "As a bonus action, you can mark a Large or smaller beast or a willing humanoid you can see within 60 feet with a special sigil. This sigil lasts for 1 hour, or until you mark another creature.", 
                    "You can then use your action to trade faces with your familiar or the marked creature, gaining a limited amount of control over it. For the next minute, or until the target dies or you choose to end this hex on your turn (no action required), you are deaf and blind with regard to your own senses, and you cannot move, as your own body has a foreign face. During that time, your face replaces that of the target, and you can see through the target's eyes, hear what it hears, and speak to those nearby. You gain none of the target's special senses. You can also control where the target moves."]),
            },
            "finagle" : {
                name : "Finagle",
                description : desc([
                    "As an action, you can invisibly manipulate objects within 60 feet of you, causing one of the following effects:",
                    "\u2022 Lift, carry, and move up to 30 feet an object weighing less than 100 pounds.",
                    "\u2022 Push each object within 5 feet of you weighing less than 100 pounds up to 10 feet away from you.",
                    "\u2022 Unlock one nonmagical lock within range. This lock becomes broken after using this ability.",
                    "\u2022 Break one small nonmagical object with fewer than 10 hit points that can fit within a 1-foot cube.",
                    "\u2022 Lift and throw an object weighing less than 100 pounds up to 60 feet in a straight line. Whenever you do so, you can make a spell attack roll against one creature you can see within range. The object takes 1d10 + your Charisma modifier bludgeoning damage. On a hit, both the target and the object take this damage."]),
            },
            "fortune" : {
                name : "Fortune",
                description : desc(["As an action, choose one friendly creature other than yourself you can see within 60 feet. The creature has advantage on saving throws until the end of your next turn."]),
            },
            "go unseen" : {
                name : "Go Unseen",
                description : desc([
                    "As an action, you and your familiar become invisible. The effect ends at the end of your next turn, or if you or your familiar attack or cast a spell.",
                    "Once you cast this hex, you can't cast it again for 1 minute."]),
            },
            "hesitate" : {
                name : "Hesitate",
                description : desc(["As an action, choose one creature you can see that can see you within 60 feet to make a Wisdom saving throw. On its turn, the target can move or use an action to make an attack, but not both. This effect lasts until the end of your next turn."]),
            },
            "knowing" : {
                name : "Knowing",
                description : desc([
                    "As an action, you open your third eye and become intuitively aware of your surroundings. You have advantage on Wisdom (Insight) rolls until the beginning of your next turn. Additionally, choose of the following pieces of information:",
                    "\u2022 If a creature can speak a language",                                    
                    "\u2022 If a creature is at or below half its maximum hit points",
                    "\u2022 What a creature’s highest ability score is",
                    "You learn that piece of information for each creature within 30 feet. You can only learn one of these things about a creature, even if you cast this hex more than once."]),
            },
            "mind's eye" : {
                name : "Mind's Eye",
                description : desc([
                    "Your spiritual third eye heightens your vision to greater dimension. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray. You can also see through fog, mists, and similar obscurements without penalty. If you already have darkvision, its range increases by 60 feet.",
                    "Additionally, you have a +2 bonus to your passive Wisdom (Perception) score.",
                    "This hex is always active and you can cast other hexes while it is in effect."]),
            },
            "mire" : {
                name : "Mire",
                description : desc(["As an action, you can transform the ground within 30 feet of where you cast this hex into murky swamp, which is difficult terrain. You can move without penalty in this area. This effect lasts until the end of your next turn."]),
            },
            "misfortune" : {
                name : "Misfortune",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Wisdom saving throw. On a failed save, whenever this target makes an ability check or a saving throw before the end of your next turn, it must roll a d6 and subtract the number rolled from the ability check or saving throw."]),
            },
            "nails" : {
                name : "Nails",
                description : desc([
                    "You grow unnaturally long and sharp fingernails. Your unarmed strikes deal 1d4 slashing damage and count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. Additionally, when you use the Attack action with an unarmed strike on your turn, you can make one unarmed strike as a bonus action.",
                    "This hex is always active and you can cast other hexes while it is in effect."]),
            },
            "obfuscate" : {
                name : "Obfuscate",
                description : desc(["As an action, you create a 20-foot-radius sphere of fog centered on yourself. The sphere spreads around corners, and its area is heavily obscured. This effect lasts until the end of your next turn or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it."]),
            },
            "peacebond" : {
                name : "Peacebond",
                description : desc(["As an action, you can lock weapons to their owners. The weapons and ammunition of each creature within 30 feet become locked in their sheaths, quivers, or holsters until the end of your next turn. During this time, a creature can use its action to free its weapon with a Strength check, opposed by your Spell save DC."]),
            },
            "pestilence" : {
                name : "Pestilence",
                description : desc(["As an action, you create a 5-foot radius cloud of toxic gas around you. Each creature other than you and your familiar that enters this area or begins its turn there must make a Constitution saving throw or be poisoned until the end of your next turn. This cloud follows you as you move, and disperses at the end of your next turn"]),
            },
            "prehensile hair" : {
                name : "Prehensile Hair",
                description : desc([
                    "You grow unduly long and tough hair (even from your eyebrows) which you can manipulate at will. You can use your hair to perform simple tasks within 10 feet of you, such as manipulating an object, opening an unlocked door or container, stowing or retrieving an item from an open container, or pouring the contents out of a vial. You can cast spells with a range of Touch using your hair, out to a range of 10 feet.",
                    "This hex is always active and you can cast other hexes while it is in effect."]),
            },
            "ruin" : {
                name : "Ruin",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Constitution saving throw. On a failed save, the creature's AC decreases by 4, to a minimum of 10, until the end of your next turn."]),
            },
            "scurry" : {
                name : "Scurry",
                description : desc([
                    "As an action, a nonmagical object you choose within 30 feet sprouts legs and runs away. You can't target an object that weighs more than 10 pounds, nor can you target one that is being worn as clothing or armor; however, you can target certain objects that are being carried, as long as they are not affixed entirely around a creature's body and are not being held in a hand. For example, you can't target a creature's helmet or a sword it is wielding, but you can target a drawstring pouch it is wearing or a dagger that is sheathed at its side.",
                    "The object animates, wriggles free of its owner, if it has one, sprouts two legs, and moves 20 feet in a direction you choose. At the beginning of your turn, you can choose which direction the object moves. The object has an AC of 10, if its AC was not already higher, and remains animated until the end of your next turn, or until it is picked up."]),
            },
            "shriek" : {
                name : "Shriek",
                description : desc(["As an action, you release an ear-piercing wail. Each creature within 15 feet of you must make a Charisma saving throw or be deafened until the end of your next turn. Creatures that can't hear you are immune to this effect."]),
            },
            "slumber" : {
                name : "Slumber",
                description : desc(["As an action, choose one creature you can see within 60 feet to make a Wisdom saving throw. On a failed save, the target falls unconscious until it takes damage, or until the end of your next turn. Undead, creatures which are immune to being charmed, and creatures whose current hit points are greater than five times your witch level are immune to this effect."]),
            },
            "telepathy" : {
                name : "Telepathy",
                description : desc([
                    "You can communicate telepathically with any creature you can see within 60 feet of you. You don’t need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.",
                    "This hex is always active and you can cast other hexes while it is in effect."]),
            },
            "tremors" : {
                name : "Tremors",
                description : desc(["As an action, you can create a small quake. Each creature on the ground within 10 feet of you must make a Dexterity saving throw or be knocked prone."]),
            },
            "ward" : {
                name : "Ward",
                description : desc(["As an action, choose 1 creature you can see other than yourself within 60 feet. This creature has resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons until the end of your next turn."]),
            },
        },       
        "cackle" : {
            name : "Cackle",
            source : ["MHP:CW", 4],
            minlevel : 2,
            description : desc([
                "Extend hexes in 60ft for 1 rnd"
            ]),
            action : ["action", ""],
            usages : "at will",
        },
        "familiar" : {
            name : "Familiar",
            source : ["MHP:CW", 4],
            minlevel : 2,
            description : desc([
                "You learn the find familiar spell and can cast it as a ritual without material components. The spell doesn’t count against your number of spells known.", 
                "When you cast the spell, you can choose one of the normal forms for your familiar or one of the special forms on MHP:CW p19-24. EXCEPT brass dragon wyrmling, grep, imp, quasit, or spook."
            ]),
            // TODO: figure out how to add familiar attack to bonus
            // TODO: figure out how to modify settings on familiar sheet
            action : ["action", ""],
            usages : "at will",
            spellcastingBonus : {
                name : "Witch Familiar",
                class : "wizard",
                spells : ["find familiar"],
                selection : ["find familiar"],
                atwill : true,
            }
        },
        "familiar attack" : {
            name : "Familiar Attack",
            source : ["MHP:CW", 4],
            minlevel : 2,
            description : desc([
                "Once per turn as an action or a bonus action, you can allow your familiar to use its reaction to make one attack or cast a spell. When your familiar makes an attack, it uses your spell attack bonus instead of its own attack bonus on attack rolls, and deals damage equal to your proficiency bonus, if it would otherwise deal less. You also add twice your witch level to your familiar's maximum hit points.", 
            ]),
            // TODO: figure out how to add familiar attack to bonus
            // TODO: figure out how to modify settings on familiar sheet
            action : ["bonus", ""],
            
        },
        "insidious spell" : {
            name : "Insidious Spell",
            source : ["MHP:CW", 3],
            minlevel : 5,
            description : desc(["You can maximize the damage of a witch cantrip you cast that only damages a single creature that is sole target of your hex."]),
        },
        "improved familiar" : {
            name : "Improved Familiar",
            source : ["MHP:CW", 5],
            minlevel : 7,
            description : desc([
                "you can cast a spell with range Self on your familiar as if your familiar had cast the spell itself. Your familiar concentrates on this spell for its spell for its duration.",                               
                "Additionally, you can choose the following forms for you familiar: brass dragon wyrmling (without breath weapons), grep, imp, quasit, or spook."]),
        },
        "cauldron" : {
            name : "Cauldron",
            source : ["MHP:CW", 5],
            minlevel : 9,
            description : desc([
                "You can brew potions in a bubbling cauldron using raw components scavenged from nature. Once per day during a short rest, you can expend a number of spell slots to brew up to 3 potions. These potions must have a total cost no greater than the total number of spell slot levels expended.",
                "You can brew potions of animal friendship, healing, and poison for 1 spell slot level each. At 13th level, you can brew potions of heroism and mind reading, and philters of love for 2 spell slot levels each. The potions retain potency 24 hours, after which they become inert."])
        },
        "grand hex" : {
            name : "Grand Hex",
            source : ["MHP:CW", 5],
            minlevel : 11,
            description : desc(["By 11th level, you have perfected deeply malevolent forms of magic. You learn one Grand Hex, and you learn another at 15th and 18th level. Grand hexes are on MHP:CW p8-10."]),
            extraname : "Grand Hex",
            extrachoices : ["Black Finger", "Blood Cauldron", "Coven", "Dark Hex", "Dual Hex", "Forceful Personality", "Hybrid", "Into a Toad", "Possession", "Remote Hex", "Slow Death", "Weave of Fate", "Witch's Broom", "Witch's Hut",],
            "black finger" : {
                name : "Black Finger",
                description : desc(["When a single creature is the target of one of your hexes, one of its fingers turns black, and its fate is corrupted. Whenever this creature rolls a 20 on a d20 roll, the roll instead becomes a 1."]),
            },
            "blood cauldron" : {
                name : "Blood Cauldron",
                description : desc([
                    "You can brew potions immediately following a long rest and whenever you take a short rest. When you do so, you can brew up to 5 potions.",
                    "In addition to your potion options, you can brew potions of climbing and growth and vials of basic poison for 1 spell slot level each, potions of clairvoyance, greater healing, and resistance for 2 spell slot levels each, and potions of gaseous form, invisibility, and speed for 3 spell slot levels each. The potions retain potency 24 hours, after which they become inert."]),
            },
            "coven" : {
                name : "Coven",
                description : desc([
                    "Through a dark bargain, you have become a member of a hag's coven. You can enlist the help of one of your foul sisters, a green hag, by summoning her in a 1-minute long ritual. Doing so dismisses your familiar, and you cannot summon your familiar while your hag ally is summoned.",
                    "In combat, the hag rolls its own initiative and acts on its own turn. On each of your turns, you can use a bonus action to mentally command the hag. You decide what action the hag will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. The hag can choose to ignore this action if she sees fit. If you issue no commands, the hag acts and moves as she chooses. The hag is friendly to you and your allies.",
                    "At the end of one hour, or when the hag is reduced to zero hit points, it flees, instantly teleporting away.",
                    "After performing the ritual to summon your hag ally, you must finish a long rest before you can do it again."]),
            },
            "dark hex" : {
                name : "Dark Hex",
                description : desc(["Choose one hex you know. Creatures have disadvantage on saving throws made to resist this hex's effects."]),
            },
            "dual hex" : {
                name : "Dual Hex",
                description : desc(["When you cast a hex which targets one creature, you can target two creatures instead."]),
            },
            "forceful personality" : {
                name : "Forceful Personality",
                description : desc(["Your Charisma score increases by 3, to a maximum of 23. You gain proficiency in Intimidation and Persuasion, if you did not have it before. When you make a Charisma (Intimidation) or a Charisma (Persuasion) check, you can add twice your proficiency bonus to the roll."]),
            },
            "hybrid" : {
                name : "Hybrid",
                description : desc([
                    "As a bonus action, if your familiar is within 5 feet of you, you can meld with it, transforming into a magical hybrid and wearing your familiar as armor. For the next minute, you have temporary hit points equal to your familiar's hit points and your AC equals 10 + your Dexterity modifier + your Charisma modifier. While transformed, you can use any actions your familiar possesses, you can add your Charisma modifier to damage rolls you make with melee weapons, and you can attack twice, instead of once, when you take the Attack action on your turn. However, you can't cast hexes or spells of 1st level or higher, though you can concentrate on spells and hexes that you have already cast.",
                    "This transformation lasts one minute, until you lose all your temporary hit points, or until you dismiss it as an action. When it ends, your familiar is dismissed, and you can't summon it again until you finish a short or long rest."]),
            },
            "into a toad" : {
                name : "Into a Toad",
                description : desc(["You learn the spells animate objects, flesh to stone, polymorph, and two other 5th level or lower transmutation spells of your choice. These spells don't count against your total number of spells known. You can cast one of them without expending a spell slot. After doing so, you must complete a long rest before doing so again."]),
            },
            "possession" : {
                name : "Possession",
                description : desc([
                    "As an action, your body becomes immaterial, and your spirit dives into a Large or smaller creature you can see within 10 feet of you in an attempt to possess it. This target must make a Charisma saving throw. On a failed save, you disappear and the target becomes incapacitated and possessed; you gain control of its body but don't deprive the target of its awareness. While possessing the creature, you can't be targeted by any attack, spell, or other effect. You maintain your Intelligence, Wisdom, and Charisma ability scores, and your alignment, but otherwise use the creature's statistics. You don't gain access to the target's knowledge, class features, or proficiencies.",
                    "For the purposes of spells and effects which can end possession, such as the spell dispel evil and good, you are treated as an undead spirit and can be banished from the target, returning to your own body, which rematerializes within 5 feet of the body.",
                    "This possession lasts until the end of your next turn, until the body drops to 0 hit points, or until you are forced out by a spell or other effect that ends possession. This hex's duration can only be extended to a maximum of 1 hour.",
                    "Once you use this hex, you can't do so again until you finish a long rest."]),
            },
            "remote hex" : {
                name : "Remote Hex",
                description : desc(["The range of your hexes double and you can target creatures within range of your hexes even if you cannot see the target, provided you have seen the target in the last minute and know that the target is within range."]),
            },
            "slow death" : {
                name : "Slow Death",
                description : desc(["As an action, choose 1 creature within your reach to make a Constitution saving throw. On a failed save, the creature takes 1 necrotic damage each hour for the next 100 days. The damage can only be healed by magical means. A remove curse spell ends this effect. You can cast other hexes while this hex is active, but casting this hex again ends its effect on its first target."]),
            },
            "weave of fate" : {
                name : "Weave of Fate",
                description : desc([
                    "When you take a long rest, you can peer into the threads of fate and foresee paths the future might take. Roll 2d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
                    "Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."]),
            },
            "witch's broom" : {
                name : "Witch's Broom",
                description : desc(["While wearing no armor and carrying no shield, you can enchant a mundane object ─ like a broom, cauldron, or rug ─ to fly for you. You gain a flight speed equal to your base movement speed while holding this item."]),
            },
            "witch's hut" : {
                name : "Witch's Hut",
                description : desc(["When you begin a long rest, you can summon a magical domicile for the night. This domicile is an enchanted hut with the properties of the tiny hut spell, but it also physically resembles a witch's abode. While you are inside, only creatures you choose can approach the hut. If a creature you did not designate comes within 10 feet of the hut, it rises up on a pair of magical legs, becoming a huge animated object, as per the spell animate objects, and defends itself. The huts occupants are physically safe and undisturbed within. When your long rest is finished, or when the hut is reduced to 0 hit points, it vanishes, and all its occupants are deposited in its space."]),
            },
        },
        "hexmaster" : {
            name : "Hexmaster",
            source : ["MHP:CW", 5],
            minlevel : 20,
            description : desc(["You have mastered your foul magic. Humanoid creatures have disadvantage on saving throws against your hexes."])
            
        }
    }
};

ClassSubList["witch-black magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*black).*$/i,
    subname : "Black Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Black Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Black Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Black Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Black Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};

ClassSubList["witch-blood magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*blood).*$/i,
    subname : "Blood Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus blood Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Blood Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus blood Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Blood Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }
};    

ClassSubList["witch-blue magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*blue).*$/i,
    subname : "Blue Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Blue Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Blue Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Blue Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Blue Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-cloud magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*cloud).*$/i,
    subname : "Cloud Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Cloud Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Cloud Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Cloud Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Cloud Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-fragrant magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*fragrant).*$/i,
    subname : "Fragrant Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Fragrant Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Fragrant Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Fragrant Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Fragrant Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-green magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*green).*$/i,
    subname : "Green Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Green Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Green Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Green Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Green Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }
};

ClassSubList["witch-heart magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*heart).*$/i,
    subname : "Heart Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Heart Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Heart Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Heart Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Heart Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-lunar magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*lunar).*$/i,
    subname : "Lunar Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Lunar Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Lunar Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Lunar Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Lunar Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-purple magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*purple).*$/i,
    subname : "Purple Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Purple Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Purple Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Purple Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Purple Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    


ClassSubList["witch-red magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*red).*$/i,
    subname : "Red Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: Imperil",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "Starting at 3rd level, you know how to strip away your foes' magical defenses. As an action, choose one creature you can see within 60 feet to make a Constitution saving throw, and choose any one damage type. On a failed save, the creature loses resistance to the given damage type until the end of your next turn, or is treated as having only resistance, if it is immune.",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Red Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Red Magic (Sorc)",
                class : "sorcerer",
                spells : ["burning hands", "scorching ray", "fireball", "protection from energy", "ice storm" , "wall of fire","cone of cold", "telekinesis"],
                selection : ["burning hands", "scorching ray", "fireball", "protection from energy", "ice storm" , "wall of fire","cone of cold", "telekinesis"],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Red Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Red Magic (Wiz)",
                class : "wizard",
                spells : ["magic missile", "melf's acid arrow",],
                selection : ["magic missile", "melf's acid arrow",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "Convolute Energy",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "At 6th level, when you deal damage, you can change the type of damage from acid into poison, from cold into fire, from lightning into thunder, from necrotic into radiant, or vice versa.",
                "Additionally, you can use your reaction when you take damage of one of these types to subtract your Charisma modifier from the damage dealt."]),
        },
        "subclassfeature10": {
            name : "Invulnerability",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "Beginning at 10th level, when an attacker that you can see hits you with an attack, you can use your reaction to briefly become invulnerable. Subtract 50 from the damage dealt, to a minimum of 0.",
                "Once you use this ability, you can’t use it again until you finish a long rest."]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "Elemental Annihilation",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "Starting at 14th level, when you cast a spell which deals acid, cold, fire, lightning, or thunder damage, you can expend another spell slot of equal or higher level to maximize the damage dealt.",
                "Once you use this ability, you can’t use it again until you finish a long rest."
            ]),       
            usages : 1,
            recovery : "long rest",
        },
    }
};    

ClassSubList["witch-salt magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*salt).*$/i,
    subname : "Salt Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Salt Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Salt Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Salt Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Salt Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-sand magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*sand).*$/i,
    subname : "Sand Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Sand Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Sand Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Sand Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Sand Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    

ClassSubList["witch-tea magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*tea).*$/i,
    subname : "Tea Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus Tea Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Tea Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus Tea Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "Tea Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};

ClassSubList["witch-white magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*white).*$/i,
    subname : "White Magic",
    source : ["MHP:CW", 16],
    features : {
        "subclassfeature3": {
            name : "Hex: ??",
            minlevel : 3,
            source : ["MHP:CW", 16],
            description : "",
            action : ["action", ""],

        },
        "subclassfeature3.1" : {
            name : "Bonus White Magic Spells (Sorcerer)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "White Magic (Sorcerer)",
                class : "sorcerer",
                spells : ["", "", "", "", "", "", "", ""],
                selection : ["", "", "", "", "", "","", ""],
                times : [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
        },
        "subclassfeature3.2" : {
            name : "Bonus White Magic Spells (Wizard)",
            minlevel : 3,            
            spellcastingBonus : {
                name : "White Magic (Wizard)",
                class : "wizard",
                spells : ["", "",],
                selection : ["", "",],
                times : [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
        },
        "subclassfeature6": {
            name : "",
            minlevel : 6,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ])

        },
        "subclassfeature10": {
            name : "",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc([
                "",
            ]),
            usages : 1,
            recovery : "long rest",
        }
    }

};    
