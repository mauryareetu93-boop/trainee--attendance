// let validIDs = ["TR001", "TR002", "TR003"];

// function verifyID() {
//   let uid = document.getElementById("uid").value;

//   if (validIDs.includes(uid)) {
//     document.getElementById("attendanceForm").style.display = "block";
//   } else {
//     alert("Invalid Unique ID");
//   }
// }
 
// window.onload = function () {
//   const params = new URLSearchParams(window.location.search);
//   const uidFromQR = params.get("uid");

//   if (uidFromQR) {
//     document.getElementById("uid").value = uidFromQR;
//     verifyID(); // auto verify
//   }
// };
// function submitAttendance() {
//   fetch("https://script.google.com/macros/s/AKfycbwLRj12h9jUWYuUd-cHxHw_JKksVVwc0VEsjxdfVUWZwTzHyBK_Z5VfvEKuK0AHnMX3/exec", {
//     method: "POST",
//     body: new URLSearchParams({
//       name: document.getElementById("name").value,
//       cits: document.getElementById("cits").value,
//       status: document.getElementById("status").value
//     })
//   })
//   .then(res => alert("Attendance Saved Successfully"));
// }


// https://script.google.com/macros/s/AKfycbwLRj12h9jUWYuUd-cHxHw_JKksVVwc0VEsjxdfVUWZwTzHyBK_Z5VfvEKuK0AHnMX3/exec

let validIDs = ["TR001", "TR002", "TR003"];

function verifyID() {
  let uid = document.getElementById("uid").value.trim();
  console.log("Verify clicked, UID =", uid);

  if (validIDs.includes(uid)) {
    document.getElementById("attendanceForm").style.display = "block";
    alert("ID verified, form opened");
  } else {
    alert("Invalid Unique ID");
  }
}

// QR se aayi ID auto-fill + auto-verify
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const uidFromQR = params.get("uid");

  if (uidFromQR) {
    document.getElementById("uid").value = uidFromQR;
    verifyID();
  }
};

function submitAttendance() {
  fetch(" https://script.google.com/macros/s/AKfycbxWVSQRwWM1pxJEEmMTMMfmOm0WNAL0mGISKskAjV5CHUPtR8nZxegkuVWrzsqgDHoi6g/exec", {
    method: "POST",
    body: new URLSearchParams({
      name: document.getElementById("name").value,
      cits: document.getElementById("cits").value,
      status: document.getElementById("status").value
    })
  })
  .then(response => response.text())
  .then(data => {
    alert("Attendance Saved Successfully");
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Error saving attendance");
  });
}
