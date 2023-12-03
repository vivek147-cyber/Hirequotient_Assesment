const fetchMembers = async () => {
  const url = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const response = await fetch(url);
  const membersData = await response.json();
  return membersData;
};

export default fetchMembers;
