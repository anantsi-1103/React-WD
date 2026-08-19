import { useForm } from "react-hook-form"
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()


  async function dataSubmit(data) {
    await new Promise((resolve)=> setTimeout(resolve,3000))
    console.log(data)
  }

  return (
    <form onSubmit={(handleSubmit(dataSubmit))}>
      <div>
        <label>First Name </label>
        <input
          className={errors.firstName ? "inp-error" : ""}
          {...register("firstName", {
            required: true,
            maxLength: 20,
            minLength: { value: 3, message: "Min length must be 3" }
          })} />
        {errors.firstName && <p className="error-display">{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label>Last Name </label>
        <input type="text" {...register("lastName")} />
      </div>

      <input type="submit" disabled= {isSubmitting}
      value={isSubmitting? "Submitting" : "Submit"} />
    </form>
  )
}

export default App
