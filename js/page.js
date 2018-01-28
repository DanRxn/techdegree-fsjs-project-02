// # PAGINATION SCRIPT
// ## Wrap script in function to limit scope of variables
(function() {
  // ## Script variables
        // Configure results per page
  const studentsPerPage = 10;
  const minStudentsToSearch = 2;
        // Select list of students and set as $constant
  const $allStudents = $('.student-item');
  const countOfAllStudents = $allStudents.length;
  let $students = $('.student-item:visible');
        // Get count of students and set as constant
  let countOfStudents = $students.length;
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
    let firstStudent = (pageNumber - 1) * studentsPerPage + 1;
    let lastStudent = ( pageNumber * studentsPerPage );
          // * show students in page's range
    for (s = 1; s <= countOfStudents; s++) {
      let thisStudent = $students.get(s-1);
      if (firstStudent <= s && s <= lastStudent) {
        $(thisStudent).css('display', 'block');
      } else {
        $(thisStudent).css('display', 'none');
      }
    }
  }
  //	## Changes on initial page load
  const createPageLinks = () => {
      // Get count of pages needed based on count of countOfStudents and studentsPerPage
    const pageCount = (countOfStudents > studentsPerPage) ? Math.ceil(countOfStudents/studentsPerPage) : 1;
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
  }
  const createSearchUi = () => {
      if (countOfStudents >= minStudentsToSearch) {
            // * add HTML for the search UI
            $('.page-header').append(
            `<!-- student search HTML added dynamically -->
                  <div class="student-search">
                  <input type="text" name="search" placeholder="Search for students...">
                  <button type="submit">Search</button>
                  </div>
            <!-- end search -->`
      );
    } 
  }
  const removePageLinks = () => {
        $('.pagination').remove();
  }
  const paginate = () => {
// Evaluate if pagination is needed; if so, setup first page...
      if (countOfStudents > studentsPerPage) {
            // Crate page links and style for the first page; and
            createPageLinks();
            styleLinksForPage(1);
                  // Filter students to show only the first page
            filterStudentsForPage(1);
            //	## On click of a pagination link
            $('.pagination').on("click", '.page-link',  function (e) {
                  // * get page number of the clicked link
                  let nextPage = parseInt(+( $(this).text() ));
                        // * style the links based on the clicked link
                  styleLinksForPage(nextPage);
                        // * filter the student list based on the clicked link
                  filterStudentsForPage(nextPage);
            });
      }
  };
  const search = () => {
      removePageLinks();
      for (s = 0; s < countOfAllStudents; s++) {
            let thisStudent = $allStudents.get(s);
            let thisStudentName = $(thisStudent).find('h3').html();
            let thisStudentEmail = $(thisStudent).find('.email').html();
            const thisQuery = $('.student-search input').val();
            if (thisStudentName.includes(thisQuery) || thisStudentEmail.includes(thisQuery)) {
              $(thisStudent).css('display', 'block');
            } else {
              $(thisStudent).css('display', 'none');
            }
      }
      $students = $('.student-item:visible');
        // Get count of students and set as constant
      countOfStudents = $students.length;
      paginate();
  }
  const setupPage = () => {
      createSearchUi();
      paginate();
  }
  
  $('page').on("load", setupPage());

  $('.student-search button').on('click', function () {
        search()
  });

  // Allow the Enter key (key code 13) to act as the Search button 
  $('.student-search').keypress(function(e) {
      let key = e.which;
      if (key == 13) {
        $('.student-search button').click();
      }
  });



  // // ## Close wrapper script
  // })();

  // # SEARCH SCRIPT
// // ## Wrap script in function to limit scope of variables
// (function() {
  // ## Script variables
        // Configure minimum number of students required for enabling the search feature
  
        // Select list of students and set as $constant
  // const $students = $('.student-item');
  //       // Get count of students and set as constant
  // const countOfStudents = $students.length;
        // Get count of pages needed based on count of countOfStudents and studentsPerPage
  
        // This one
  
        // That one
  
  
  // ## Script functions
        // Do this and that
  
        // Do this and that
  
  
  
  //	## Changes on initial page load
        // Evaluate if search is useful (i.e. more than 5 students); if so, enable search...

  
  
    //	## On click of a pagination link
  
  
  // ## Close wrapper script
  })();