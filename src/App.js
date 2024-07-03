
import './App.css';
import { useCallback, useState } from 'react';

function App() {

  const [student, setStudent] = useState({ lname: "", age: "", dob: "", password: "" })
  const [data, setData] = useState(JSON.parse(localStorage.getItem("u")) || [])


  const fontSubmit = (e) => {
    console.log(e.target.name)
    setStudent({ ...student, [e.target.name]: e.target.value })
  }


  const submit = () => {
    setData([...data, student])
    localStorage.setItem("u", JSON.stringify([...data, student]));

  }
  const [search1, setSearch1] = useState("")

  const hendelsearch = useCallback((idx) => {
    if (idx) {
      return (data.filter((item) => item?.lname?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }
    return data

  }, [data])
  // const filteredData = student.filter((item) => { return (item?.userfullname?.toLocaleLowerCase() === searchValue?.toLocaleLowerCase()) });
  // console.log(filteredData);

  //include methods

  // const filteredData = data.filter((item) => { return (item?.age?.toLocaleLowerCase().includes(search1?.toLocaleLowerCase())) });
  // console.log(filteredData);
  // setData([...filteredData])




  return (
    <>

      <div className="h-[950px]  bg-cover p-2.5  flex  flex-col items-center  justify-center " style={{ backgroundImage: "url(https://i.pinimg.com/736x/b0/e8/28/b0e828d20d13d3c2b0e11250a9093288.jpg)" }}>
        <div className="flex flex-col gap-[20px]">

          <div>
            <label htmlFor='lname' className="text-xl"> Name:</label>
            <input type="text" name='lname' value={student.lname} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div>
            <label htmlFor='age' className="text-xl"> Age:</label>
            <input type="age" name='age' value={student.age} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div>
            <label htmlFor='dob' className="text-xl"> Dob:</label>
            <input type="date" name='dob' value={student.dob} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>


          <div>
            <label htmlFor='password' className="text-xl"> Password:</label>
            <input type="password" name='password' value={student.password} onChange={(e) => fontSubmit(e)} className="rounded-xl  border-blue-500  ml-2 h-12 w-44  bg-transparent" />
          </div>

          <div className="flex justify-center mt-[5%]">

            <button className="bg-transparent h-12 w-24 rounded-xl  border-blue-500  mr-[50px] mt-6 text-[15px]" onClick={submit}><b>Submit</b></button>
          </div>

        </div>




        <div className="flex justify-center mt-[5%]">



          <label htmlFor='search' className="text-xl"></label>
          <input type='search' id='search' value={search1} onChange={(e) => setSearch1(e.target.value)} className="bg-transparent h-8 w-36 rounded-xl  border-blue-500  mr-[50px]  text-[15px]" />
        </div>



        <table className='mt-[2%]'>
          <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Dob</th>
            <th>Password</th>
          </thead>
          <tbody>
            {hendelsearch(search1)?.map((item, index) => {
              return (

                <tr>
                  <td>{item.lname}</td>
                  <td>{item.age}</td>
                  <td>{item.dob}</td>
                  <td>{item.password}</td>
                </tr>

              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;
