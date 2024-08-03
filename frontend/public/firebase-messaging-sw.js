importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyBQZEHozYS_MYUD_cAsmSn078W-7VJTgnY",
    authDomain: "fir-demoweb-c77c4.firebaseapp.com",
    projectId: "fir-demoweb-c77c4",
    storageBucket: "fir-demoweb-c77c4.appspot.com",
    messagingSenderId: "660845685231",
    appId: "1:660845685231:web:76726d7befe32845e2ee1a",
    measurementId: "G-86VDLZ1JGS",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// Customize background notification handling here
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});