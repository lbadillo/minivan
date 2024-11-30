import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: 'vanlife-4f9ff.firebaseapp.com',
  projectId: 'vanlife-4f9ff',
  storageBucket: 'vanlife-4f9ff.firebasestorage.app',
  messagingSenderId: '48178665975',
  appId: '1:48178665975:web:7c6953c3c42e9ccdfe36f2',
  measurementId: 'G-KG0JF4JHNN',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const vansCollectionRef = collection(db, 'vans');

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));

  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const snapshot = await getDoc(docRef);

  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function loginUser(creds) {
  const res = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
}
