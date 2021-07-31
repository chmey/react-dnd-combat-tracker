# React D&D Combat Tracker

Simple purely client-side React MaterialUI combat tracker for Dungeons & Dragons DMs.

![](interface_example.png)


### Features:
* Add any number of characters (Name, HP, MaxHP, AC, Initiative)
* Roll initiative
* Edit all fields by clicking on them
* Apply damage by entering a negative value to the HP field (e.g. `-6`)
* (Experimental) Spellslots as free-syntax JSON input (e.g. `{"level1": 2, "level2": 1}`)
* Concentration
* Export/Import
* Duplicating and deleting characters
* Temporary HP (will be deducted first if damage entered as above)

### Coming features:
* Resistances/Immunities
* Sorting
* Highlighting of injured characters