import { db } from './../../firebase/config'
import { collection, getDocs } from "firebase/firestore";

export async function getCaras() {
    try {
        const querySnapshot = await getDocs(collection(db, "caras"));
        const caras = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return caras;
    } catch (error) {
        console.error("Error fetching caras:", error);
        return [];
    }
}