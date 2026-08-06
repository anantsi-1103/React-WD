import UserCard from "./component/UserCard";
import reactPng from "./assets/react.svg"
import angularPng from "./assets/Angular.jpg"
import nextpng from "./assets/nextJS.jpg"





function App() {

  return (
    <>
    <div className="card-container">
        <UserCard name="ReactJS" desc="This is a Library of JS" image = {reactPng}/>
        <UserCard name="Angular JS" desc= "This is a Framework of JS" image={angularPng}/>
        <UserCard name= "NextJS" desc = "This is a New Adv Tech of JS" image={nextpng}/>
    </div>
    </>
       )
}

export default App


function Welcome(){
  return <h1>Welcome React!!!!</h1>;
}
