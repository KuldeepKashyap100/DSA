
/**
 * The following is a description of the instance of this f
 * amous puzzle involving n=2 eggs and a building with k=36 floors.
 * Suppose that we wish to know which stories in a 36-story building are safe to drop eggs 
 * from, and which will cause the eggs to break on landing. We make a few assumptions:
 * 1. An egg that survives a fall can be used again. 
 * 2. A broken egg must be discarded. 
 * 3. The effect of a fall is the same for all eggs. 
 * 4. If an egg breaks when dropped, then it would break if dropped from a higher floor. 
 * 5. If an egg survives a fall then it would survive a shorter fall. 
 * 6. It is not ruled out that the first-floor windows break eggs, 
 *    nor is it ruled out that the 36th-floor do not cause an egg to break.
 * If only one egg is available and we wish to be sure of obtaining the right result, 
 * the experiment can be carried out in only one way. 
 * Drop the egg from the first-floor window; if it survives,
 *  drop it from the second-floor window. Continue upward until it breaks. 
 * In the worst case, this method may require 36 droppings. 
 * Suppose 2 eggs are available. What is the least number of egg-droppings t
 * hat is guaranteed to work in all cases? 
 * The problem is not actually to find the critical floor, 
 * but merely to decide floors from which eggs should be dropped 
 * so that the total number of trials are minimized.
 */

const minimiseEggDrops = (totalFloors, eggsAvailable) => {
    // If there are no floors, then
    // no trials needed. OR if there
    // is one floor, one trial needed.
    if(totalFloors === 1 || totalFloors === 0) return totalFloors;

    // We need totalFloors trials if we have one egg
    // and totalFloors floors
    if(eggsAvailable === 1) return totalFloors;

    let minimumNumberOfAttempts = Infinity;

    // Consider all droppings from
    // 1st floor to totalFloors'th floor and
    // return the minimum of these
    // values plus 1.
    for(let currentFloor = 1; currentFloor <= totalFloors; currentFloor++) {
        const eggBreaks = minimiseEggDrops(currentFloor - 1, eggsAvailable - 1);
        const eggNotBroke = minimiseEggDrops(totalFloors - currentFloor, eggsAvailable);

        const currentAttempt = 1;
        const worstCaseScenario = Math.max(eggBreaks, eggNotBroke) + currentAttempt;

        minimumNumberOfAttempts = Math.min(minimumNumberOfAttempts, worstCaseScenario);
    }

    return minimumNumberOfAttempts;
}

let floors = 10, eggs = 2;
floors = 6, eggs = 2;
const result = minimiseEggDrops(floors, eggs);
console.log(result);