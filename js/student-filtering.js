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

	// ◻️ Calculate number of pages needed, based on number of students, and set as constant

const getNumberOfPages = () => {
	const countOfStudents = $(students).length;

	numberOfPages = Math.ceil( countOfStudents / resultsPerPage );
	return numberOfPages;
	
}

	// On page load

		// ◻️ Show links for the correct number of pages

$('.page').append(
`<!-- pagination HTML to create dynamically -->
      <div class="pagination">
        <ul>
        </ul>
      </div>
      <!-- end pagination -->`
	);

// Below isn't working.  I *think* it has to do with the getNumberOfPages() function not being used right. 

// for ( p = 1, p <= getNumberOfPages(), p++) {
// 	$('.pagination ul').append(
// 	  `<li>
//             <a href="#">` + p + `</a>
//           </li>`
// 	);
// }

		// ◻️ Hide all but the first page of results; and


		// ◻️ Style the link for first page as the current page




// 	## Search


	//TO-DOs

	// 

	
	// 


	// 