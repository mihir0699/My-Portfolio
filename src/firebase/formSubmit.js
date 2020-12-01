import {firestore} from './firebase'

export const formSubmit = (data)=>{
    const ref = firestore.collection('form').doc(data.id);
    return ref.set(data);
}