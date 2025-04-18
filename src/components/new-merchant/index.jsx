import React, { useRef, useState } from 'react';
import { Paperclip } from 'lucide-react';

const NewMerchantInput = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState('');

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
  };

  return (
    <div className='container mx-auto flex flex-col gap-6 py-8 px-40'>
      <h2 className='text-3xl font-bold'>New merchant</h2>

      <div className='flex flex-col  justify-between w-[50%] h-[500px] gap-4'>
     <div className='flex flex-col gap-6'>
     <h3 className='text-xl font-bold'>Məlumat</h3>

<div className='flex gap-4 items-end'>

  
  <label className='flex flex-col gap-1 w-full'>
    <span className='text-sm text-gray-600 font-semibold'>Merchant</span>
    <input
      type="text"
      className='border rounded px-3 py-2 w-full text-sm'
      placeholder='Merchant'
      defaultValue="Khan"
    />
  </label>


  <label className='flex flex-col gap-1 w-full'>
    <span className='text-sm text-gray-600 font-semibold'>Logo</span>
    <div className='relative flex items-center'>
      <input
        type="text"
        readOnly
        value={fileName}
        onClick={handleFileClick}
        className='border rounded px-3 py-2 w-full text-sm pr-10 cursor-pointer'
        placeholder='Logo seçin'
      />
      <Paperclip
        className='absolute right-3 text-gray-500 w-4 h-4 cursor-pointer'
        onClick={handleFileClick}
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className='hidden'
        accept="image/*"
      />
    </div>
  </label>

</div>
     </div>

        <div className='flex gap-4 mt-6'>
          <button className='bg-[#2E1E1A] text-white px-6 py-2 rounded-md text-sm font-medium'>
            Save
          </button>
          <button className='bg-gray-100 text-gray-800 px-6 py-2 rounded-md text-sm font-medium'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMerchantInput;
