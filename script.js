document.getElementById('recipe-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const recipeName = document.getElementById('recipe-name').value;
  const recipeDescription = document.getElementById('recipe-description').value;
  const recipeImage = document.getElementById('recipe-image').value;
  const recipeIngredients = document.getElementById('recipe-ingredients').value;
  const recipeSteps = document.getElementById('recipe-steps').value;

  const newRecipe = document.createElement('div');
  newRecipe.classList.add('recipe-item');
  newRecipe.innerHTML = `
      <img src="${recipeImage}" alt="${recipeName}">
      <div class="recipe-content">
          <h3>${recipeName}</h3>
          <p>${recipeDescription}</p>
          <button class="view-recipe-btn">View Recipe</button>
      </div>
  `;

  document.querySelector('.recipe-list').appendChild(newRecipe);

  document.getElementById('recipe-form').reset();
});