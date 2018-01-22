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

// Style page links based on the active page 

const styleLinksForPage = (thisPage) => {
$('.pagination ul li a').removeClass("active");
	console.log('Removed .active from all links');
$('.pagination ul li a').addClass("page-link");
	console.log('Added .page-link to all links');
$(".pagination ul li:nth-child(" + thisPage + ") a").addClass("active");
	console.log('Added .active to just-clicked link');
$(".pagination ul li:nth-child(" + thisPage + ") a").removeClass("page-link");
	console.log('Removed .page-link from just-clicked link');
}

// Show students for a given page number

const studentsFromPageNumber = (pageNumber) => {
	// get upper and lower bounds of indexes for students to show
	var firstStudent = (pageNumber - 1) * resultsPerPage + 1;
		console.log(firstStudent + ' is the first student to show');
	var lastStudent = ( pageNumber * resultsPerPage );
		console.log(lastStudent + ' is the last student to show');

	// show students in page's range

	for (s = 1; s <= countOfStudents; s++) {
		var thisStudent = $('.student-item').get(s-1);

		if (firstStudent <= s && s <= lastStudent) {
			$(thisStudent).css('display', '');
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
 

styleLinksForPage(1);

		// ✅ Hide all but the first page of results

studentsFromPageNumber(1);


// Reset visible students and link styles based on page link click

$('.page-link').click ( function () {
	var nextPageText = +( $(this).text() );
	console.log(nextPageText + ' is the text from the clicked link!');

	var nextPage = parseInt(nextPageText);
	console.log(nextPage + ' is the parsed-number from the clicked link!');
	console.log(typeof nextPage + ' is the type of nextPage var!');


	// 🔥 🔥 🔥 THIS PART IS NOT WORKING CORRECTLY 👇
	styleLinksForPage(nextPage);
	studentsFromPageNumber(nextPage);
});




// 	## Search


	//TO-DOs

	// 

	
	// 


	// 