
    // Create Dino Constructor

    function Dino(species,weight,height,diet,when,where,fact,observations){
        this.species = species
        this.weight=weight
        this.height=height
        this.diet=diet
        this.when=when
        this.where=where
        this.fact= fact
        this.observations = observations

    }
    // Human Constrcutor
    function Human(name,weight,height,diet){
        this.name = name
        this.weight = weight;
        this.height = height;
        this.diet = diet;
    }

    // Create Dino Objects
    let dinos = []
    const createDinoObjects = (data) => {
        data.forEach(dino => {
            const obj = new Dino(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.when,
                dino.where,
                dino.fact,
                dino.observations || []
            )
            dinos.push(obj)

        })

        //console.log(dinos)

    }

    /* Read data from json file and create dino array objects */

    fetch("dino.json")
        .then(response => response.json())
        .then(json => {
            createDinoObjects(json.Dinos)
            //console.log(json)
        })


    // Create Human Object

    // Get human properties from form

    

    // Use IIFE to get human data from form
    function getHumanData() {
        let humanName = document.getElementById('name').value
        let humanHeightFt = document.getElementById('feet').value
        let humanHeightInches = document.getElementById('inches').value
        let humanDiet = document.getElementById('diet').value
        let humanWeight = document.getElementById('weight').value

        let humanHeight = (humanHeightFt * 12) + humanHeightInches

        return new Human(humanName,humanWeight,humanHeight,humanDiet)
    }
    
    Dino.prototype.compareWeight = function(humanData) {
       let result;
       if(humanData.weight < this.weight){
        result = `${humanData.name} is lighter than ${this.species} by ${this.weight - humanData.weight} lbs`;
       }
       else if(humanData.weight > this.weight){
        result = `${humanData.name} is heavier than ${this.species} by ${humanData.weight - this.weight} lbs`;
       }
       else{
        result = `${humanData.name} is equal to  ${this.species} in weight`;
       }

       return result
    }


    Dino.prototype.compareHeight = function(humanData) {
        let result;
        if(humanData.height < this.height){
         result = `${humanData.name} is shorter than ${this.species} by ${this.height - humanData.height} inches`;
        }
        else if(humanData.height > this.height){
         result = `${humanData.name} is heavier than ${this.species} by ${humanData.height - this.height} inches`;
        }
        else{
         result = `${humanData.name} is equal to  ${this.species} in height`;
        }
 
        return result
     }

     Dino.prototype.compareDiet = function(humanData) {
        let result;
        if(humanData.diet === this.diet){
         result = `${humanData.name} has same diet as ${this.species}`;
        }
        else{
         result = `${humanData.name} has diet not equal to  ${this.species} `;
        }
 
        return result
     }

     Dino.prototype.timeDuration = function() {

        return `${this.species} are from ${this.where}`
        
     }

     Dino.prototype.getRandomFact = function() {
        const randomNum = Math.floor(Math.random() * this.observations.length);
        return this.observations[randomNum]
     }

     const generateHtml = function() {
        const grid = document.getElementById("grid");
        dinos.forEach((dino, index) => {
           
            const div = document.createElement("div");
            div.className = "grid-item";
    
            const name = index === 4 ? dino.name : dino.species;
            const fact = index === 4 ? "" : `<p>${dino.fact}</p>`;
        
            div.innerHTML = `<h3>${name}</h3>
                             <img src="${dino.img}" alt="${name} image">
                             ${fact}`;
            // append the div to the grid element
            grid.append(div);
        });
     }

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

document.getElementById('btn').addEventListener('click', function(){
    let humanObject = getHumanData()
    //console.log("asds")

    // Remove form
    const form = document.getElementById("dino-compare");
    form.remove();

    // Iterate over dinos and collect facts
    //console.log(dinos)
    for(let i=0;i<dinos.length;i++){

        // Default fact
        dinos[i].observations.push(dinos[i].fact)

        // Compare weight
        const weightResult = dinos[i].compareWeight(humanObject)
        
        dinos[i].observations.push(weightResult)

        // Compare height

        const heightResult = dinos[i].compareHeight(humanObject)
        dinos[i].observations.push(heightResult)

        // Compare Diet
        const dietResult = dinos[i].compareDiet(humanObject)
        dinos[i].observations.push(dietResult)

        // Time
        const timeResult = dinos[i].timeDuration()
       
        dinos[i].observations.push(dietResult)

        // Get and update the fact property by random fact
        dinos[i].fact = dinos[i].getRandomFact()
        //console.log(dinos[i].fact)

        // Set Image for each dino
        const speciesName = dinos[i].species.toLowerCase()
        dinos[i].img = `images/${speciesName}.png`

    }
    //console.log(dinos)

    // Insert Human at position 4
    dinos.splice(4, 0, humanObject);

    // Set img for human
    dinos[4].img = `images/human.png`

    // // Generate Html
    generateHtml()
})