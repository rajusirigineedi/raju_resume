const openfilename = document.getElementById('openfilename');
const lineNumbers = document.getElementsByClassName('linenumbers')[0];
const codearea = document.getElementsByClassName('actualcode')[0];


var aboutpage = `Hello I'm <span class="highlightwb"><b>< Raju sirigineedi /></b></span>
I'm a <span class="vname"><b>#Software Engineer</b></span>. Loves software. I'm very much passionated about building softwares for <span class="vname">real world problems</span>.

<span class="highlightwb">Education</span> () {
  <span class="keyword">for</span> (<span class="vname">year</span> = <span class="intlits">2017</span>; <span class="vname">year</span> <= <span class="intlits">2021</span>; <span class="vname">year</span>++) {
    Studied (" B.Tech in CSE with <span class="intlits">8.02 CGPA</span> @<span class="keyword">BVCITS</span> ");
  }
  <span class="keyword">for</span> (<span class="vname">year</span> = <span class="intlits">2015</span>; <span class="vname">year</span> <= <span class="intlits">2017</span>; <span class="vname">year</span>++) {
    Studied (" Intermediate @<span class="keyword">Gayatri Jr college</span> with <span class="intlits">97%</span> ");
  }
  Studied (" SSC with <span class="intlits">10.00 CGPA</span> @<span class="keyword">VIITTS school</span> ");
}

After <span class="vname"><b>#Software</b></span>, I'm more interested in playing <span class="highlightwb"><b>#Cricket</b></span>.`;

var skillspage = `my_skills = [
  <span class="highlightwb">prgoramming_languages</span> : {<ul class="skilllist">
              <li  class="skill">
                <div>    <span class="vname"><b>"C++"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"C"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"Python"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"Java"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 70%;"></div></div>
              </li>
            </ul>  },
  <span class="highlightwb">frameworks</span> : {<ul class="skilllist">
              <li  class="skill">
                <div>    <span class="vname"><b>"NodeJS"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"React"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"Flutter"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"Django"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 70%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"Android (Java)"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
            </ul>  },
  <span class="highlightwb">others</span> : {<ul class="skilllist">
              <li  class="skill">
                <div>    <span class="vname"><b>"SQL"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 60%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"HTML"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"REST API"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"CSS"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 90%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"GIT"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"Firebase"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 70%;"></div></div>
              </li>
              <li class="skill">
                <div>    <span class="vname"><b>"Adobe XD"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 80%;"></div></div>
              </li>
              <li  class="skill">
                <div>    <span class="vname"><b>"ML/AI"</b></span> : </div> <div class="progbar"><div class="progbarsuc" style="width: 60%;"></div></div>
              </li>
            </ul>  },
]
`;

var contactpage = `<ul class="skilllist">
<li  class="skill">
  <img style="width: 24px;" src="https://img.icons8.com/color/48/000000/github--v1.png"/>
  <div><span class="keyword"><b>  Github</b></span>  =  </div><a class="links" href="https://github.com/rajusirigineedi">https://github.com/rajusirigineedi</a>
</li>
<li class="skill">
  <img style="width: 24px;" src="https://img.icons8.com/color/48/000000/linkedin-circled--v5.png"/>
  <div><span class="keyword"><b>  LinkedIn</b></span>  =  </div><a class="links" href="https://www.linkedin.com/in/raju-sirigineedi">https://www.linkedin.com/in/raju-sirigineedi</a>
</li>
<li  class="skill">
  <img style="width: 24px;" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
  <div><span class="keyword"><b>  Instagram</b></span>  =  </div><a class="links" href="#">___.raju.___</a>
</li>
<li  class="skill">
  <img style="width: 24px;" src="https://img.icons8.com/color/48/000000/phone.png"/>
  <div><span class="keyword"><b>  Mobile</b></span>  =  </div><a class="links" href="#">+91 9010778702</a>
</li>
<li  class="skill">
  <img style="width: 24px;" src="https://img.icons8.com/color/48/000000/gmail-new.png"/>
  <div><span class="keyword"><b>  Email</b></span>  =  </div><a class="links" href="#">rajusirigineedi17549@gmail.com</a>
</li>
</ul>`;

var billerpage = `<img style="width: 72px;" src="billericon.png">
<span class="highlightwb"><b>< Biller /></b></span>
An <span class="vname"><b>#Android application</b></span> that helps Users to maintain their customer bills mothly or some period bias.
In this application a user can create his customer list and he can note down the monthly <b class="intlits">billings</b>,
total due, details about the due, any addons.
He can also get hold of how much amount they are collecting per month, how much to be paid.

<span class="keyword">Technologies Used :</span>
- Flutter
- Dart
- Javascript
- Firebase

<span class="keyword">Screenshots :</span>
Currently not available`;

var cabinetpage = `<img style="width :120px;" src="cablogo2.png"><br>
<span class="highlightwb"><b>< Cabinet /></b></span>
A <span class="vname"><b>#Web application</b></span> that stores the workings of user projects and mini projects, to show them to the world.
Users can create account and upload the screenshots and working videos of their apps that they built and they can provide the description about the app.
This application tailors all these data and creates a clean <b class="intlits">UI</b> that can be useful to present your project on the go.
You can save your mini projects details in this site and you can present it to the world in a cleanest way.

<span class="keyword">Technologies Used :</span>
- Python
- Django
- Javascript
- Mongodb
- HTML CSS
- JQuery AJAX

<span class="keyword">Screenshots :</span>

<img src="cbnt2.jpg" style="width:90%">

<img src="cbnt1.png" style="width:90%">
<br><br>.`;

var studsitypage = `<span class="highlightwb"><b>< Studsity /></b></span><br>
An <span class="vname"><b>#Android application</b></span> helps students to read and save the notes and references uploaded by their lecturers.
Teachers can log into the app and can post the <b class="intlits">lectures, notes, references,</b> that were taught in the class on that day.
Students can log in and can access the resources.

<span class="keyword">Technologies Used :</span>
- Java
- Firebase

<span class="keyword">Screenshots :</span>
Currently not available`;


var pagedic = {
    'About': {
        'page': aboutpage,
        'lines': 15
    },
    'Skills': {
        'page': skillspage,
        'lines': 26
    },
    'Contact': {
        'page' : contactpage,
        'lines' : 7
    },
    'Biller' : {
        'page' : billerpage,
        'lines' : 18
    },
    'Cabinet' : {
        'page' : cabinetpage,
        'lines' : 58
    },
    'Studsity' : {
        'page' : studsitypage,
        'lines' : 15
    }
}

const setFileName = (name) => {
    openfilename.textContent = name;
    var page = name.split('.')[0];
    if(pagedic[page.trim()] === undefined){
        lineNumbers.innerHTML = 1;
        codearea.innerHTML = 'page is yet to fill';
        return;
    }
    var currpage = pagedic[page.trim()]['page'];
    var s = "";
    var n = pagedic[page.trim()]['lines'];
    for(var i = 0; i < n; i++){
        s+=`${i+1}<br>`;
    }
    lineNumbers.innerHTML = s;
    codearea.innerHTML = currpage;
}

const removeFileSelectedBar = () => {
    document.querySelectorAll('.directoryitems').forEach( item => {
        if(item.classList.length === 2){
            item.classList.remove('fileselected');
            return;
        }
    })
}

document.querySelectorAll('.directoryitems').forEach( item => {
    item.addEventListener('click', event => {
        removeFileSelectedBar();
        item.classList.add('fileselected');
        setFileName(item.innerHTML);
    })
});

setFileName('About.js');
