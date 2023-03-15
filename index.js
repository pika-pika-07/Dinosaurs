
    // Create Dino Constructor

    function Dino(species,weight,height,diet,when,where,fact){
        this.species = species
        this.weight=weight
        this.height=height
        this.diet=diet
        this.when=when
        this.where=where
        this.fact= fact

    }

    // Create Dino Objects
    const dinos = []
    const createDinoObjects = (data) => {
        data.forEach(dino => {
            const obj = new Dino(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.when,
                dino.where,
                dino.fact
            )
            dinos.push(obj)

        })

        console.log(dinos)

    }

    /* Read data from json file and create dino array objects */
    fetch("dino.json")
        .then(response => response.json())
        .then(json => {
            createDinoObjects(json.Dinos)
            //console.log(json)
        })


    // Create Human Object

    let humanObject = {}

    let humanName = document.getElementById('name')
    let humanHeightFt = document.getElementById('feet')
    let humanHeightInches = document.getElementById('inches')
    let humanDiet = document.getElementById('diet')

    // Use IIFE to get human data from form


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
