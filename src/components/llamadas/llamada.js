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

export async function getStore() {
    try {
        const querySnapshot = await getDocs(collection(db, "adultos"));
        const adultos = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        return adultos
    }catch (error) {
        console.log("Esto es un erro:", error);
        return []
    }
}