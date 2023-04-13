
// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors


// Find all the topics and tasks which are thought in the month of October
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
// Find all the company drives and students who are appeared for the placement.
// Find the number of problems solved by the user in codekata
// Find all the mentors with who has the mentee's count more than 15
// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

//create a database

db.createCollection("zenclass")


db.zenclass.insertMany([
    {
        "user" : "Vishnupriya",
        "codekata" : 235,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-10>"),
        "tasks" : "movie_app",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Karthik",
        "codekata" : 200,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "mongo_commands",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Eswar",
        "codekata" : 175,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "create_api",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Chandrasekar",
        "codekata" : 150,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    },    
    {
        "user" : "Baskar",
        "codekata" : 250,
        "attendance" : "Present",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-14>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    }, 
    {
        "user" : "Anbu",
        "codekata" : 93,
        "attendance" : "Absent",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-23>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Not_appeared",
        "mentors" : "Rupan"
    },    
    {
        "user" : "Sangeetha",
        "codekata" : 180,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "movie_app",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Malathy",
        "codekata" : 125,
        "attendance" : "Present",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    },    
    {
        "user" : "Suresh",
        "codekata" : 155,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "create_api",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Sundar",
        "codekata" : 55,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-19>"),
        "tasks" : "mongo_commands",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Priya",
        "codekata" : 68,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "movie_app",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Not_appeared",
        "mentors" : "Raghav"
    }, 
    {
        "user" : "Sarika",
        "codekata" : 250,
        "attendance" : "Absent",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-23>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Rupan"
    },   
     {
        "user" : "Lasika",
        "codekata" : 95,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Not_appeared",
        "mentors" : "Magesh"
    },
    {
        "user" : "Sumithra",
        "codekata" : 200,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "create_api",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Dishith",
        "codekata" : 175,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-20>"),
        "tasks" : "mongo_commands",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Varsha",
        "codekata" : 105,
        "attendance" : "Absent",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-22>"),
        "tasks" : "movie_app",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Aswin",
        "codekata" : 265,
        "attendance" : "Present",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-11>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    }, 
    {
        "user" : "Brijesh",
        "codekata" : 300,
        "attendance" : "Present",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-29>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Rupan"
    },    {
        "user" : "Dharshini",
        "codekata" : 30,
        "attendance" : "Absent",
        "topics" : "CSS",
        "topic_date" : new Date("<2020-10-12>"),
        "task_date" : new Date("<2020-10-16>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "HCL",
        "company_drives_date" : new Date("<2020-10-20>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    },
    {
        "user" : "Bhuvana",
        "codekata" : 177,
        "attendance" : "Present",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-17>"),
        "tasks" : "mongo_commands",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Not_appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Sivaranjini",
        "codekata" : 133,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-11>"),
        "tasks" : "movie_app",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Vatchala",
        "codekata" : 222,
        "attendance" : "Absent",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-22>"),
        "tasks" : "create_api",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },    
    {
        "user" : "Anu",
        "codekata" : 50,
        "attendance" : "Absent",
        "topics" : "HTML",
        "topic_date" : new Date("<2020-10-07>"),
        "task_date" : new Date("<2020-10-09>"),
        "tasks" : "responsive_web_design",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Magesh"
    }, 
    {
        "user" : "Ishu",
        "codekata" : 350,
        "attendance" : "Present",
        "topics" : "Node_js",
        "topic_date" : new Date("<2020-10-20>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "create_api",
        "company_drives" : "ZOHO",
        "company_drives_date" : new Date("<2020-10-28>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Aarthi",
        "codekata" : 88,
        "attendance" : "Present",
        "topics" : "React",
        "topic_date" : new Date("<2020-10-05>"),
        "task_date" : new Date("<2020-10-15>"),
        "tasks" : "movie_app",
        "company_drives" : "WIPRO",
        "company_drives_date" : new Date("<2020-10-22>"),
        "placement": "Not_appeared",
        "mentors" : "Raghav"
    },
    {
        "user" : "Keerthana",
        "codekata" : 189,
        "attendance" : "Present",
        "topics" : "JavaScript",
        "topic_date" : new Date("<2020-10-19>"),
        "task_date" : new Date("<2020-10-25>"),
        "tasks" : "functions",
        "company_drives" : "Cognizant",
        "company_drives_date" : new Date("<2020-10-31>"),
        "placement": "Appeared",
        "mentors" : "Rupan"
    },
    {
        "user" : "Vignesh",
        "codekata" : 159,
        "attendance" : "Absent",
        "topics" : "MongoDB",
        "topic_date" : new Date("<2020-10-15>"),
        "task_date" : new Date("<2020-10-21>"),
        "tasks" : "mongo_commands",
        "company_drives" : "TCS",
        "company_drives_date" : new Date("<2020-10-25>"),
        "placement": "Appeared",
        "mentors" : "Raghav"
    },
]);

//Find all the topics and tasks which are thought in the month of October


db.zenclass.find({$or: [{topic_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}},{task_date: {$gte : new Date("<2020-10-01>"), $lte: new Date("<2020-10-31>")}}]},{topics: 1, tasks: 1}).toArray();

// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zenclass.find({company_drives_date: {$gte : new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}},{company_drives: 1}).toArray();

// Find all the company drives and students who are appeared for the placement.
db.zenclass.find({placement: "Appeared"},{ _id: 0,user: 1, company_drives: 1}).toArray();

// Find the number of problems solved by the user in codekata
db.zenclass.find({},{_id: 0,user: 1, codekata: 1}).toArray();

// Find all the mentors with who has the mentee's count more than 15
db.zenclass.aggregate([
    {$group: {_id: "$mentors", count: {$sum: 1}}},
    {$match: {_id: {$ne: null}, count: {$gt: 15}}}
]);
db.zenclass.find({mentors: "Raghav"},{user: 1, mentors: 1});

// Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.zenclass.find({$or: [{attendance: "Absent"}, {task_date: {$not: {$gte: new Date("<2020-10-15>"), $lte: new Date("<2020-10-31>")}}}]});
