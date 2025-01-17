import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [category, setCategory] = useState('ish');
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('barchasi');

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.length < 3) {
      alert('Mashulot eng kamida 3 ta belgidan iborat bo‘lishi kerak');
      return;
    }
    const user = {
      id: Date.now(),
      todo,
      category,
    };
    setData([...data, user]);
    setTodo('');
    setCategory('ish');
  }

  function handleDelete(id) {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  }

  function filterByCategory(category) {
    setSelectedCategory(category);
  }

  const filteredData = selectedCategory === 'barchasi'
    ? data
    : data.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    console.log(`Yangi vazifalar soni: ${data.length}`);
  }, [data.length]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Vazifa nomi"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="ish">Ish</option>
          <option value="o‘qish">O‘qish</option>
          <option value="shaxsiy">Shaxsiy</option>
        </select>
        <button type="submit">Kiritish</button>
      </form>
      <div>
        <button onClick={() => filterByCategory('barchasi')}>Barchasi</button>
        <button onClick={() => filterByCategory('ish')}>Ish</button>
        <button onClick={() => filterByCategory('o‘qish')}>O‘qish</button>
        <button onClick={() => filterByCategory('shaxsiy')}>Shaxsiy</button>
      </div>
      <div>
        {filteredData.map((item) => (
          <div key={item.id}>
            <span>{item.todo} - {item.category}</span>
            <button onClick={() => handleDelete(item.id)}>O'chirish</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// 2-topshiriq
// import React, { useState, useEffect } from "react";
// import "./App.css";

// function App() {
//   const [name, setName] = useState("");
//   const [lastname, setLastName] = useState("");
//   const [age, setAge] = useState("");
//   const [email, setEmail] = useState("");
//   const [isActive, setIsActive] = useState(false);
//   const [data, setData] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const user = { name, lastname, age, email, isActive };
//     setData([...data, user]);
//     setName("");
//     setLastName("");
//     setAge("");
//     setEmail("");
//     setIsActive(false);
//   }

//   function filterActive() {
//     return data.filter((user) => user.isActive);
//   }

//   useEffect(() => {
//     localStorage.setItem("users", JSON.stringify(data));
//     console.log(`Foydalanuvchilar soni: ${data.length}`);
//   }, [data]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Ism" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="text" placeholder="Familiya" value={lastname} onChange={(e) => setLastName(e.target.value)} />
//         <input type="number" placeholder="Yosh" value={age} onChange={(e) => setAge(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <label>
//           <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
//           Faol
//         </label>
//         <button type="submit">Qo'shish</button>
//       </form>
//       <h2>Barcha foydalanuvchilar</h2>
//       {data.map((user, index) => (
//         <div key={index}>
//           <p>{user.name} {user.lastname} - {user.isActive ? "Faol" : "Faol emas"}</p>
//         </div>
//       ))}
//       <h2>Faol foydalanuvchilar</h2>
//       {filterActive().map((user, index) => (
//         <div key={index}>
//           <p>{user.name} {user.lastname}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;


// 3-topshiriq

// import React, { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [amount, setAmount] = useState('');
//   const [type, setType] = useState('elektronika');
//   const [products, setProducts] = useState([]);

//   function validate() {
//     if (!name || !price || !amount) {
//       alert("Barcha maydonlarni to'ldiring!");
//       return false;
//     }
//     if (price <= 0 || amount <= 0) {
//       alert("Narx va miqdor musbat bo'lishi kerak!");
//       return false;
//     }
//     return true;
//   }

//   function handleSave(e) {
//     e.preventDefault();
//     if (!validate()) return;
//     const product = { id: Date.now(), name, price, amount, type };
//     setProducts([...products, product]);
//     setName('');
//     setPrice('');
//     setAmount('');
//     setType('elektronika');
//   }

//   function handleDelete(index) {
//     setProducts(products.filter((_, i) => i !== index));
//   }

//   useEffect(() => {
//     document.title = `Mahsulotlar: ${products.length}`;
//   }, [products]);

//   return (
//     <div>
//       <form onSubmit={handleSave}>
//         <input type="text" placeholder="Nomi" value={name} onChange={(e) => setName(e.target.value)} />
//         <input type="number" placeholder="Narxi" value={price} onChange={(e) => setPrice(e.target.value)} />
//         <input type="number" placeholder="Miqdori" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         <select value={type} onChange={(e) => setType(e.target.value)}>
//           <option value="elektronika">Elektronika</option>
//           <option value="kiyim">Kiyim</option>
//           <option value="ovqat">Ovqat</option>
//         </select>
//         <button type="submit">Qo'shish</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>No</th>
//             <th>Nomi</th>
//             <th>Narxi</th>
//             <th>Miqdori</th>
//             <th>Turi</th>
//             <th>Amallar</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.amount}</td>
//               <td>{product.type}</td>
//               <td>
//                 <button onClick={() => handleDelete(index)}>O'chirish</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
