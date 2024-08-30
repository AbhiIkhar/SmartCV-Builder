import {
  query,
  collection,
  getDocs,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

async function updateResume({ resumeId, formData }) {
  try {
    const resumeCollection = collection(db, "resume");
    const q = query(resumeCollection, where("resumeId", "==", resumeId));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const docRef = doc(db, "resume", querySnapshot.docs[0].id);
      await updateDoc(docRef, formData);

      console.log("Document successfully updated with new fields!");
    } else {
      console.log("No document found with the specified resumeId.");
    }
  } catch (error) {
    console.error("Error updating document:", error);
  }
}

export default updateResume;
