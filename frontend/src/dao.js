import {firestore} from "./firebase";

class Dao {
    getProjects(type) {
        return firestore
            .collection('projects')
            .where("type", "==", type)
            .get()
            .then(snapshot => {
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return ;
                }
                /*snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                });*/
                return snapshot;
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
}


export {Dao};





