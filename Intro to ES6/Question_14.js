
const profile = {
    name : "John Doe",
    age : 30,
    address : {
        city : "New York",
        street : "5th Avenue",
        zip : "10001"
    }
}

const updates = {
    age : 31,
    address : {
        street : "6th Avenue",
        zip : "10002"
    }
};


const merged = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};

console.log(merged);
