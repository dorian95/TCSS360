/**
		Class that represents a Job in the system.
		@
		Author: Nursultan Irgaliyev
		Date: 11/30/2016
		
**/

/** Job with fields. 
param employer
		@param salary 
		@param startDate
		@param endDate
		@param skills
		@param fullTime
		@param jobTitle
**/
	function Job (employer, salary, startDate, endDate, skills, fullTime, jobTitle) {
		this.employer = employer;
		this.salary = salary;
		this.startDate = endDate;
		this.skills = skills;
		this.fullTime = fullTime;
		this.jobTitle = jobTitle;
	}
	
	/**
		method to set endDate
		@param endDate endDate to set 
	**/
	function setEndDate (endDate) {
		this.endDate = endDate;
	}