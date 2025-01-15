// 1-topshiriq

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState('');
//   const [category, setCategory] = useState('ish');
//   const [data, setData] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('barchasi');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (todo.length < 3) {
//       alert('Mashulot eng kamida 3 ta belgidan iborat bo‘lishi kerak');
//       return;
//     }
//     let user = {
//       id: Date.now(),
//       todo: todo,
//       category: category
//     };
//     const copied = [...data];
//     copied.push(user);
//     setData(copied);
//     setTodo('');
//     setCategory('ish');
//   }

//   function handelDelete(id) {
//     const updatedDelete = data.filter((item) => item.id !== id);
//     setData(updatedDelete);
//   }

//   function filterByCategory(category) {
//     setSelectedCategory(category);
//   }

//   const filteredData = selectedCategory === 'barchasi'
//     ? data
//     : data.filter((item) => item.category === selectedCategory);

//   return (
//     <div>
//       <form className="form">
//         <input
//           type="text"
//           placeholder="Mashulotni kiriting"
//           className="custom-input"
//           value={todo}
//           onChange={(e) => setTodo(e.target.value)}
//         />
       
//         <button className="custom-btn-success" type="submit" onClick={handleSubmit}>Kiritish</button>
//       </form>
//       {filteredData.length > 0 &&
//         filteredData.map((item) => (
//           <div key={item.id} className='natija'>
//             <ul>
//               <li>{item.todo} - {item.category}</li>
//               <button onClick={() => handelDelete(item.id)} className='custom-btn-success'>O'chirish</button>
//             </ul>
//           </div>
//         ))
//       }
//     </div>
//   );
// }

// export default App;

// 2-topshiriq
// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [isActive, setIsActive] = useState(false);
//   const [data, setData] = useState([]);
//   const[Active, setActive] = useState([])
  

//   function handleSubmit(e) {
//     e.preventDefault();

//     const user = {
//       name: name,
//       lastname: lastname,
//       age: age,
//       email: email,
//       isActive: isActive,
//     };

//     console.log(user);
    
//     const copied = [...data];
//     copied.push(user);
//     setData(copied);

//     setName('');
//     setLastName('');
//     setAge('');
//     setEmail('');
//     setIsActive(false);
//   }

//   function handleFaol(e){
//     e.preventDefault();
//     let copied = [...data];
//     let active = [];
//     active = copied.filter(item => item.isActive === true);
//     setData(active)
//   }

//   function handleFaolEmas(e){
//     e.preventDefault();
//     let copied = [...data];
//     let active = [];
//     active = copied.filter(item => item.isActive === false);
//     setData(active)
//   }
  
//   return (
//     <div>
//       <form className="form-task2" onSubmit={handleSubmit}>
//         <div className="name">
//           <input
//             type="text"
//             placeholder="Ismingizni kiriting"
//             className="custom-input"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="lastname">
//           <input
//             type="text"
//             placeholder="Familiyangizni kiriting"
//             className="custom-input"
//             value={lastname}
//             onChange={(e) => setLastName(e.target.value)}
//           />
//         </div>
//         <div className="age">
//           <input
//             type="number"
//             placeholder="Yoshingizni kiriting"
//             className="custom-input"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//         <div className="email">
//           <input
//             type="email"
//             placeholder="Emailingizni kiriting"
//             className="custom-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="checkbox">
//           <label>
//             <input
//               type="checkbox"
//               className="custom-checkbox"
//               checked={isActive}
//               onChange={(e) => setIsActive(e.target.checked)}
//             />
//             <span className="checkbox-label">Faol</span>
//           </label>
//         </div>
//         <div className="button">
//           <button className="custom-btn-success">Qo'shish</button>
//         </div>
//       </form>
//           <button className="custom-btn-success" onClick={handleFaol}>Faol</button>
//           <button className="custom-btn-success" onClick={handleFaolEmas}>FaolEmas</button>
//       {data.length > 0 && (
//         <div className="user-list">
//           {data.map((item, index) => (
//             <div key={index} className="user-item">
//               <h3>Ism: {item.name}</h3>
//               <h3>Familiya: {item.lastname}</h3>
//               <h3>Yosh: {item.age}</h3>
//               <h3>Email: {item.email}</h3>
//               <h3>Faol: {item.isActive ? 'Ha' : 'Yo\'q'}</h3>
//             </div>
//           ))}
//           <hr />
//           <h2>Faol</h2>
//           {Active.length > 0 && Active.map((item,index)=>{
//             return <div key={index}>
//               <h3>{item.name}</h3>
//               <h3>{item.lastname}</h3>
//               <h3>{item.email}</h3>
//               <h3>{item.age}</h3>

//             </div>
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// 3-topshiriq

import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('elektronika');
  const [products, setProducts] = useState([]);

  function validate() {
    if (!name || !price || !amount) {
      alert("Barcha maydonlarni to'ldiring!");
      return false;
    }
    if (price <= 0 || amount <= 0) {
      alert("Narx va miqdor musbat bo'lishi kerak!");
      return false;
    }
    return true;
  }

  function handleSave(e) {
    e.preventDefault();

    const isValid = validate();
    if (!isValid) {
      return;
    }

    const user = {
      id: Date.now(),
      name,
      price,
      amount,
      type,
    };

    setProducts([...products, user]);

    setName('');
    setPrice('');
    setAmount('');
    setType('elektronika');
  }

  function hadleDelete(index) {
    const filteredProducts = products.filter((_, i) => i !== index);
    setProducts(filteredProducts);
  }

  return (
    <div>
      <form className='form'>
        <input
          type="text"
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder='Enter price'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder='Enter amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>elektronika</option>
          <option>kiyim</option>
          <option>ovqat</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th>No</th>
            <th>Nomi</th>
            <th>Narxi</th>
            <th>Miqdori</th>
            <th>Turi</th>
            <th>Amallar</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 &&
            products.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{item.type}</td>
                <td>
                  <button onClick={() => hadleDelete(index)}>delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


