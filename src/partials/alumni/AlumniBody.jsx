import { useState } from 'react';
import ashik from "../../images/ashik.jpg";
import "./Alumni.css";

const alumniData = [
  { img: {ashik}, name: 'Md. Ashikur Rahman', dept: 'CSE', batch: '20th', companyName: 'TOTO Company ', designation: 'Bekar Web Developer' },
  { img: 'img2.jpg', name: 'Nur Mohammad Arafat Khan', dept: 'Dept 2', batch: 'Batch 2', companyName: 'Company 2', designation: 'Designation 2' },
  { img: 'img3.jpg', name: 'Alumni 3', dept: 'Dept 3', batch: 'Batch 3', companyName: 'Company 3', designation: 'Designation 3' },
  { img: 'img4.jpg', name: 'Alumni 4', dept: 'Dept 4', batch: 'Batch 4', companyName: 'Company 4', designation: 'Designation 4' },
  { img: 'img5.jpg', name: 'Alumni 5', dept: 'Dept 5', batch: 'Batch 5', companyName: 'Company 5', designation: 'Designation 5' },
  { img: 'img6.jpg', name: 'Alumni 6', dept: 'Dept 6', batch: 'Batch 6', companyName: 'Company 6', designation: 'Designation 6' },
  { img: 'img7.jpg', name: 'ashik 7', dept: 'Dept 7', batch: 'Batch 7', companyName: 'Company 7', designation: 'Designation 7' },
  { img: 'img8.jpg', name: 'Alumni 8', dept: 'Dept 8', batch: 'Batch 8', companyName: 'Company 8', designation: 'Designation 8' },
  { img: 'img9.jpg', name: 'Alumni 9', dept: 'Dept 9', batch: 'Batch 9', companyName: 'Company 9', designation: 'Designation 9' },
  { img: 'img10.jpg', name: 'Alumni 10', dept: 'Dept 10', batch: 'Batch 10', companyName: 'Company 10', designation: 'Designation 10' },
  { img: 'img11.jpg', name: 'Alumni 11', dept: 'Dept 11', batch: 'Batch 11', companyName: 'Company 11', designation: 'Designation 11' },
  { img: 'img12.jpg', name: 'Alumni 12', dept: 'Dept 12', batch: 'Batch 12', companyName: 'Company 12', designation: 'Designation 12' },
  { img: 'img13.jpg', name: 'Alumni 13', dept: 'Dept 13', batch: 'Batch 13', companyName: 'Company 13', designation: 'Designation 13' },
  { img: 'img14.jpg', name: 'Alumni 14', dept: 'Dept 14', batch: 'Batch 14', companyName: 'Company 14', designation: 'Designation 14' },
  { img: 'img15.jpg', name: 'Alumni 15', dept: 'Dept 15', batch: 'Batch 15', companyName: 'Company 15', designation: 'Designation 15' },
  { img: 'img16.jpg', name: 'Alumni 16', dept: 'Dept 16', batch: 'Batch 16', companyName: 'Company 16', designation: 'Designation 16' },
  { img: 'img17.jpg', name: 'Alumni 17', dept: 'Dept 17', batch: 'Batch 17', companyName: 'Company 17', designation: 'Designation 17' },
];

const AlumniBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const alumniPerPage = 9;

  const filteredAlumni = alumniData.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.batch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.companyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastAlumni = currentPage * alumniPerPage;
  const indexOfFirstAlumni = indexOfLastAlumni - alumniPerPage;
  const currentAlumni = filteredAlumni.slice(indexOfFirstAlumni, indexOfLastAlumni);

  const totalPages = Math.ceil(filteredAlumni.length / alumniPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push(currentPage - 1);
        pageNumbers.push(currentPage);
        pageNumbers.push(currentPage + 1);
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }
    return pageNumbers;
  };

  return (
    <div className="lg:mx-20 mx-5 py-8">
      <h1 className="text-2xl font-bold mb-4 text-white text-center">Our Alumni</h1>
      <input
        type="text"
        placeholder="Search by name, batch, or company"
        className="w-full p-2 border border-gray-300 outline-primary rounded mb-4"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <hr className='my-6 h-1' />
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {currentAlumni.map((alumni, index) => (
          <div key={index} className="alumni-card p-2 grid grid-cols-5  items-center gap-5 text-center rounded-md">
           <div className='w-36 h-36 col-span-2 flex justify-center items-center overflow-hidden rounded-full'>
           <img src={ashik} alt={alumni.name} className="w-full h-auto" />
           </div>
           <div className='text-white text-left col-span-3'>
           <p className=" font-bold">{alumni.name}</p>
            <p className="text-primary">{alumni.dept} {alumni.batch} Batch</p>
            <p className="text-gray-400">{alumni.companyName}</p>
            <p className="text-gray-400 text-sm">{alumni.designation}</p>
           </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'text-white bg-gray-500'}`}
        >
          Prev
        </button>
        {getPageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === 'number' && paginate(number)}
            className={`px-3 py-1 mx-1 ${currentPage === number ? 'bg-primary text-white' : ' text-third'}`}
            disabled={number === '...'}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 mx-1 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-500 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AlumniBody;
