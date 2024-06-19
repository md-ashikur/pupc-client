import { useState } from 'react';

const notices = [
  { date: '2024-06-22', title: 'Notice 1', details: 'Details of Notice 1' },
  { date: '2024-06-21', title: 'Notice 2', details: 'Details of Notice 2' },
  { date: '2024-06-20', title: 'Notice 3', details: 'Details of Notice 3' },
  { date: '2024-06-19', title: 'Notice 4', details: 'Details of Notice 4' },
  { date: '2024-06-18', title: 'Notice 5', details: 'Details of Notice 5' },
  { date: '2024-06-17', title: 'Notice 6', details: 'Details of Notice 6' },
  { date: '2024-06-16', title: 'Notice 7', details: 'Details of Notice 7' },
  { date: '2024-06-15', title: 'Notice 8', details: 'Details of Notice 8' },
  { date: '2024-06-14', title: 'Notice 9', details: 'Details of Notice 9' },
  { date: '2024-06-13', title: 'Notice 10', details: 'Details of Notice 10' },
  { date: '2024-06-12', title: 'Notice 11', details: 'Details of Notice 11' },
  { date: '2024-06-11', title: 'Notice 12', details: 'Details of Notice 12' },
  { date: '2024-06-10', title: 'Notice 13', details: 'Details of Notice 13' },
  { date: '2024-06-09', title: 'Notice 14', details: 'Details of Notice 14' },
  { date: '2024-06-08', title: 'Notice 15', details: 'Details of Notice 15' },
  { date: '2024-06-07', title: 'Notice 16', details: 'Details of Notice 16' },
  { date: '2024-06-06', title: 'Notice 17', details: 'Details of Notice 17' },
];

const NoticeBody = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 2;

  // Get current notices
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(notices.length / noticesPerPage);

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
    <div className=" lg:mx-20 mx-5 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center ">All Notices</h1>
      <hr className='my-6 bg-primary-500 h-1' />
      <div className="space-y-4">
        {currentNotices.map((notice, index) => {
          const date = new Date(notice.date);
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'long' });
          const year = date.getFullYear();

          return (
            <div key={index} className="flex justify-between items-center p-4 bg-white shadow rounded-md">
              <div className="text-gray-500">
                <div>{day} {month} {year}</div>
              </div>
              <div className="text-lg font-semibold">{notice.title}</div>
              <button className="bg-primary-500 text-white px-4 py-2 rounded-md">View Details</button>
            </div>
          );
        })}
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

export default NoticeBody;
