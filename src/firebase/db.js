import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { app } from "./config"

const db = getFirestore(app)

export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Tienda"))
    const tienda = []
    querySnapshot.forEach((doc) => {
        tienda.push({ ...doc.data(), id: doc.id })
    })

    return tienda
}


export const getProductsByCategory = async (category) => {
    const q = query(collection(db, "Tienda"), where("category", "==", category))
    const querySnapshot = await getDocs(q)
    const tienda = []

    querySnapshot.forEach((doc) => {
        tienda.push({ ...doc.data(), id: doc.id })
    })

    return tienda
}

