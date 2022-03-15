

/// dark mode -->


const dark = document.getElementById("dark");

dark.addEventListener('click', () => {

    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {

        document.getElementById("th-btn").className = "bx bx-sun";
    }
    else {
        document.getElementById("th-btn").className = "bx bx-moon";
    }

})





var element = document.getElementById('container');
var btn = document.getElementById("cv_btn");

btn.addEventListener('click', () =>{
    html2pdf(element, {
        margin:       .1,
        filename:     'rogers.pdf',
        image:        { type: 'jpeg', quality: 100 },
        html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      });
})