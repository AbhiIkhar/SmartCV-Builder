import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const addResume = async (name, email, title, resumeId) => {
  try {
    await addDoc(collection(db, "resume"), {
      userName: name,
      userEmail: email,
      title: title,
      resumeId: resumeId,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default addResume;
