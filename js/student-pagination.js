// # PAGINATION SCRIPT
// ## Wrap script in function to limit scope of variables
(function() {
// ## Script variables
			// Configure results per page
const studentsPerPage = 10;
			// Select list of students and set as $constant
const $students = $('.student-item');
			// Get count of students and set as constant
const countOfStudents = $students.length;
			// Get count of pages needed based on count of countOfStudents and studentsPerPage
const pageCount = (countOfStudents > studentsPerPage) ? Math.ceil( countOfStudents / studentsPerPage ) : 1;
// ## Script functions
			// Style page links based on the active page 
const styleLinksForPage = (pageNumber) => {
	$('.pagination ul')
		.find('li a')
		.removeClass("active")
		.addClass("page-link")
		.end()
		.find(`li:nth-child(${pageNumber}) a`)
		.addClass("active")
		.removeClass("page-link");
}
			// Show correct students for the given page number
const filterStudentsForPage = (pageNumber) => {
				// * get upper and lower bounds of indexes for students to show
	var firstStudent = (pageNumber - 1) * studentsPerPage + 1;
	var lastStudent = ( pageNumber * studentsPerPage );
				// * show students in page's range
	for (s = 1; s <= countOfStudents; s++) {
		var thisStudent = $students.get(s-1);
		if (firstStudent <= s && s <= lastStudent) {
			$(thisStudent).css('display', 'block');
		} else {
			$(thisStudent).css('display', 'none');
		}
	}
}
//	## Changes on initial page load
			// Evaluate if pagination is needed; if so, setup first page...
if (countOfStudents > studentsPerPage) {
				// * add pagination div and links for the correct number of pages to footer
	$('.page').append(
	`<!-- pagination HTML created dynamically -->
	      <div class="pagination">
	        <ul>
	        </ul>
	      </div>
	 <!-- end pagination -->`
		);
	for ( p = 1; p <= pageCount; p++ ) {
		$('.pagination ul').append(
		  `<li>
		  	<a href="#${p}">${p}</a>
		  </li>`
		);
	} 
			// Style links appropriately for the first page; and
	styleLinksForPage(1);
			// Filter students to show only the first page
	filterStudentsForPage(1);
}
//	## On click of a pagination link
$('.pagination').on("click", '.page-link',  function (e) {
			// * get page number of the clicked link
	var nextPage = parseInt(+( $(this).text() ));
			// * style the links based on the clicked link
	styleLinksForPage(nextPage);
			// * filter the student list based on the clicked link
	filterStudentsForPage(nextPage);
});
// ## Close wrapper script
})();
