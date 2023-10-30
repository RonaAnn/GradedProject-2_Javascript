window.resumeData = data.resume
let allResume = window.resumeData;
let currentResumeIndex = 0;

function renderResume() {
    
    let currentResume = allResume[currentResumeIndex];

    renderHeader(currentResume.basics.name, currentResume.basics.AppliedFor);
    renderBasicInfo(currentResume.basics.phone,currentResume.basics.email,currentResume.basics.profiles);
    renderTechSkills(currentResume.skills.keywords);
    renderHobbies(currentResume.interests.hobbies);
    renderWorkExperience(currentResume.work);
    renderProjects(currentResume.projects);
    renderEducation(currentResume.education);
    renderInternship(currentResume.Internship);
    renderAchievements(currentResume.achievements.Summary);

    renderNavButtons();
}

function next() {
    
    currentResumeIndex += 1;
    renderResume();
}

function prev() {
    
    currentResumeIndex -= 1;
    renderResume();
}

function renderNavButtons() {

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    prevBtn.style.visibility = currentResumeIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentResumeIndex + 1 >= allResume.length ? 'hidden' : 'visible';

}

function renderAchievements(achievement) {

    const achievements = document.getElementById("achievements");
    achievements.innerHTML = `<ul class="innerDetail">${achievement.map((val) => `<li>${val}</li>`).join('')} </ul>`;
}

function renderInternship(internships) {

    const internship = document.getElementById("internship");
    internship.innerHTML = `<ul class="innerDetail"> ${Object.keys(internships).map((key) => `<li><b>${key} </b>: ${internships[key]}</li>`).join('')} </ul>`
}


function renderEducation(educationDetails) {
    
    const education = document.getElementById("edu");
    education.innerHTML = `<ul class="innerDetail"> ${Object.keys(educationDetails).map((edu) => `<li><b>${edu} </b>: 
    ${Object.values(educationDetails[edu]).map(details => details)}</li>`).join('')} </ul>`;
}

function renderProjects(projects) {
    
    const projectDetails = document.getElementById("projectDetails");
    projectDetails.innerHTML = `<p class="innerDetail"><b>${projects.name}</b> : ${projects.description}`
}

function renderWorkExperience(work) {

    const previousCompanyDetails = document.getElementById("prevCompanyDetails");
    previousCompanyDetails.innerHTML = Object.keys(work).map((key) => `<p class="innerDetail"><b>${key}</b> : ${work[key]}</p>`).join('');

}

function renderHobbies(interests) {
    
    const hobbies = document.getElementById("hobbies");
    hobbies.innerHTML = interests.map((hobby) => hobby ).join('<br/>');
}
function renderTechSkills(skills) {
    
    const technicalSkills = document.getElementById("techSkills");
    technicalSkills.innerHTML = skills.map((skill) => skill).join('<br/>')
}

function renderBasicInfo(phoneNo, emailAdd, linkedIn) {
    
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const linkedin = document.getElementById("linkedin");

    phone.innerText = phoneNo;
    email.innerText = emailAdd;
    linkedin.href = linkedIn.url;
   
}

function renderHeader(name, title) {

    const employeeName = document.getElementById("name");
    const appliedFor = document.getElementById("jobTitle");
    
    employeeName.innerText = name;
    appliedFor.innerText = title
}

const searchBar = document.getElementById("search-box");
searchBar.oninput = function (event) {

    const searchInput = event.target.value;

    if (searchInput.length > 0) {
        allResume = data.resume.filter((data) => data.basics.AppliedFor
                        .toLowerCase().includes(searchInput.toLowerCase()));
    } else {
        allResume = window.resumeData;
    }

    currentResumeIndex = 0;
    if (allResume.length > 0) renderResume();
    renderNavButtons();
    checkResume();
 
}

function checkResume() {
    
    const noResultContainer = document.getElementById("noResult");
    const resumeContainer = document.getElementById("resume-container");

    if (allResume.length > 0) {
        noResultContainer.style.display = "none";
        resumeContainer.style.display = "block";
    } else {
        noResultContainer.style.display = "block";
        resumeContainer.style.display = "none";
    }
}

renderResume()

