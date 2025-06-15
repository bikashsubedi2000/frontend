import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        title: '',
        author: '',
        description: '',
        image: null,
        category: ''
    });

    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/addlistcategory/`)
            .then(res => setCategory(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            setData(items => ({
                ...items,
                image: e.target.files[0]
            }));
        } else {
            setData(items => ({
                ...items,
                [name]: value
            }));
        }
    };

    const submitHandle = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('access');
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('author', data.author);
        formData.append('image', data.image);
        formData.append('category', data.category);
        formData.append('description', data.description);

        try {
            const response = await axios.post('http://localhost:8000/addblog/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 201) {
                // toast.success('Blog added successfully!');
                navigate('/admin/addblog');
            } else {
               
                console.log(' Please try again!')
            }
        } catch (err) {
            // toast.error("Add blog failed");
            console.error("Error:", err);
        }
    };



  return (
    <>
    <div className="flex items-center justify-center p-12">
  <div className="mx-auto w-full max-w-[550px] bg-white">
    <form method="POST" encType="multipart/form-data" onSubmit={submitHandle}>
      {/* <!-- Title --> */}
      <div className="mb-5">
        <label for="title" className="mb-3 block text-base font-medium text-[#07074D]">Title</label>
        <input type="text"
        value={data.title}
        onChange={handleInput}
        
        name="title" id="title" placeholder="Blog Title"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Author --> */}
      <div className="mb-5">
        <label for="author" className="mb-3 block text-base font-medium text-[#07074D]">Author</label>
        <input type="text"
          value={data.author}
        onChange={handleInput}
        
        name="author" id="author" placeholder="Author Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Description --> */}
      <div className="mb-5">
        <label for="description" className="mb-3 block text-base font-medium text-[#07074D]">Description</label>
        <textarea name="description"
          value={data.description}
        onChange={handleInput}
        id="description" placeholder="Write your blog description"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
      </div>

      {/* <!-- Image Upload --> */}
      <div className="mb-5">
        <label for="image" className="mb-3 block text-base font-medium text-[#07074D]">Image</label>
        <input type="file" 
        
        onChange={handleInput}
        
        name="image" id="image"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Category (Select) --> */}
      <div className="mb-5">
        <label for="category" className="mb-3 block text-base font-medium text-[#07074D]">Category</label>
        <select name="category"

           value={data.category}
        onChange={handleInput}
         id="category"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
        

<option value="">choose one category</option>
{category.map((c, i) => (
    <option value={c.id} key={i}>{c.category_name}</option>
))}

          {/* <!-- <option value="1">Tech</option> --> */}
        </select>
      </div>

      {/* <!-- Submit --> */}
      <div>
        <button onSubmit={submitHandle}
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Add Blog
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default AddBlog
