// event to handle form submission
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  console.log('Button pressed.');
  var issueDesc = document.getElementById('issueDescInput').value;
  var issueSeverity = document.getElementById('issueSeverityInput').value;
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  var issueId = chance.guid();
  var issueStatus = 'Open';

  // populate issues object to be later pushed to localStorage
  var issue = {
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  };

  //check if localStorage is empty
  if (localStorage.getItem('issues') == null) {
    // if so, populate issues array with the issue object
    var issues = [];
    issues.push(issue);
    // send object to localStorage
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    // if localStorage has items in it populate issues array with them
    var issues = JSON.parse(localStorage.getItem('issues'));
    // then add new issue object to the array
    issues.push(issue);
    // send object to localStorage
    localStorage.setItem('issues', JSON.stringify('issues'));
  }
  //reset the form
  document.getElementById('issueInputForm').reset();
  // update list of issues in HTML
  fetchIssues();
  //prevent form from submitting in HTML, as all logic is handled with JS
  e.preventDefault();
}


// retrieving data from local storage
function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'));
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