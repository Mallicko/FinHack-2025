# NexHealth

**NexHealth** is a web-based healthcare cost estimation and advisory tool that helps users understand and manage their potential medical expenses using intelligent modeling and AI-powered guidance.

##  Features

-  **Cost Model Page**  
  Input your details (age, chronic condition status, room tier, and stay duration) to estimate your healthcare costs using a realistic model.

-  **Health Advisor AI**  
  Get personalized advice based on your profile. Responses are concise, human-friendly, and actionable.

-  **Visual Insights**  
  See where you stand on a national cost distribution graph.

-  **Log In Page**
  Allows user to register or log in to access previously entered data and chat history.

##  Technologies Used

- **HTML / CSS / JavaScript** – Frontend and logic
- **Chart.js** – Visualize cost distribution
- **OpenAI GPT (LLM)** – AI-powered health advisor chatbot built on the 4o model
- **Machine Learning-based Cost Estimator** – Custom risk/cost model logic built from common healthcare cost factors

##  ML Model/AI Performance

- **XGBoost** significantly outperformed standard econometric Linear Regression, with R^2 of .7 to .55 respectively identifying the aforementioned 4 main predictiction variables.
- **AI Health Advisor** using loaded-in results from the ML model is fine-tuned to give advice specific to user inputs

##  File Structure

```
📁 project-folder/
├── index.html           # Landing page
├── CostModel.html       # Risk & cost model input form
├── HealthBot.html       # AI chatbot using user profile data
```

##  Live Demo
https://teal-lamington-22b207.netlify.app/
