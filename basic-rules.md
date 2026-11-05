# Basic Rules

## Action Resolution

Roll d% equal or under the **Probability %** (but as high as possible to get more SLs).

The Probability % is determined by your **[Skill](/skills) %** (and other circumstantial ±% modifiers).

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


### Cover

A modifier for when a character's silhouette is partially or totally occluded by cover or obstacles.

| Cover | Modifier |
|------|------|
| **Half Cover** | -10% Probability to hit you |
| **Full Cover** | -20% Probability to hit you |
| **Total Cover** <br/>(as Full Cover but<br/>without peeking out)| Impossible to hit you |

### Initiative and Rounds

**Rounds** last 5 seconds.

**Initiative** is **team-based**: Everyone rolls at the beginning of each Round, but the highest result (in SLs) determines *which side goes first* (the turn order inside the team is left at those players' whims).

Each character uses whatever Skill that is most relevant in the situation (typically *Athletics* or *Awareness*) to determine their reaction time, reflexes, cunning, or preemtiveness.

> [!NOTE]
> **Tie-Breaks**: Highest successful result wins. Critical Successes trump regular Successes.

### Movement and Actions

In a turn, a character can **Move** (up to 5 meters) and do an **Action** (attack, interact, talk, use something, etc). The action can be executed before or after Movement, at player's choice.

### Armor
Per hit location. Subtracts from DMG before applying to HP.
Armor rating can go from 1 (light) to 6 (heavy). See Gear.

### Damage (DMG)

When a character is hit, add the base Weapon DMG to the SLs of the dice roll from the attacker. Then subtract the ARMOR rating in the targeted hit location. The end result is the DMG taken.

Players can decide to soak HP by suffering an [Injury](#injuries) in that hit location, unless the attacker roll resulted in a CRITICAL HIT (then both HP loss and INJURY is caused).

### Critical Hits
A match of tens and units is a CRITICAL. If the action succeeded, both DMG to HP and an INJURY are caused.

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

## Health
Characters have **Health Points (HP)**, typically starting at 5. At 0 or less, they are **knocked out** and could die (see [Uncertain Death](#uncertain-death)).

### Injuries

Whenever a character receives DMG, the controlling player can choose if they want it to go directly to their HP, or if they rather suffer an Injury.

> [!NOTE]
> Injuries let you soak HP DMG (and thus help avoid dying by falling below 0 HP), but they give penalties and negative modifiers, and [take longer to heal](#injury-recovery).

The exact Injury suffered is determined by the **hit location** where the damage was dealt, the **DMG type**, and the **amount of DMG** received (after subtracting Armor). Consult the tables below with that information to get the suffered Injury and its consequences. Note that Injuries (and its detrimental effects) are cumulative.

If you would have to suffer an Injury for a DMG tier you already have, take the immediate higher Injury instead. If this is impossible because you already have the highest Injury, take the next lower one available.

> [!NOTE]
> **IRP** stands for **Injury Related Penalty**, a negative modifier applied to the Probability % of any roll in which the Injury would hinder the action.

#### Leg Injuries

| DMG | Piercing | Slashing | Blunt | Burning/Corrosive |
|-----|----------|----------|-------|-------------------|
| 1-2 | **Superficial Calf Puncture**<br/>(-5% IRP) | **Bleeding Shin Gash**<br/>(-5% IRP) | **Deep Thigh Bruise**<br/>(-5% IRP) | **Localized Blistering**<br/>(-5% IRP) |
| 3-4 | **Deep Muscle Puncture**<br/>(-10% IRP) | **Sliced Hamstring**<br/>(-10% IRP, Movement reduced to 2m) | **Sprained Ankle**<br/>(-10% IRP, cannot run) | **2nd-Degree Muscle Burn**<br/>(-10% IRP) |
| 5-6 | **Lodged Projectile / Embedded Shrapnel**<br/>(-10% IRP, and risk of Infection if not treated soon) | **Severed Achilles Tendon**<br/>(-20% IRP, Movement reduced to 1m) | **Shattered Kneecap**<br/>(-20% IRP, Movement reduced to 1m) | **Armor/Clothing Fused to Skin**<br/>(-10% IRP, take 2 extra DMG if violently removed) |
| 7-8 | **Severed Femoral Artery**<br/>(bleeding out; will die in d10 turns unless treated) | **Amputated Foot**<br/>(-30% IRP, cannot stand without support, permanent loss) | **Compound Tibia Fracture**<br/>(-30% IRP, impossible to walk, requires surgery) | **Bone-Deep Necrosis**<br/>(-20% IRP, high risk of lethal infection or amputation) |
| 9+ | **Shattered Femur**<br/>(impossible to use leg until treated and recovered) | **Severed Leg**<br/>(-20% IRP, massive bleeding; will die in d10 turns unless treated) | **Pulverized Femur**<br/>(-20% IRP, Impossible to use leg, instant Fall Prone, excruciating pain) | **Incinerated Leg**<br/>(Limb rendered useless, permanent loss) |

#### Arm Injuries

| DMG | Piercing | Slashing | Blunt | Burning/Corrosive |
|-----|----------|----------|-------|-------------------|
| 1-2 | **Grazed Forearm**<br/>(-5% IRP) | **Shallow Forearm Gash**<br/>(-5% IRP) | **Tender Bone Bruise**<br/>(-5% IRP) | **Blistered Hand**<br/>(-5% IRP) |
| 3-4 | **Deep Bicep Puncture**<br/>(-10% IRP) | **Severed Finger(s)**<br/>(-10% IRP for fine manipulation, drop held item) | **Sprained Wrist**<br/>(-10% IRP, -20% IRP for melee attacks) | **3rd-Degree Burn on Hand**<br/>(-10% IRP, drop held item) |
| 5-6 | **Punctured Brachial Artery**<br/>(-15% IRP, bleeding out; die in 2d10 turns unless treated) | **Sliced Wrist (Severed Tendons or Artery)**<br/>(Cannot grip, bleeding out; die in 2d10 turns unless treated) | **Dislocated Shoulder**<br/>(-10% IRP, arm unusable until popped back in with a successful Athletics/Medicine check) | **Melted Sleeve Fusing to Flesh**<br/>(-15% IRP, take 2 extra DMG if violently removed) |
| 7-8 | **Shattered Elbow Joint**<br/>(Arm unusable, must drop anything held) | **Amputated Hand**<br/>(-10% IRP, Permanent loss of hand, heavy bleeding; die in 2d10 turns unless treated) | **Snapped Radius/Ulna**<br/>(Arm unusable, excruciating pain causes -10% to ALL actions) | **Charred Stump**<br/>(-10% IRP, Permanent loss of hand) |
| 9+ | **Completely Transfixed Shoulder**<br/>(Arm pinned or paralyzed,-30% IRP) | **Severed Arm**<br/>(-20% IRP, massive bleeding; will die in d10 turns unless treated) | **Pulped Arm**<br/>(Limb permanently destroyed, requires amputation) | **Dissolved Arm**<br/>(Permanent loss of arm, massive shock) |

#### Chest Injuries

| DMG | Piercing | Slashing | Blunt | Burning/Corrosive |
|-----|----------|----------|-------|-------------------|
| 1-2 | **Shallow Flesh Puncture**<br/>(-5% IRP on physical exertion) | **Shallow Abdominal Gash**<br/>(-5% IRP) | **Wind Knocked Out**<br/>(Lose your next Action, then -5% IRP) | **Widespread Torso Blistering**<br/>(-5% IRP, cannot wear Armor comfortably) |
| 3-4 | **Lodged Projectile / Shrapnel in Gut**<br/>(-10% IRP, risk of infection) | **Flayed Torso (Exposed Ribs)**<br/>(-10% IRP, risk of infection) | **Multiple Broken Ribs**<br/>(-10% IRP, taking further DMG requires an *Instinct Check*) | **Melted Armor/Clothes Fusing to Flesh**<br/>(-10% IRP, take 2 extra DMG if violently removed) |
| 5-6 | **Punctured Lung**<br/>(-20% IRP, cannot run, suffocating) | **Slashed Diaphragm**<br/>(-20% IRP, breathing labored, cannot sprint) | **Collapsed Lung**<br/>(-20% IRP, cannot exert or run) | **3rd-Degree Chest Burns**<br/>(-20% IRP, high risk of infection) |
| 7-8 | **Pierced Stomach or Bowel**<br/>(-20% IRP, lethal infection in 2 days if untreated) | **Deep Gut Laceration**<br/>(-10% IRP, massive bleeding; die in 2d10 turns unless treated) | **Crushed Sternum**<br/>(-20% IRP, excruciating pain with every breath) | **Scorched Lungs**<br/>(-20% IRP from smoke/fumes, coughing fits, cannot run) |
| 9+ | **Lodged Projectile / Shrapnel in Spine**<br/>(paralysis below waist; requires surgery) | **Spilled Intestines**<br/>(-20% IRP, Must use 1 hand to physically hold them in) | **Ruptured Spleen**<br/>(-20% IRP, Severe internal bleeding, death in 1d10 hours unless treated) | **Exposed Charred Ribs / Deep Necrosis**<br/>(-20% IRP, cannot use clothing or armor, fatal infection risk) |

#### Head Injuries

| DMG | Piercing | Slashing | Blunt | Burning/Corrosive |
|-----|----------|----------|-------|-------------------|
| 1-2 | **Pierced Cheek or Ear**<br/>(-5% IRP on Social/Awareness) | **Scalp Cut**<br/>(-5% IRP, bleeds heavily into eyes blinding temporarily until wiped) | **Bloody Nose and Mild Concussion**<br/>(-5% IRP on Mental actions) | **Blistered Face and Singed Hair**<br/>(-5% IRP) |
| 3-4 | **Punctured Sinus Cavity**<br/>(-10% IRP on Awareness) | **Deep Facial Laceration**<br/>(-10% IRP, prominent scarring) | **Broken Jaw**<br/>(-10% IRP, cannot speak clearly or Inspire) | **Melted Facial Features**<br/>(-10% IRP, horrific scarring) |
| 5-6 | **Pierced Eye and Socket**<br/>(Permanent loss of one eye, -20% IRP to visual Awareness/Ranged attacks) | **Sliced Off Ear or Nose**<br/>(-20% IRP to related Awareness, permanent disfigurement) | **Severe Concussion**<br/>(-20% IRP, disorientation and nausea) | **Scorched Airway**<br/>(-20% IRP, requires tracheotomy/tubes to breathe safely) |
| 7-8 | **Embedded Object in Skull**<br/>(-20% IRP on all Mental actions, chronic migraines) | **Severed Vocal Cords**<br/>(-10% IRP, permanent muteness, cannot speak or Inspire) | **Fractured Skull**<br/>(-30% IRP, make Endurance check to avoid blacking out) | **Melted Corneas**<br/>(Total blindness, impossible to do sight-dependent tasks) |
| 9+ | **Transfixed Jaw and Palate**<br/>(Unable to speak or eat normally, requires liquid diet, -20% IRP to Social) | **Flayed Face**<br/>(Extensive nerve damage, terrifying visage, -20% IRP to Social interactions) | **Traumatic Brain Injury**<br/>(-20% IRP, Permanent loss of coordination/memory) | **Charred Scalp with Exposed Skull Bone**<br/>(-20% IRP, permanent disfigurement and vulnerability) |


### Healing and Resting
#### Rest

(non-strenuous activities): Recover 1HP/hour, unless *Hungry/Thirsty*

#### Good Rest
(a good bed in a safe place): Recover 2HP/hour, unless *Hungry/Thirsty*

#### Hunger/Thirst
start losing HP/day equal to number of days without food/drink.

#### Injury Recovery
**Injuries** recover a # of hours/days/weeks after **Proper Treatment** has been applied/administered (bandages, sutures, bullet extraction, complex surgery, recovery in bed, etc.):

| Injury Tier | Recovery Time after **Proper Treatment** |
|---|---|
|DMG 1~2 | 12 hours |
|DMG 3~4 | 48 hours |
|DMG 5~6 | 1 week |
|DMG 7~8 | 1 month |
|DMG 9+ | 3 months |


### Uncertain Death

When a character’s HP is down to 0 or less, they are K.O’d. roll a d100 inside an obscure cup, face down.
Reveal it when someone checks the downed character’s vitals:

* Subtract the character’s current negative HP as increments of -10% from the Probability %

If the final result is equal or under their Skill % (the most relevant to survive the DMG received, typically *Endurance*) - the negative HP penalty, they are alive (back with 1 HP).

If it’s higher, they are dead.

## Other Rules

### Instinct Check

Sometimes a character’s composure is put to the test and they need to do an **Instinct Check**. This is triggered when:

* At half their max HP
* Suffered 2 or more Injuries
* Allied forces reduced to half or less
* Leader taken out or fleeing
* Exposed to a horror

The character must roll under a relevant Skill % (typically *Composure*). If they fail, they are put in a FIGHT/FLIGHT/FREEZE/FAWN state (at GM discretion, picking the most obvious or detrimental one):

* **FIGHT**: lash out violently; attack anyone (friend or foe)
* **FLIGHT**: Escape ASAP; distance from / block the danger
* **FREEZE**: Become immobilized; in shock; unable to act 
* **FAWN**: Surrender; yield; submit to (or ally with) the enemy 

While in this state, they must act accordingly, and any action that would contradict the expected behavior must pass a relevant Skill check to be even allowed to act that way. The effect lasts until the current stressful situation ends.

### Inspire

Anyone can attempt to **Inspire** their allies with a warcry or a morale-boosting speech as a normal action. 

Make a roll with a relevant Skill % (typically *Leadership*, *Persuasion* or *Empathy*). 

On a Success, all of your allies gain **+20%** on their **Instinct Checks** for the remainder of the situation (combat, chase, high action scene, etc), OR they can remove their FIGHT/FLIGHT/FREEZE/FAWN state. On a Critical Success, they get both benefits.
