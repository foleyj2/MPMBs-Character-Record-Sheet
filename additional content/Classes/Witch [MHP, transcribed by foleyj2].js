var iFileName = "Witch [MHP, transcribed by foleyj2].js";
RequiredSheetVersion(12.999);
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
    subclasses : ["Witch Craft", ["witch-red magic",]],
    features : {
        "spellcasting" : {
            name : "Spellcasting",
            source : ["MHP:CW", 3],
            minlevel : 1,
            description : desc([
                "I can cast prepared witch cantrips/spells, using Charisma as my spellcasting ability",
                "I can cast my prepared witch spells as rituals if they have the ritual tag"
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
                    times : levels.map( function(n) { return (n < 4 ? 1 : n < 8 ? 2 : n < 12 ? 3 : 4) } ),
                    oncelr : true,
                }
            },
        },
        "subclassfeature2" : {
            name : "Witch Craft",
            source : ["MHP:CW", 1],
            minlevel : 3, 
            description : desc([
                "Choose a Witch Craft that you belong to and put it in the \"Class\" field",
                "Choose either the Magic of Black, Blue, Red, Green, etc."
            ])
        },
        "cackle" : {
            name : "Cackle",
            source : ["MHP:CW", 3],
            minlevel : 2,
            description : desc([
                "Extend hexes in 60ft for 1 rnd"
            ]),
            action : ["action", ""],
            usages : "at will",
        },
        "familiar" : {
            name : "Find Familiar",
            source : ["MHP:CW", 3],
            minlevel : 2,
            description : desc([
                "You learn the find familiar spell and can cast it as a ritual without material components. The spell doesn’t count against your number of spells known.", 
                "Additionally, once per turn as an action or a bonus action, you can allow your familiar to use its reaction to make one attack or cast a spell. When your familiar makes an attack, it uses your spell attack bonus instead of its own attack bonus on attack rolls, and deals damage equal to your proficiency bonus, if it would otherwise deal less. You also add twice your witch level to your familiar's maximum hit points.", 
                "When you cast the spell, you can choose one of the normal forms for your familiar or one of the special forms"
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
    }
};

ClassSubList["witch-red magic"] = {
    regExpSearch : /^(?=.*witch)(?=.*red).*$/i,
    subname : "Red Magic",
    source : ["MHP:CW", 16],
    // When this is selected, we are level 3 so we get the first 3 levels
    
   
    // To get the spells to be known, we have to conact at index 100

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
                times : [1, 1, 2, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
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
            description : desc(["At 6th level, when you deal damage, you can change the type of damage from acid into poison, from cold into fire, from lightning into thunder, from necrotic into radiant, or vice versa.",
                                "Additionally, you can use your reaction when you take damage of one of these types to subtract your Charisma modifier from the damage dealt."]),
        },
        "subclassfeature10": {
            name : "Invulnerability",
            minlevel : 10,
            source : ["MHP:CW", 16],
            description : desc(["Beginning at 10th level, when an attacker that you can see hits you with an attack, you can use your reaction to briefly become invulnerable. Subtract 50 from the damage dealt, to a minimum of 0.",
                                "Once you use this ability, you can’t use it again until you finish a long rest."]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest",

        },
        "subclassfeature14": {
            name : "Elemental Annihilation",
            minlevel : 14,
            source : ["MHP:CW", 16],
            description : desc(["Starting at 14th level, when you cast a spell which deals acid, cold, fire, lightning, or thunder damage, you can expend another spell slot of equal or higher level to maximize the damage dealt.",
"Once you use this ability, you can’t use it again until you finish a long rest."]),
        },
        usages : 1,
        recovery : "long rest",

    }

};    

