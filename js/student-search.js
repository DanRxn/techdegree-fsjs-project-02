// # SEARCH SCRIPT
// ## Wrap script in function to limit scope of variables
(function() {
// ## Script variables
			// Configure minimum number of students required for enabling the search feature
const minStudentsToSearch = 6;
			// Select list of students and set as $constant
const $students = $('.student-item');
			// Get count of students and set as constant
const countOfStudents = $students.length;
			// Get count of pages needed based on count of countOfStudents and studentsPerPage

			// This one

			// That one


// ## Script functions
			// Do this and that

			// Do this and that



//	## Changes on initial page load
			// Evaluate if search is useful (i.e. more than 5 students); if so, enable search...
if (countOfStudents >= minStudentsToSearch) {
				// * add HTML for the search UI
	$('.page-header').append(
	`<!-- student search HTML added dynamically -->
        <div class="student-search">
          <input placeholder="Search for students...">
          <button>Search</button>
        </div>
   <!-- end search -->`
		);
} 


	//	## On click of a pagination link


// ## Close wrapper script
})();