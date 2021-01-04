import firebase from 'firebase/app';

export default {
  actions: {
    // async login({ /*dispatch, commit*/ }, { email, password }) {
    async login(options, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        console.log('>>> store:auth:login:error');
        throw e;
      }
    },

    async register({ dispatch }, { name, email, password }) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch('getUid');
        await firebase.database().ref(`/users/${uid}/info`).set({
          bill: 10000,
          name,
        });
      } catch (e) {
        console.log('>>> store:auth:register:error', e);
        throw e;
      }
    },

    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },

    async logout() {
      await firebase.auth().signOut();
    },
  },
};
