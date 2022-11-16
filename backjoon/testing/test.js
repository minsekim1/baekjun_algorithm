class Friend {
  constructor(email) {
    this.email = email;
    this.friends = [];
  }

  addFriendship(friend) {
    this.friends.push(friend);
    friend.friends.push(this);
  }

  getParent(friend) {
    if (this.email == friend.email) return email;
    else return getParent(this.friends);
  }

	canBeConnected(friend) {
		return friend.friends.includes(this.email)
	}
}

const a = new Friend("A");
const b = new Friend("B");
const c = new Friend("C");
const d = new Friend("D");

a.addFriendship(b);
b.addFriendship(c);
d.addFriendship(c);

console.log(a.canBeConnected(c),a.friends,b.friends);
