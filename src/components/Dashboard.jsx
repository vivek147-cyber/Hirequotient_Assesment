import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MemberTable from "./MemberTable";
import Pagination from "./Pagination";
import fetchMembers from "../api.js";

import "./Dashboard.css";

function Dashboard() {
  const [members, setMembers] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchMembers().then((data) => setMembers(data));
  }, []);

  const deleteMember = (i) => setMembers((prev) => prev.filter((_, index) => index !== i));
  const selectMember = (id) => setSelectedMembers((prev) => [...prev, id]);
  const unselectMember = (id) =>
    setSelectedMembers((prev) => prev.filter((memberId) => memberId !== id));

  const bulkDeleteMembers = () => {
    setMembers((prev) => prev.filter((member) => !selectedMembers.includes(member.id)));
    setSelectedMembers([]);
  };

  const bulkSelectMembers = (val) => {
    if (val) {
      setSelectedMembers(
        members
          .map((member) => member.id)
          .slice(itemsPerPage * (currentPage - 1), currentPage * itemsPerPage)
      );
    } else {
      setSelectedMembers([]);
    }
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < Math.ceil(members.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container">
      <SearchBar
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        onBulkDelete={bulkDeleteMembers}
      />
      <MemberTable
        members={members}
        filterValue={filterValue}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        selectedMembers={selectedMembers}
        bulkSelectMembers={bulkSelectMembers}
        onDelete={deleteMember}
        onSelect={selectMember}
        onUnselect={unselectMember}
      />
      <div className="footer">
        <p>{`${selectedMembers.length} member(s) of ${members.length} selected`}</p>
        <Pagination
          totalPages={Math.ceil(members.length / itemsPerPage)}
          onPageChange={paginate}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
        />
      </div>
    </div>
  );
}

export default Dashboard;
