import logo from './logo.svg';
import './App.css';

// typing...
const blanktype = "_";
const conttype = "|";

const titlename = "amanda sinha";

const openScreen = (
  <div id="onOpen">
    <h1 className="headtext">{titlename}</h1>
    <h3 className="headtext"><em>scroll to continue</em></h3>
  </div>
);

// navigation area
const navigation = (
  <div id="navaround">
    <div className="nav">
      <button className='navbutt'>about me</button>
    </div>
    <div className="nav">
      <button className='navbutt'>qualifications</button>
    </div>
    <div className="nav">
      <button className='navbutt'>projects</button>
    </div>
  </div>
)

//about
var about = "Hardworking and detail-oriented computer science graduate. Proficient in a range of programming languages, including Python, C++, and SQL, as well as popular operating systems such as Windows and MacOS. Works well in both group and individual settings, specializing in web design and full stack development. Seeking a role that utilizes my technical and analytical skills and allows me to continue learning and growing."

const aboutme = (
  <div id="aboutme">
    <h3>about amanda sinha</h3>
    <p>{about}</p>
  </div>
)


var OSUTA = '03/22 - 06/24|Teaching Assistant|Oregon State University|Provided support to students from a variety of backgrounds across classes such as web development and computer architecture. Helped students understand course material and apply what they learned. Additionally assisted with debugging students’ work and example work.'

// whatidid = string with "|" delimiter
// returns html of whatidid
function process_exp(whatidid) {
  var whatido = whatidid.split("|")

  var doingit = (
    <div className='exp'>
      <h4>{whatido[1]} | {whatido[2]}</h4>
      <h5>{whatido[0]}</h5>
      <p>{whatido[3]}</p>
    </div>
  )
  
  return doingit;
}

var exp = (
  <div id="experience" className="qual">
    <h3>experience</h3>
    {process_exp(OSUTA)}
  </div>
)

var cs261 = 'CS261|Data Structures'
var cs271 = 'CS271|Computer Architecture'
var cs290 = 'CS290|Web Development'
var cs325 = 'CS325|Analysis of Algorithms'
var cs340 = 'CS340|Introduction to Databases'
var cs493 = 'CS493|Cloud Application Development'
// var cs261 = 'CS261|whoa'
// var cs261 = 'CS261|whoa'

// whatidid = string with "|" delimiter
// returns html of whatidid
function process_cls(whatidid) {
  var whatido = whatidid.split("|")

  var doingit = (
    <div className='cls'>
      <h4><em className='clstitle'>{whatido[0]}</em> | {whatido[1]}</h4>
      <p>{whatido[2]}</p>
    </div>
  )
  
  return doingit;
}

var classes = (
  <div id="classes" className="qual">
    <h3>relevant classes</h3>
    {process_cls(cs261)}
    {process_cls(cs271)}
    {process_cls(cs290)}
    {process_cls(cs325)}
    {process_cls(cs340)}
    {process_cls(cs493)}
  </div>
)

var skills = (
  <div id="skills" className="qual">
    <h3>skills</h3>
    <ul>
      <li>Python</li>
      <li>C++</li>
      <li>Java</li>
      <li>MASM</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>SQL</li>
      <li>PHP</li>
      <li>React</li>
      <li>Shell scripting</li>
      <li>Github</li>
      <li>Technical documentation</li>
      <li>Communication</li>
      <li>Agile methodologies</li>
      <li>Debugging</li>
      <li>Teamwork</li>
      <li>Github</li>
      <li>Docker</li>
    </ul>
  </div>
)

const qualifications = (
  <div id="qualifications">
    {exp}
    {classes}
    {skills}
  </div>
)

var venome = 'The Unknown Venome|https://venome.cqls.oregonstate.edu|A project focused on venom proteins; I created a cohesive frontend and worked with project partners to provide visual and analytical functionality which helped their research. Additionally drafted database structures and assisted in implementation.'

// whatidid = string with "|" delimiter
// returns html of whatidid
function process_prj(whatidid) {
  var whatido = whatidid.split("|")

  var doingit = (
    <div className='prj'>
      <h4><a href={whatido[1]}>{whatido[0]}</a></h4>
      <p>{whatido[2]}</p>
    </div>
  )
  
  return doingit;
}

const projects = (
  <div id="projects">
    <h3>projects</h3>
    <h5>github: <a>https://github.com/amandasinha?tab=repositories</a></h5>
    
    <div className='prj'>
      <h4>You are here!</h4>
      <p>This is my personal webpage where I'll be continuously testing various new techniques and honing my craft!</p>
    </div>
    {process_prj(venome)}
  </div>
)

function App() {
  return (
    <div className="App">
      
      {openScreen}

      <div id="content">

        {navigation}

        {aboutme}

        {qualifications}

        {projects}

      </div>
      
    </div>
  );
}

export default App;
