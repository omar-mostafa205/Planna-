export const mealsPrompt = `
You are a professional nutritionist. Create a 7-day lean muscle building meal plan for the following client:

Age: ${age} years  
Height: ${height} cm  
Gender: ${gender}  
Activity level: ${activityLevel}  
Goals: ${goals}  
Medical conditions: ${medicalConditions || "none"}  
Diet type: ${dietType}  
Target calories per day: ${calories}  
Allergies or restrictions: ${allergies || "none"}  
Preferred cuisine: ${cuisine || "no preference"}  
Snacks included: ${snacks ? "yes" : "no"}  

Each day should have:
- Breakfast
- Lunch
- Dinner
${snacks ? "- Snacks" : ""}

For each meal, include:
- calories (number)
- protein (g)
- carbs (g)
- fat (g)
- ingredients (array of strings)
- instructions (array of step-by-step strings)

Return the result as a **valid JSON object** with the following exact structure (this is important for rendering in the frontend):

{
  "Monday": {
    "Breakfast": {
      "calories": 480,
      "protein": 35,
      "carbs": 42,
      "fat": 18,
      "ingredients": [
        "3 whole eggs",
        "1 cup oatmeal",
        "1 medium banana",
        "1 tbsp almond butter",
        "1 cup unsweetened almond milk"
      ],
      "instructions": [
        "Cook oatmeal with almond milk",
        "Scramble eggs with minimal oil",
        "Slice banana and add to oatmeal",
        "Top with almond butter",
        "Serve eggs on the side"
      ]
    },
    "Lunch": {
      "calories": 650,
      "protein": 45,
      "carbs": 55,
      "fat": 22,
      "ingredients": [
        "150g chicken breast",
        "1 cup brown rice",
        "Mixed vegetables (broccoli, carrots)",
        "1 tbsp olive oil",
        "Herbs and spices"
      ],
      "instructions": [
        "Grill chicken breast with herbs",
        "Cook brown rice according to package",
        "Steam mixed vegetables",
        "Drizzle olive oil over vegetables",
        "Combine and serve"
      ]
    },
    "Dinner": { ... },
  },
  "Tuesday": { ... }
}

Do NOT include any extra text, explanations, or formatting outside the JSON.
`;
