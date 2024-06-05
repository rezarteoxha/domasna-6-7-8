const charactersContainer = document.getElementById("charactersContainer")
 
    async function fetchCharacters() {
        try {
          const response = await fetch(
            "https://rickandmortyapi.com/api/character"
          )
          const data = await response.json()
          return data
        } catch (error) {
          console.log("Error fetching data:", error)
        }
    }
 
    function createCharacterCard(character) {
        const card = document.createElement("div")
        card.classList.add("character-card")
 
        const characterImg = document.createElement("img")
        characterImg.src = character.image
        characterImg.alt = character.name
 
        const characterName = document.createElement("p")
        characterName.textContent = character.name
 
        const characterStatus = document.createElement("p")
        characterStatus.textContent = character.status
        characterStatus.classList.add(character.status.toLowerCase())
 
        const characterGender = document.createElement("p")
        characterGender.textContent = character.gender
 
        const characterEpisodesCount = document.createElement("p")
        characterEpisodesCount.textContent = `Episodes: ${character.episode.length}`
 
        card.appendChild(characterImg)
        card.appendChild(characterName)
        card.appendChild(characterStatus)
        card.appendChild(characterGender)
        card.appendChild(characterEpisodesCount)
 
        return card
    }
 
    async function displayCharacters() {
        const characters = await fetchCharacters()
        console.log(characters)
        characters.results.forEach((character) => {
          const card = createCharacterCard(character)
          charactersContainer.appendChild(card)
        })
    }
 
    displayCharacters()
