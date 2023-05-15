
fetch('studentsInfo.json')
    .then(response => response.json())
    .then(data => {
        const students = data.bsbeY20;
        const list = document.getElementById('slist');
        students.forEach(student => {
            const li = document.createElement('div');
            li.classList.add('card');
            const img = document.createElement('img');
            img.classList.add('dp');
            const rn = document.createElement('span');
            rn.classList.add('rn');
            rn.textContent=`Roll No:${student.rollNo}`;
            img.src = `https://oa.cc.iitk.ac.in/Oa/Jsp/Photo/${student.rollNo}_0.jpg`
            const name = document.createElement('span');
            name.classList.add('info');
            name.textContent = ` Name:${student.name}\n`;

            li.appendChild(img);
            li.appendChild(name);
            li.appendChild(rn);
            list.appendChild(li);
            
            
           /* img.addEventListener('click', function my(){
				img.classList.add('active');
			});
            img.removeEventListener('click',my);*/

           
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