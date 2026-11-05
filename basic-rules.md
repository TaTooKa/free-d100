# Basic Rules

## Action Resolution

Roll d% equal or under the **Probability %** (but as high as possible to get more SLs).

The Probability % is determined by your **Skill %** (and other circumstantial ±% modifiers).

> [!NOTE]
> dice results read as 00-99 and are never modified (Probability % is); 
> 
> Probability % can never be < 1% or > 97%.
> 

### Success Levels
The *tens* in the dice result determine **Success Levels (SLs)** of the action. The higher, the better. 

SLs are used for determining "how good" an action result is (SL 0 just means a partial or meager success). The higher your Skill %, the higher the margin to obtain a better SL.

> [!NOTE]
> In Combat, SLs are added to **weapon base damage** to determine damage dealt.

### Criticals

A match of *tens* and *units* is a **Critical** (either *Success* or *Failure*). It exacerbates the result, for good or ill. In Combat, a CRITICAL SUCCESS causes both HP DMG and an INJURY.

## Combat Specifics

### Hit Locations

In combat, the *units* in the roll result determine the hit location.

| Units Result | Hit Location |
|:----:|-----------|
| 0-2  | Legs      |
| 3-5  | Arms      |
| 6-8  | Chest     |
| 9    | Head      |

### Silhouette

A modifier depending on the **silhouette** size of the target.

| Approximate Size | Modifier |
|------|------|
|Tiny (rat sized) | -30% |
|Small (dog sized) | -10% |
|Medium (human sized) | ±0% |
|Big (car sized) | +10% |
|Huge (bus sized) | +30% |

### Range

Weapons have **Range bands** in which they are supposed to operate. Firing outside those Ranges imposes a **-30% penalty** for each increment.

| Range | Distance |
|------|------|
| Adjacent | 0-1m |
| Point-Blank | 1-3m |
| Short | 3-25m |
| Medium | 25-100m |
| Long | 100m-300m |
| Extreme | 300m-1000m |
| Beyond | 1000m+ |

### Initiative and Rounds

**Rounds** last 5 seconds.

**Initiative** is **team-based**: Everyone rolls at the beginning of each Round, but the highest result (in SLs) determines *which side goes first* (the turn order inside the team is left at those players' whims).

Each character uses whatever Skill that is most relevant in the situation to determine their reaction time, reflexes, cunning, or preemtiveness.

> [!NOTE]
> **Tie-Breaks**: Highest successful result wins. Critical Successes trump regular Successes.

### Movement and Actions

In a turn, a character can **Move** (up to 5 meters) and do an **Action** (attack, interact, talk, use something, etc). The action can be executed before or after Movement, at player's choice.

### Other Combat Options

#### Aimed Shot

(Ranged attacks)

Forfeit your Movement on your turn to take aim and choose a desired **hit location** on the target, instead of depending on the random result of the *units* in your dice roll.

#### Targeted Hit

(Melee attacks)

-20% Modifier to your melee attack roll, but you get to choose the desired **hit location** on the target, instead of depending on the random result of the *units* in your dice roll.

#### Full Defense

Forfeit your Action on your turn to focus on dodging, blocking and taking cover. Enemies get **-20% to the Probability %** to hit you. If you are wielding a Melee weapon and an enemy attacks you in melee and misses, you **PARRY** (make a free melee attack roll against that enemy as a *reaction*, outside of your turn).

#### Ammo and Reloading

Ammo is simplified in clips/mags of Low/Med/High Caliber. Tally each bullet individually.

 When your weapon runs out of ammo, forfeit your Movement OR your Action to **RELOAD** a new clip/mag.

#### Akimbo / Dual wielding

If using two 1-handed weapons, **suffer -10%** to your Probability of hitting, but **add base DMG of both weapons** to your SLs. If they use ammo, they both spend it separately.

#### Swapping Weapons

Forfeit your Movement OR your Action to put your currently held weapon away (in your backpack, holster, sheath, etc) and grab another one to have ready to use. 

> [!NOTE]
> Alternatively, you can drop the unused one on the ground and get the new one as a free action, but picking it up later takes your main action. 

#### Burst Fire (firearms)

If your weapon has **[BF]**, Spend 3 bullets to **gain +10%** to the Probability of hitting, and **+1 base DMG**.

#### Full Auto (firearms)

If your weapon has **[FA]**, Spend 6 bullets to **gain +20%** to the Probability of hitting, and **+2 base DMG**.

#### Catching Fire

Certain weapons or effects are **incendiary** in nature. They deal a base DMG, and then every turn afterwards, deal the previous DMG -1. When reaching 0 DMG the fire is put out naturally.

> [!NOTE]
> **TIP**: Use a die on the table as a counter to tally fire DMG each turn; remove it once it reaches 0. 

Each time fire deals its damage, there is a 20% chance it spreads to something flammable nearby (at GM’s discretion), increasing current DMG +1 for that new fire source.

Armor reduces incoming fire DMG.

> [!NOTE]
> Putting out a fire gains +30% if using **something helpful** like water, heavy cloth, etc. If using a **fire extinguisher** you automatically succeed with no roll required.


#### Cover

**HALF COVER**: -10% Probability to hit you

**FULL COVER**: -20% Probability to hit you

**TOTAL COVER** (as Full Cover but without peeking out): Impossible to hit you

## Health
Characters have **Health Points (HP)**, typically starting at 5. At 0 or less, they are **knocked out** and could die (see [Uncertain Death](#uncertain-death)).

### Injuries
TODO (defender choses between losing HP or suffering an Injury in targeted hit location, of a gravity that depends on DMG received)

### Healing and Resting
#### Rest

Recover 1HP/hour, unless HUNGRY/THIRSTY

#### Good Rest
(a good bed in a safe place): Recover 2HP/hour, unless HUNGRY/THIRSTY

#### Hunger/Thirst
start losing HP/day equal to # of days without food/drink.

#### Injury Recovery
INJURIES recover a # of hours/days/weeks after PROPER TREATMENT (bandages, sutures, bullet extraction, recovery in bed, etc.).


### Uncertain Death

When a character’s HP is down to 0 or less, they are K.O’d. roll a d100 inside an obscure cup, face down.
Reveal it when someone checks the downed character’s vitals:

* Subtract the character’s current negative HP as increments of -10% from the Probability %

If the final result is equal or under their Skill % (the most relevant to survive the DMG received) - the negative HP penalty, they are alive (back with 1 HP).

If it’s higher, they are dead.


### Armor
Per hit location. Subtracts from DMG before applying to HP.
Armor rating can go from 1 (light) to 6 (heavy).

### Damage (DMG)

When a character is hit, add the base Weapon DMG to the SLs of the dice roll from the attacker. Then subtract the ARMOR rating in the targeted hit location. The end result is the DMG taken.

Players can decide to soak HP by taking an INJURY in that hit location, unless the attacker roll resulted in a CRITICAL HIT (then both HP loss and INJURY is caused).

### Critical Hits
A match of tens and units is a CRITICAL. If the action succeeded, both DMG to HP and an INJURY are caused.

## Other Rules

### Instinct Check

### Inspire
