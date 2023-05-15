fetch('studentsInfo.json')
    .then(response => response.json())
    .then(data => {
        const students = data.bsbeY20;
        const list = document.getElementById('slist');
        students.forEach(student => {
            const li = document.createElement('li');
            li.classList.add('card');
            const img = document.createElement('img');
            const rn = student.rollNo;
            img.src = `https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${student.rollNo}_0.jpg`
            const name = document.createElement('span');
            name.textContent = student.name;

            li.appendChild(img);
            li.appendChild(name);
            list.appendChild(li);

            function newFunction() {
                img.onclick = enlargeImg();
            }
        });
    })
    /*function enlargeImg() {
        // Set image size to 1.5 times original
        img.style.transform = "scale(1.5)";
        // Animation effect
        img.style.transition = "transform 0.25s ease";
    }
    // Function to reset image size
    function resetImg() {
        // Set image size to original
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
    }*/