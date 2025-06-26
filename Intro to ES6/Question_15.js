function getUserInfo(user) {
  const { id, profile } = user;
  const name = profile?.name || "Information not available";
  const city = profile?.address?.city || "Information not available";
  const zipcode = profile?.address?.zipcode || "Information not available";

  return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;
}


const user = {
  id: 123,
  profile: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zipcode: "12345"
    }
  }
};

console.log(getUserInfo(user));