document.getElementById('download-btn').addEventListener('click', function () {
    // Reference the content you want to convert to PDF
    const element = document.getElementById('cv-content');

    // Use html2pdf to convert the content to PDF and download
    html2pdf()
        .set({
            margin: 1,
            filename: 'Krisztina_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        })
        .from(element)
        .save();
});
