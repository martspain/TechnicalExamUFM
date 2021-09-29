import './App.css';
import { react, useState } from 'react';

const App = () => {
  const [selectedOpt, setSelectedOpt] = useState(0);
  const [subopt, setSubopt] = useState(0);
  const [students, setStudents] = useState([{id: 123, name: "Juan Pepe", phone: "+502 1234-5678", email: "thegreat@gmail.com"}])
  const [professors, setProfessors] = useState([{id: 987, name: "Dr. De la Cruz", phone: "+502 9876-5432", email: "prof@gmail.com"}])
  const [courses, setCourses] = useState([{id: 1, name: "Ciencia de la Imaginación", cred: 25, hour: "15:30", profId: 1, creationDate: "30/06/2019"}])
  const [asign, setAsign] = useState([{id: 1, courseId: 1, studentId: 1}])
  const [searchRes, setSearchRes] = useState("")
  

  const setter = (opt) =>{
    if(opt === 1){
      setSelectedOpt(1)
      setSubopt(0)
      setSearchRes("")
    }
    else if(opt === 2){
      setSelectedOpt(2)
      setSubopt(0)
      setSearchRes("")
    }
    else if(opt === 3){
      setSelectedOpt(3)
      setSubopt(0)
      setSearchRes("")
    }
    else if(opt === 4){
      setSelectedOpt(4)
      setSubopt(0)
      setSearchRes("")
    }
  }
  const subsetter = (opt) => {
    if(opt === 1){
      setSubopt(1)
      setSearchRes("")
    }
    else if(opt === 2){
      setSubopt(2)
      setSearchRes("")
    }
    else if(opt === 3){
      setSubopt(3)
      setSearchRes("")
    }
    else if(opt === 4){
      setSubopt(4)
      setSearchRes("")
    }
  }

  const create = () =>{
    if(selectedOpt === 1){
      let serial = document.getElementById("stud-id").value
      let studName = document.getElementById("stud-name").value
      let studPhone = document.getElementById("stud-phone").value
      let studEmail = document.getElementById("stud-email").value
      setStudents(oldState => [...oldState, {id: serial, name: studName, phone: studPhone, email: studEmail}])
    }
    else if(selectedOpt === 2){
      let serial = document.getElementById("prof-id").value
      let profName = document.getElementById("prof-name").value
      let profPhone = document.getElementById("prof-phone").value
      let profEmail = document.getElementById("prof-email").value
      setProfessors(oldState => [...oldState, {id: serial, name: profName, phone: profPhone, email: profEmail}])
    }
    else if(selectedOpt === 3){
      let serial = document.getElementById("cour-id").value
      let courName = document.getElementById("cour-name").value
      let courCred = document.getElementById("cour-cred").value
      let courHour = document.getElementById("cour-hour").value
      let courProf = document.getElementById("cour-prof").value
      let courDate = document.getElementById("cour-date").value
      setCourses(oldState => [...oldState, {id: serial, name: courName, cred: courCred, hour: courHour, profId: courProf, creationDate: courDate}])
    }
  }
  
  const search = () =>{
    if(selectedOpt === 1){
      let id = document.getElementById("stud-id").value
      students.forEach((stud) => {
        if (stud.id === parseInt(id)){
          setSearchRes(`ID: ${id}, Nombre: ${stud.name}, Telefono: ${stud.phone}, Email: ${stud.email}`)
        }
      })
    }
    else if(selectedOpt === 2){
      let id = document.getElementById("prof-id").value
      professors.forEach((prof) => {
        if (prof.id === parseInt(id)){
          setSearchRes(`ID: ${id}, Nombre: ${prof.name}, Telefono: ${prof.phone}, Email: ${prof.email}`)
        }
      })
    }
    else if(selectedOpt === 3){
      let id = document.getElementById("cour-id").value
      courses.forEach((cour) => {
        if (cour.id === parseInt(id)){
          setSearchRes(`ID: ${id}, Nombre: ${cour.name}, Creditos: ${cour.cred}, Horario: ${cour.hour}, Profesor: ${cour.profId}, Fecha: ${cour.creationDate}`)
        }
      })
    }
  }

  const createAssignment = () =>{
    let serial = document.getElementById("asign-id").value
    let courId = document.getElementById("asign-cour").value
    let studId = document.getElementById("asign-stud").value
    setAsign(oldState => [...oldState, {id: serial, courseId: courId, studentId: studId}])
  }

  return (
    <div className="App">
      <h1>Technical Test</h1>
      <h2>Seleccione la opción que desea realizar...</h2>
      <button type="button" onClick={() => setter(1)}>CRUD Estudiantes</button>
      <button type="button" onClick={() => setter(2)}>CRUD Profesores</button>
      <button type="button" onClick={() => setter(3)}>CRUD Cursos</button>
      <button type="button" onClick={() => setter(4)}>Crear Asignacion</button>
      {selectedOpt === 1 ? 
        <div>
          <h1>Estudiantes</h1>
          <div>
            <h2>Listado de estudiantes</h2>
            <ul>
              {students.map((stud, index) => {
                return(
                  <li id={`stud-${index}`}>{`ID: ${stud.id}, Nombre: ${stud.name}, Teléfono: ${stud.phone}, Correo: ${stud.email}`}</li>
                )
              })}
            </ul>
            <button type="button" onClick={() => subsetter(1)}>Crear estudiante</button>
            <button type="button" onClick={() => subsetter(2)}>Buscar estudiante</button>
            <button type="button" onClick={() => subsetter(3)}>Actualizar estudiante</button>
            <button type="button" onClick={() => subsetter(4)}>Eliminar estudiante</button>
            {subopt === 1 ? 
              <div>
                <h2>Crear estudiante</h2>
                <input id="stud-id" type="input" placeholder="ID del estudiante"></input>
                <input id="stud-name" type="input" placeholder="Nombre del estudiante"></input>
                <input id="stud-phone" type="input" placeholder="Telefono del estudiante"></input>
                <input id="stud-email" type="input" placeholder="Correo del estudainte"></input>
                <button type="button" onClick={() => create()}>Crear</button>
              </div>
              :
              null
            }
            {subopt === 2 ? 
              <div>
                <h2>Buscar estudiante</h2>
                <input id="stud-id" type="input" placeholder="ID del estudiante"></input>
                <button type="button" onClick={() => search()}>Buscar</button>
              </div>
              :
              null
            }
            {subopt === 3 ? 
              <div>
                <h2>Actualizar estudiante</h2>
                <input id="stud-id" type="input" placeholder="ID del estudiante"></input>
                <input id="stud-name" type="input" placeholder="Nombre del estudiante"></input>
                <input id="stud-phone" type="input" placeholder="Telefono del estudiante"></input>
                <input id="stud-email" type="input" placeholder="Correo del estudainte"></input>
                <button type="button">Actualizar</button>
              </div>
              :
              null
            }
            {subopt === 4 ? 
              <div>
                <h2>Eliminar estudiante</h2>
                <input id="stud-id" type="input" placeholder="ID del estudiante"></input>
                <button type="button">Eliminar</button>
              </div>
              :
              null
            }
          </div>
        </div>
        :
        null
      }
      {selectedOpt === 2 ? 
        <div>
          <h1>Profesores</h1>
          <div>
            <h2>Listado de Profesores</h2>
            <ul>
              {professors.map((prof, index) => {
                return(
                  <li id={`prof-${index}`}>{`ID: ${prof.id}, Nombre: ${prof.name}, Teléfono: ${prof.phone}, Correo: ${prof.email}`}</li>
                )
              })}
            </ul>
            <button type="button" onClick={() => subsetter(1)}>Crear profesor</button>
            <button type="button" onClick={() => subsetter(2)}>Buscar profesor</button>
            <button type="button" onClick={() => subsetter(3)}>Actualizar profesor</button>
            <button type="button" onClick={() => subsetter(4)}>Eliminar profesor</button>
            {subopt === 1 ? 
              <div>
                <h2>Crear profesor</h2>
                <input id="prof-id" type="input" placeholder="ID del Profesor"></input>
                <input id="prof-name" type="input" placeholder="Nombre del Profesor"></input>
                <input id="prof-phone" type="input" placeholder="Telefono del Profesor"></input>
                <input id="prof-email" type="input" placeholder="Correo del Profesor"></input>
                <button type="button" onClick={() => create()}>Crear</button>
              </div>
              :
              null
            }
            {subopt === 2 ? 
              <div>
                <h2>Buscar profesor</h2>
                <input id="prof-id" type="input" placeholder="ID del Profesor"></input>
                <button type="button" onClick={() => search()}>Buscar</button>
              </div>
              :
              null
            }
            {subopt === 3 ? 
              <div>
                <h2>Actualizar profesor</h2>
                <input id="prof-id" type="input" placeholder="ID del Profesor"></input>
                <input id="prof-name" type="input" placeholder="Nombre del Profesor"></input>
                <input id="prof-phone" type="input" placeholder="Telefono del Profesor"></input>
                <input id="prof-email" type="input" placeholder="Correo del Profesor"></input>
                <button type="button">Actualizar</button>
              </div>
              :
              null
            }
            {subopt === 4 ? 
              <div>
                <h2>Eliminar profesor</h2>
                <input id="prof-id" type="input" placeholder="ID del Profesor"></input>
                <button type="button">Eliminar</button>
              </div>
              :
              null
            }
          </div>
        </div>
        :
        null
      }
      {selectedOpt === 3 ? 
        <div>
          <h1>Cursos</h1>
          <div>
            <h2>Listado de cursos</h2>
            <ul>
              {courses.map((cour, index) => {
                return(
                  <li id={`cour-${index}`}>{`ID: ${cour.id}, Nombre: ${cour.name}, Créditos: ${cour.cred}, Horario: ${cour.hour}, ID de Profesor: ${cour.profId}, Fecha de Creación: ${cour.creationDate}`}</li>
                )
              })}
            </ul>
            <button type="button" onClick={() => subsetter(1)}>Crear curso</button>
            <button type="button" onClick={() => subsetter(2)}>Buscar curso</button>
            <button type="button" onClick={() => subsetter(3)}>Actualizar curso</button>
            <button type="button" onClick={() => subsetter(4)}>Eliminar curso</button>
            {subopt === 1 ? 
              <div>
                <h2>Crear curso</h2>
                <input id="cour-id" type="input" placeholder="ID del curso"></input>
                <input id="cour-name" type="input" placeholder="Nombre del curso"></input>
                <input id="cour-cred" type="input" placeholder="Créditos del curso"></input>
                <input id="cour-hour" type="input" placeholder="Horario del curso"></input>
                <input id="cour-prof" type="input" placeholder="ID del Profesor"></input>
                <input id="cour-date" type="input" placeholder="Fecha de creaciòn"></input>
                <button type="button" onClick={() => create()}>Crear</button>
              </div>
              :
              null
            }
            {subopt === 2 ? 
              <div>
                <h2>Buscar curso</h2>
                <input id="cour-id" type="input" placeholder="ID del curso"></input>
                <button type="button" onClick={() => search()}>Buscar</button>
              </div>
              :
              null
            }
            {subopt === 3 ? 
              <div>
                <h2>Actualizar curso</h2>
                <input id="cour-id" type="input" placeholder="ID del curso"></input>
                <input id="cour-name" type="input" placeholder="Nombre del curso"></input>
                <input id="cour-name" type="input" placeholder="Créditos del curso"></input>
                <input id="cour-name" type="input" placeholder="Horario del curso"></input>
                <input id="cour-name" type="input" placeholder="ID del Profesor"></input>
                <input id="cour-name" type="input" placeholder="Fecha de creaciòn"></input>
                <button type="button">Actualizar</button>
              </div>
              :
              null
            }
            {subopt === 4 ? 
              <div>
                <h2>Eliminar curso</h2>
                <input id="cour-id" type="input" placeholder="ID del curso"></input>
                <button type="button">Eliminar</button>
              </div>
              :
              null
            }
          </div>
        </div>
        :
        null
      }
      {selectedOpt === 4 ? 
        <div>
          <h1>Asignaciones</h1>
          <div>
            <h2>Listado de asignaciones</h2>
            <ul>
              {asign.map((asig, index) => {
                return(
                  <li id={`asign-${index}`}>{`ID: ${asig.id}, ID del curso: ${asig.courseId}, ID del estudiante: ${asig.studentId}`}</li>
                )
              })}
            </ul>
            <button type="button" onClick={() => subsetter(1)}>Crear Asignacion</button>
            {subopt === 1 ? 
              <div>
                <h2>Crear asignacion</h2>
                <input id="asign-id" type="input" placeholder="ID"></input>
                <input id="asign-cour" type="input" placeholder="ID del curso"></input>
                <input id="asign-stud" type="input" placeholder="ID del estudiante"></input>
                <button type="button" onClick={() => createAssignment()}>Crear</button>
              </div>
              :
              null
            }
          </div>
        </div>
        :
        null
      }
      {
        searchRes !== "" ?
        <div>
          <h2>Resultados de busqueda</h2>
          <h3>{searchRes}</h3>
        </div>
        :
        null
      }
    </div>
  );
}

export default App;
