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

function verifyID() {
  let uid = document.getElementById("uid").value.trim();

  if (uid === "") {
    alert("Please enter Unique ID");
    return;
  }

  // direct form open
  document.getElementById("attendanceForm").style.display = "block";
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
  fetch("https://script.google.com/macros/s/AKfycbyXG4aL2k0UY1KENyy6432oUCpM9dc4xHXJG0h_sMt5h-sDztZROdUVLNnd3lGR9RY23g/exec", {
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
