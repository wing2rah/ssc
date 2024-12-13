const cutoffData = {
    bsf: {
        general: { male: 117.54686, female: 110.28 },
        ews: { male: 103.83604, female:95.53},
        sc: { male: 108.91580, female: 105.34 },
        st: { male: 112.17179, female: 107.51 },
        obc: { male: 114.86815, female: 108.41},
    },
    cisf: {
        general: { male: 128.33, female: 124.48 },
        ews: { male: 116.67, female: 100 },
        sc: { male: 119.24, female: 113.10},
        st: { male: 118.72073, female: 118.72 },
        obc: { male: 124.55, female:121 },
    },
    ar: {
        general: { male: 132.49, female: " NOT FOUND"},
        ews: { male: 119, female: "NOT FOUND " },
        sc: { male: 126.54, female: "NOT FOUND"},
        st: { male: 136.57, female:"NOT FOUND " },
        obc: { male: 128.63, female: "NOT FOUND"},
    },
    crpf: {
        general: { male: 116.56, female:123.45},
        ews: { male: 106, female: null},
        sc: { male: 108.9, female: 112.11 },
        st: { male: 109.63, female:null },
        obc: { male: 114.36, female: 120 },
    },
    itbp: {
        general: { male: 121, female: 112.12 },
        ews: { male: 106, female: 92},
        sc: { male: 116.5, female: 105.96},
        st: { male: 116.3, female: 114.71 },
        obc: { male: 120.11, female: 109.46},
    },
    ssb: {
        general: { male: 136.36, female: "NOT FOUND" },
        ews: { male: 121.88, female: "NOT FOUND " },
        sc: { male: 129.7, female:"NOT FOUND " },
        st: { male: 128.1, female: "NOT FOUND " },
        obc: { male: 132.7, female: "NOT FOUND " },
    },
};

document.getElementById("find-cutoff").addEventListener("click", () => {
    const gender = document.getElementById("gender").value;
    const caste = document.getElementById("caste").value;
    const post = document.getElementById("post").value;

    const resultContainer = document.getElementById("result");
    if (cutoffData[post] && cutoffData[post][caste]) {
        const cutoff = cutoffData[post][caste][gender];
        resultContainer.innerHTML = `
            <h3>Cut-Off Details</h3>
            <p><strong>Post:</strong> ${post.toUpperCase()}</p>
            <p><strong>Caste:</strong> ${caste.toUpperCase()}</p>
            <p><strong>Gender:</strong> ${gender.toUpperCase()}</p>
            <p><strong>Cut-Off Marks:</strong> ${cutoff}</p>
        `;
        resultContainer.style.display = "block";
    } else {
        resultContainer.innerHTML = "<p>No data available for the selected criteria.</p>";
        resultContainer.style.display = "block";
    }
});