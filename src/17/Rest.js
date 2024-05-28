import React, { useEffect, useState } from "react";

export default function Rest() {
  const [tdata, setTdata] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3005/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setTdata(data);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      }
    };
    fetchPosts();
  }, []);

  const handleAdd = async () => {
    if (!newTitle || !newAuthor) {
      setError('제목과 작성자를 모두 입력하세요.');
      return;
    }
    const newItem = {
      id: tdata.length ? tdata[tdata.length - 1].id + 1 : 1,
      title: newTitle,
      author: newAuthor
    };
    try {
      const response = await fetch('http://localhost:3005/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      });
      if (!response.ok) {
        throw new Error('Failed to add data to DB');
      }
      setTdata(prevData => [...prevData, newItem]);
      setNewTitle('');
      setNewAuthor('');
    } catch (error) {
      setError('Error adding data to DB. Please try again later.');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3005/posts/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data from DB');
      }
      setTdata(prevData => prevData.filter(item => item.id !== id));
    } catch (error) {
      setError('Error deleting data from DB. Please try again later.');
    }
  };

  const handleEdit = (id) => {
    const editedTitle = prompt("새로운 제목을 입력하세요:");
    const editedAuthor = prompt("새로운 작성자를 입력하세요:");
    if (editedTitle !== null && editedAuthor !== null) {
      setTdata(prevData => prevData.map(item =>
        item.id === id ? { ...item, title: editedTitle, author: editedAuthor } : item
      ));
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex mb-4 space-x-2 ">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="제목"
          className="w-1/2 px-2 py-1 border"
        />
        <input
          type="text"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          placeholder="작성자"
          className="w-1/2 px-2 py-1 border"
        />
        <button 
          onClick={handleAdd} 
          className="px-8 py-2 bg-blue-500 text-white hover:bg-blue-700"
        >
          입력    
        </button>
      </div>
      <table className="w-11/12 text-left text-sm font-light text-surface">
        <thead className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3">제목</th>
            <th scope="col" className="px-6 py-3">작성자</th>
            <th scope="col" className="px-6 py-3">삭제</th>
            <th scope="col" className="px-6 py-3">편집</th>
          </tr>
        </thead>
        <tbody>
          {tdata.map(item => (
            <tr key={item.id} className="h-10 border-b border-neutral-200 hover:bg-neutral-100">
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td className="text-center">
                <button 
                  onClick={() => handleDelete(item.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  [삭제]
                </button>
              </td>
              <td className="text-center">
                <button 
                  onClick={() => handleEdit(item.id)} 
                  className="text-blue-500 hover:text-blue-700"
                >
                  [편집]
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}