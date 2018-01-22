// # Dynamic page content and student-filtering functionality

	// ## Validate that external JS has loaded

		// ### Project's JS

		console.log('student-filtering.js has loaded!');

		// ### jQuery from CDN

		const justTesting = $('h2');

		if (justTesting) {
			console.log('jQuery has loaded from CDN too!')
		}



// 	## Pagination


	//TO-DOs

	// ✅ Configure results per page (as a constant)

const resultsPerPage = 10;


	// ✅ Select list of students and set as constant
const students = $('.student-item');

const countOfStudents = $(students).length;

	// ✅ Calculate number of pages needed, based on number of students, and set as constant

const getNumberOfPages = () => {

	numberOfPages = Math.ceil( countOfStudents / resultsPerPage );
	return numberOfPages;	
}

const pageCount = getNumberOfPages();

// Show students for a given page number

const studentsFromPageNumber = (pageNumber) => {
	// get upper and lower bounds of indexes for students to show
	var firstStudent = (pageNumber - 1) * resultsPerPage + 1;
	var lastStudent = ( pageNumber * resultsPerPage );

	// show students in page's range

	for (s = 1; s <= countOfStudents; s++) {
		var thisStudent = $('.student-item').get(s-1);
		console.log(thisStudent + ' is thisStudent inside the function!');

		if (firstStudent <= s && s <= lastStudent) {
			$(thisStudent).css('display', 'true');
		} else {
			$(thisStudent).css('display', 'none');
		}
	}
}

	// ✅ On page load

		// ✅ Show links for the correct number of pages

$('.page').append(
`<!-- pagination HTML to create dynamically -->
      <div class="pagination">
        <ul>
        </ul>
      </div>
      <!-- end pagination -->`
	);

for ( p = 1; p <= pageCount; p++ ) {
	$('.pagination ul').append(
	  `<li>
            <a href="#">` + p + `</a>
          </li>`
	);
}

		// ✅ Style the link for first page as the current page; and
 
 $('.pagination ul li:nth-child(1) a').addClass("active");

		// ✅ Hide all but the first page of results

studentsFromPageNumber(1);




// 	## Search


	//TO-DOs

	// 

	
	// 


	// 