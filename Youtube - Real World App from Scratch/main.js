// Initialize Firebase
var config = {
  apiKey: "AIzaSyB0MYNXIZkJbMeW6zWQrEDdsNQmvvYjYmI",
  authDomain: "issue-tracker-a4304.firebaseapp.com",
  databaseURL: "https://issue-tracker-a4304.firebaseio.com",
  storageBucket: "issue-tracker-a4304.appspot.com",
  messagingSenderId: "664719698064"
};
firebase.initializeApp(config);

// event to handle form submission
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function writeToLocalStorage(arr) {
  // send object to localStorage
  localStorage.setItem('issues', JSON.stringify(arr));
}

function readFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

function saveIssue(e) {
  console.log('Button pressed.');
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';
  console.log('Logged: ' + issueDesc + ', ' + issueSeverity + ', ' + issueAssignedTo + ', ' + issueId + ', ' + issueStatus);

  // populate issues object to be later pushed to localStorage
  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  };

  console.log(issue);

  //check if localStorage is empty
  if (localStorage.getItem('issues') == null) {
    // if so, populate issues array with the issue object
    console.log('No previous issues');
    var issues = [];
    issues.push(issue);
    writeToLocalStorage(issues);
  } else {
    // if localStorage has items in it populate issues array with them
    console.log('Some previous issues');
    var issues = readFromLocalStorage('issues');
    console.log(issues.toString());
    // then add new issue object to the array
    issues.push(issue);
    writeToLocalStorage(issues);
  }
  //reset the form
  document.getElementById('issueInputForm').reset();
  // update list of issues in HTML
  fetchIssues();
  //prevent form from submitting in HTML, as all logic is handled with JS
  e.preventDefault();
}

function setStatusClosed(id) {
  var issues = readFromLocalStorage('issues');

  for (var i = 0; i < issues.length; i++){
    if (issues[i].id === id) {
      issues[i].status = 'Closed';
    }
  }

  writeToLocalStorage(issues);
  fetchIssues();
}

function deleteIssue(id) {
  var issues = readFromLocalStorage('issues');

  for (var i = 0; i < issues.length; i++){
    if (issues[i].id === id) {
      issues.splice(i ,1);
    }
  }

  writeToLocalStorage(issues);
  fetchIssues();
}


// retrieving data from local storage
function fetchIssues() {
  var issues = readFromLocalStorage('issues');
  // exit if no issues in localStorage
  if (issues == null) {
    console.log('No issues in localStorage!');
    return;
  }
  var issuesList = document.getElementById('issuesList');

  // clear list of issues
  issuesList.innerHTML = '';

  // iterate over the array of fetched issues
  for (var i = 0; i < issues.length; i++){
    console.log(issues[i]);
    var id = issues[i].id;
    var desc = issues[i].description;
    var severity = issues[i].severity;
    var assignedTo = issues[i].assignedTo;
    var status = issues[i].status;

    issuesList.innerHTML += '<div class="well">'+
                            '<h6>Issue ID: ' + id + '</h6>'+
                            '<p><span class="label label-info">' + status + '</span></p>'+
                            '<h3>' + desc + '</h3>'+
                            '<p><span class="glyphicon glyphicon-time">' + severity + '</span></p>'+
                            '<p><span class="glyphicon glyphicon-user">' + assignedTo + '</span></p>'+
                            '<a href="#" onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a>'+
                            '<a href="#" onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>'+
                            '</div>';
  }
}