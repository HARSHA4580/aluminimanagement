import React, { useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function MenteeSignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("📩 Signup form submitted");
    console.log("Name:", name, "Email:", email);

    try {
      // Step 1: Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("✅ Firebase Auth success:", user);

      // Step 2: Store in Firestore
      await setDoc(doc(db, "mentees", user.uid), {
        uid: user.uid,
        email: email,
        name: name,
        createdAt: new Date()
      });
      console.log("✅ Firestore document created");

      alert("Signup successful!");
    } catch (error) {
      console.error("❌ Signup error:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password (min 6 characters)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default MenteeSignupPage;
