// ตรวจสอบโครงสร้าง Firebase Configuration จากที่คุณสร้างไว้
const firebaseConfig = {
  apiKey: "AIzaSyC6cPtSZg4ZNsP3EG1I99y4SSLt7wiCLOo",
  authDomain: "classconnect-ff8a2.firebaseapp.com",
  projectId: "classconnect-ff8a2",
  storageBucket: "classconnect-ff8a2.firebasestorage.app",
  messagingSenderId: "178107975334",
  appId: "1:178107975334:web:c2b7835b385e68e7525667",
  measurementId: "G-4EVBMN0KJ1"
};

// เริ่มต้นใช้งาน Firebase สำหรับ Web (ผ่าน CDN)
firebase.initializeApp(firebaseConfig);

// ประกาศตัวแปรสำหรับเรียกใช้บริการต่าง ๆ ไปใช้ในไฟล์อื่น
const db = firebase.firestore();
const storage = firebase.storage();

console.log("Firebase Connected Successfully!");
