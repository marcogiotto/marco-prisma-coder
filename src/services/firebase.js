import * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs, query, where, getDoc, doc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyASIlfbIUEuHnsOMAVSioePHFwUtFzej6g",
    authDomain: "prisma-coder.firebaseapp.com",
    projectId: "prisma-coder",
    storageBucket: "prisma-coder.appspot.com",
    messagingSenderId: "994819710880",
    appId: "1:994819710880:web:fc039f1a884e8735e80ec5"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebaes = () => {
    return app;
}

export const db = getFirestore(app);


export const getCategories = () => {

    return new Promise((resolve, reject) => {
        getDocs(collection(db, 'Categories')).then((querySnapshot) => {
            const categories = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() };
            });
            resolve(categories);

        }).catch((error) => {
            reject('No se pudo obtner las categorias.' + error);
        })
    })
}


export const getItems = (categoryId) => {

    let q = query(collection(db, 'Items'));

    if (categoryId) {
        q = query(collection(db, 'Items'), where('categoryId', '==', categoryId));
    };

    const data = new Promise((resolve, reject) => {
        getDocs(q).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            });

            resolve(products);
        }).catch((error) => {
            reject('No se pudieron listar los prodcutos.' + error);
        });
    });

    return data;
};


export const getItemById = (itemId) => {

    return new Promise((resolve, reject) => {
        getDoc(doc(db, 'Items', itemId)).then((querySnapshot) => {
            let item = undefined;
            if (querySnapshot.data()) {
                item = { id: querySnapshot.id, ...querySnapshot.data() };
            }

            resolve(item);
        }).catch((error) => {
            reject('No se pudo listar el producto.' + error);
        });
    });

}