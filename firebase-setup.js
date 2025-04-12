// Step-by-step Firebase Auth + Firestore setup
// 👇 Paste this script in your HTML (after linking Firebase SDK)

// 1. Firebase App Config (replace with your actual Firebase project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "your-app-id"
};

// 2. Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// 3. Sign Up User
function signUp(email, password) {
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log("User signed up:", userCredential.user);
    })
    .catch(error => alert(error.message));
}

// 4. Sign In User
function login(email, password) {
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log("User logged in:", userCredential.user);
    })
    .catch(error => alert(error.message));
}

// 5. Save Cost Model Data
function saveCostData(userId, data) {
  db.collection("users").doc(userId).set(data)
    .then(() => console.log("Data saved"))
    .catch(error => console.error("Error saving data:", error));
}

// 6. Load Saved Data
function loadCostData(userId) {
  db.collection("users").doc(userId).get()
    .then(doc => {
      if (doc.exists) {
        console.log("User data:", doc.data());
        // autofill form here
      } else {
        console.log("No data found.");
      }
    })
    .catch(error => console.error("Error fetching data:", error));
}
