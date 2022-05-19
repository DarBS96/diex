// Exercise XP;

// Exercise 1: Conversion;

const getData = async() => {
    try {
        const res = await fetch("https://www.swapi.tech/api/starships/9/");
        if (!res.ok) {
            throw new Error('Something went wrong');
        } else {
            console.log(res);
            const data = await res.json();
            console.log(data)
        }
    } catch (err) {
        console.log(err) // It doesn't get the new error that I gave it
    }

}

// Exercise 2: Analyze;

// My Guessing:
//  1st: calling
//  2nd: after 2 seconds => resolved

// Exercises XP Ninja;
// Exercise 1: Async Await & Try / Catch;

// Exercise 2 : Analyze #4;

// My Guessing:
//  1st:  ==CONCURRENT START with Promise.all==
//  2nd: starting slow promise
//  3rd: starting fast promise
// 4: fast promise is done
// 5: slow promise is done
// 6: fast
// 7: slow

// Actually:
// == CONCURRENT START with Promise.all ==  Promise.all is waiting for every promise to be done! and only after it console log the results of each func by the time and the order in the promise.all execution
// VM148: 2 starting slow promise;
// VM148: 12 starting fast promise;
// VM148: 16 fast promise is done;
// VM148: 6 slow promise is done;
// VM148: 26 slow;
// VM148: 27 fast;


// Exercise 3 : Analyze #5

// My Guessing:
//  1st:  ==CONCURRENT START with Promise.all==
//  2nd: starting slow promise
//  3rd: starting fast promise
// 4: fast promise is done
// 5: slow promise is done
// 6: slow
// 7: fast

// Actually: we can't continue executing with await word until it finishes and in that case resolveAfter1Second will execute first until it finishes to execute everything in the promise
// == PARALLEL with await Promise.all ==
// VM654: 2 starting slow promise;
// VM654: 12 starting fast promise;
// VM654: 16 fast promise is done;
// VM654: 26 fast;
// VM654: 6 slow promise is done;
// VM654: 25 slow;

// Exercise 4 : Analyze #6;

// My Guessing:
//  1st:  ==CONCURRENT START with Promise.all==
//  2nd: starting slow promise
//  3rd: starting fast promise
// 4: fast promise is done
// 5: slow promise is done
// 6: fast
// 7: slow

// Actually: The same as the example above with async func
// == PARALLEL with await Promise.all ==
// VM654: 2 starting slow promise;
// VM654: 12 starting fast promise;
// VM654: 16 fast promise is done;
// VM654: 26 fast;
// VM654: 6 slow promise is done;
// VM654: 25 slow;