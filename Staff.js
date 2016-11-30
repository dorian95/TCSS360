/**
	A class to represent Staff
	
	@author Nursultan Irgaliyev
	@date 11/30/2016
**/

	Staff = function(userName, password, staffID, accessLevel) {
		this.userName = userName;
		this.password = password;
		this.staffID = staffID;
		this.accessLevel = accessLevel;
	}
	
	function registerUser(userName, password, staffID) {
		var newUser = new Staff();
		newUser.userName = name;
		newUser.password = password;
		newUser.staffID = staffID;
	}