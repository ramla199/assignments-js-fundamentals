// //// LECTURE: Values and Variables
// // 1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in millions)
// let country= "Ethiopia", continent= "Aftrica", population = 92000000;

// // 2. Logtheirvaluestotheconsole
// console.log(country, continent, population);

// //// LECTURE: Data Types
// // 1. Declareavariablecalled'isIsland'andsetitsvalueaccordingtoyour country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet
// let isIsland= false, language;

// // 2. Logthetypesof'isIsland','population','country'and'language' to the console
// console.log(typeof isIsland, typeof population,typeof country,typeof language);

// //// LECTURE: let, const and var
// // 1. Setthevalueof'language'tothelanguagespokenwhereyoulive(some countries have multiple languages, but just choose one)
// language = 'Amharic'
// // 2. Thinkaboutwhichvariablesshouldbeconstvariables(whichvalueswillnever change, and which might change?). Then, change these variables to const.
// // dooooone
// // 3. Trytochangeoneofthechangedvariablesnow,andobservewhathappens
// /////done
// //// LECTURE: Basic Operators
// // 1. Ifyourcountrysplitinhalf,andeachhalfwouldcontainhalfthepopulation, then how many people would live in each half?
// console.log(population / 2 );
// // 2. Increasethepopulationofyourcountryby1andlogtheresulttotheconsole
// console.log( population + 1);
// // 3. Finlandhasapopulationof6million.Doesyourcountryhavemorepeoplethan
// // Finland?
// const Finland = 6000000000
// console.log(population > Finland)
// // 4. Theaveragepopulationofacountryis33millionpeople.Doesyourcountry
// // have less people than the average country?
// const averagePopulation = 33000000000;
// console.log(population > averagePopulation);
// // 5. Basedonthevariablesyoucreated,createanewvariable'description'
// // which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'
// let description = "Portugal is in Europe, and its 11 million people speak portuguese"
// /////LECTURE: Strings and Template Literals
// // 1. Recreatethe'description'variablefromthelastassignment,thistime using the template literal syntax
// description = `Portugal is in Europe, and its 11 million people speak portuguese`
// ///// LECTURE: Taking Decisions: if / else Statements
// // 1. Ifyourcountry'spopulationisgreaterthat33million,logastringlikethistothe console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population)
// if(population > averagePopulation) console.log(`${country}'s population is the above the average`)
// else console.log(`'${country}'s population is ${population} below the average' (the ${population} is the average of ${averagePopulation - population} minus the country's population)`)
// // 2. Aftercheckingtheresult,changethepopulationtemporarilyto13andthento 130. See the different results, and set the population back to original
// population = 13;
// population = 130;
// population = 92000000;
///// LECTURE: Type Conversion and Coercion
// 1. Predicttheresultofthese5operationswithoutexecutingthem:
    // '9' - '5'; 
//      '19' - '13' + '17';
//      '19' - '13' + 17;
//      '123' < 57;
//      5 + 6 + '4' + 9 - 4 - 2;
// console.log( '19' - '13' + '17')
// 2. Executetheoperationstocheckifyouwereright

// LECTURE: Equality Operators: == vs. ===
// 1. Declareavariable'numNeighbours'basedonapromptinputlikethis: prompt('How many neighbour countries does your country have?');
// let numNeighbours = prompt('How many neighbour countries does your country have?');

// 2. Ifthereisonly1neighbour,logtotheconsole'Only1border!'(uselooseequality == for now)

// 3. Useanelse-ifblocktolog'Morethan1border'incase'numNeighbours' is greater than 1
// 4. Useanelseblocktolog'Noborders'(thisblockwillbeexecutedwhen 'numNeighbours' is 0 or any other value)
// 5. Testthecodewithdifferentvaluesof'numNeighbours',including1and0.
// 6. Change==to===,andtestthecodeagain,withthesamevaluesof
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
// 7. Finally,convert'numNeighbours'toanumber,andwatchwhathappensnow
// when you input 1
// 8. Reflectonwhyweshouldusethe===operatorandtypeconversioninthis
// situation
// LECTURE: Logical Operators
// 1. Commentoutthepreviouscodesothepromptdoesn'tgetintheway
// 2. Let'ssaySarahislookingforanewcountrytolivein.Shewantstoliveina
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. WriteanifstatementtohelpSarahfigureoutifyourcountryisrightforher.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. Ifyoursistherightcountry,logastringlikethis:'YoushouldliveinPortugal:)'.If
// not, log 'Portugal does not meet your criteria :('
// 5. Probablyyourcountrydoesnotmeetallthecriteria.Sogobackandtemporarily
// change some variables in order to make the condition true (unless you live in Canada :D)