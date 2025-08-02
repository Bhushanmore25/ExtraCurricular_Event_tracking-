import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
const ViewStudents = () => {
    const goback=()=>{
        window.history.back();
    }
  return (
    <>
      <div className="h-[91vh]">
        <div className="text-4xl p-6 cursor-pointer" onClick={goback}> 
      <IoMdArrowBack /> 
      </div>
        <h3 className=" text-6xl mt-16 font-sans font-bold px-10">
          Event Name
        </h3>
        <div className="w-[70vw] mx-auto bg-white shadow-2xl rounded-lg overflow-hidden mt-16">
          <div className="p-4 bg-indigo-600 text-white text-center font-semibold text-lg">
            Participation Students
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Sr No.
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Student Email
                  </th>
                  
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-50 text-left text-xs w-36 font-semibold text-gray-600 uppercase tracking-wider">
                    Delete Participant
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">1</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Student 1
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      student1@gmail.com
                    </p>
                  </td>
                  
                  <td
                    className="px-2 py-2 border-b w-36 border-gray-200 bg-white text-2xl text-center cursor-pointer"
                  >
                    <MdDeleteForever />
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">2</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Student 2
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      student2@gmail.com
                    </p>
                  </td>

                  
                  <td
                    className="px-2 py-2 border-b w-36 border-gray-200 bg-white text-2xl text-center cursor-pointer"
                  >
                    <MdDeleteForever />
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">3</p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      Student 3
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      student3@gmail.com
                    </p>
                  </td>
                  
                  <td
                    className="px-2 py-2 border-b w-36 border-gray-200 bg-white text-2xl text-center cursor-pointer"
                  >
                    <MdDeleteForever />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStudents;
