let profileName = ""; // store name globally

function login(){

profileName = document.getElementById("username").value;

if(profileName===""){
alert("Please enter your name");
return;
}

document.getElementById("loginPage").style.display="none";
document.getElementById("dashboard").style.display="block";

document.getElementById("profile").innerHTML="👤 "+profileName;

}

function showSection(section){

let content="";

if(section==="personal"){
content=`
<div class="card">
<h2>👤 Personal Information</h2>
<p>Name: ${profileName}</p>
<p>City: Rajkot</p>
<p>Email: example@email.com</p>
<img src="images/profile.png">
</div>`;
}

if(section==="hobbies"){
content=`
<div class="card">
<h2>🎨 Hobbies</h2>
<p>🎮 Gaming</p>
<p>💻 Coding</p>
<p>📚 Reading</p>
<img src="images/hobby.jpg">
</div>`;
}

if(section==="school"){
content=`
<div class="card">
<h2>🏫 School</h2>
<p>ABC High School</p>
<p>Completed: 2022</p>
<img src="images/school.jpg">
</div>`;
}

if(section==="college"){
content=`
<div class="card">
<h2>🎓 College</h2>
<p>Example Engineering College</p>
<img src="images/college.jpg">
</div>`;
}

if(section==="certificates"){
content=`
<div class="card">
<h2>🏆 Certificates</h2>
<p>HTML Certificate</p>
<img src="images/certificate.jpg">
</div>`;
}

document.getElementById("contentArea").innerHTML=content;

}