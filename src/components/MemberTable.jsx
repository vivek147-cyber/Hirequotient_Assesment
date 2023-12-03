import MemberTile from "./MemberTile";
import "./MemberTable.css";

function MemberTable({
  members,
  filterValue,
  currentPage,
  itemsPerPage,
  selectedMembers,
  bulkSelectMembers,
  onDelete,
  onSelect,
  onUnselect,
}) {
  const filteredMembers = members.filter((member) =>
    Object.keys(member).some((key) => member[key].includes(filterValue))
  );

  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = currentPage * itemsPerPage;

  return (
    <div className="table">
      <div className="title-row">
        <input type="checkbox" onClick={(e) => bulkSelectMembers(e.target.checked)} />
        <p>Name</p>
        <p>Email</p>
        <p>Role</p>
        <p>Actions</p>
      </div>
      {filteredMembers.slice(startIndex, endIndex).map((member, index) => (
        <MemberTile
          data={member}
          key={index}
          selected={selectedMembers.includes(member.id)}
          onDelete={() => onDelete(index)}
          onSelect={() => onSelect(member.id)}
          onUnselect={() => onUnselect(member.id)}
        />
      ))}
    </div>
  );
}

export default MemberTable;
