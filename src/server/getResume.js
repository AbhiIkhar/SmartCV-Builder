import { query, collection, getDocs, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const getResumeById = async (resumeId) => {
  try {
    const resumeCollection = collection(db, "resume");
    const q = query(resumeCollection, where("resumeId", "==", resumeId));

    const querySnapshot = await getDocs(q);

    let resumeData = null;

    querySnapshot.forEach((doc) => {
      resumeData = doc.data();
    });

    if (resumeData) {
      console.log("Document data:", resumeData); // TODO: REMOVE THIS CONSOLE IN FUTURE
    } else {
      console.log("No such document!"); // TODO : ADD SOME COMPONENT WHICH SAYS NO SUCH DOCUMENTS
    }
    return resumeData;
  } catch (error) {
    console.error("Error fetching resume:", error); // TODO : ADD ERROR PAGE
    return null;
  }
};

const getResumeByEmail = async (email) => {
  try {
    const resumeCollection = collection(db, "resume");
    const q = query(resumeCollection, where("userEmail", "==", email));
    console.log("q: ", q);
    const querySnapshot = await getDocs(q);

    console.log("querySnapShot: ", querySnapshot);

    let resumeData = [];

    querySnapshot.forEach((doc) => {
      resumeData.push(doc.data());
    });

    if (resumeData) {
      console.log("Document data with email:", resumeData);
    } else {
      console.log("No such document!");
    }
    return resumeData;
  } catch (error) {
    console.error("Error fetching resume:", error);
    return null;
  }
};

export { getResumeById, getResumeByEmail };
