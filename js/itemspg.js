document.addEventListener('DOMContentLoaded', (event) => {
    const loginIframe = document.getElementById('loginIframe');
    const signUpIframe = document.getElementById('signUpIframe');
    
    // Event listener for 'Not a member' link in the login iframe
    loginIframe.addEventListener('load', () => {
      const loginDocument = loginIframe.contentDocument || loginIframe.contentWindow.document;
      const notAMemberLink = loginDocument.getElementById('notAMemberLink'); // Adjust the selector based on your actual HTML
      if (notAMemberLink) {
        notAMemberLink.addEventListener('click', (e) => {
          e.preventDefault();
          // Hide the login modal
          const loginModal = document.getElementById('loginModal');
          const loginModalInstance = bootstrap.Modal.getInstance(loginModal);
          loginModalInstance.hide();
  
          // Show the sign up modal
          const signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));
          signUpModal.show();
          
          // Adjust the iframe height
          signUpIframe.style.height = '70vh';
        });
      }
    });
  
    // Event listener for 'Already a member?' link in the sign up iframe
    signUpIframe.addEventListener('load', () => {
      const signUpDocument = signUpIframe.contentDocument || signUpIframe.contentWindow.document;
      const alreadyMemberLink = signUpDocument.getElementById('alreadyMemberLink'); // Adjust the selector based on your actual HTML
      if (alreadyMemberLink) {
        alreadyMemberLink.addEventListener('click', (e) => {
          e.preventDefault();
          // Hide the sign up modal
          const signUpModal = document.getElementById('signUpModal');
          const signUpModalInstance = bootstrap.Modal.getInstance(signUpModal);
          signUpModalInstance.hide();
  
          // Show the login modal
          const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
          loginModal.show();
          
          // Adjust the iframe height
          loginIframe.style.height = '40vh';
        });
      }
    });
  });




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// 點擊按鈕時返回頂部
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}