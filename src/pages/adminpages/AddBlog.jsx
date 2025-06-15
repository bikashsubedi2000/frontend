import React from 'react'

const AddBlog = () => {
  return (
    <>
    <div class="flex items-center justify-center p-12">
  <div class="mx-auto w-full max-w-[550px] bg-white">
    <form method="POST" enctype="multipart/form-data">
      {/* <!-- Title --> */}
      <div class="mb-5">
        <label for="title" class="mb-3 block text-base font-medium text-[#07074D]">Title</label>
        <input type="text" name="title" id="title" placeholder="Blog Title"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Author --> */}
      <div class="mb-5">
        <label for="author" class="mb-3 block text-base font-medium text-[#07074D]">Author</label>
        <input type="text" name="author" id="author" placeholder="Author Name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Description --> */}
      <div class="mb-5">
        <label for="description" class="mb-3 block text-base font-medium text-[#07074D]">Description</label>
        <textarea name="description" id="description" placeholder="Write your blog description"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"></textarea>
      </div>

      {/* <!-- Image Upload --> */}
      <div class="mb-5">
        <label for="image" class="mb-3 block text-base font-medium text-[#07074D]">Image</label>
        <input type="file" name="image" id="image"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
      </div>

      {/* <!-- Category (Select) --> */}
      <div class="mb-5">
        <label for="category" class="mb-3 block text-base font-medium text-[#07074D]">Category</label>
        <select name="category" id="category"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
          <option value="">Select Category</option>
          {/* <!-- <option value="1">Tech</option> --> */}
        </select>
      </div>

      {/* <!-- Submit --> */}
      <div>
        <button
          class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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
