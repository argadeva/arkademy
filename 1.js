//Fungsi
function bioData(myName, myAge) {
    let data = {
        name: myName,
        age: myAge,
        address: "Jepara, Jawa Tengah",
        hobbies: ['Swimming', 'Cycling', 'Jogging'],
        is_married: false,
        list_school: [
            { "name":"SD NEGERI LANGON 1 JEPARA", "year_in": 2001, "year_out": 2007, "major":"Elementary School" },
            { "name":"SMP NEGERI 6 JEPARA", "year_in": 2007, "year_out": 2010, "major":"Junior High School" },
            { "name":"SMK ISLAM JEPARA", "year_in": 2010, "year_out": 2013, "major":"Senior High School" },
        ],
        skills: [
            { "skill_name":"HTML", "level":"EXPERT" },
            { "skill_name":"PHP", "level":"ADVANCE" },
            { "skill_name":"CSS", "level":"ADVANCE" },
            { "skill_name":"BOOTSTRAP", "level":"ADVANCE" },
            { "skill_name":"JAVASCRIPT", "level":"BEGINNER" },
            { "skill_name":"NODE JS", "level":"BEGINNER" },
            { "skill_name":"REACT JS", "level":"BEGINNER" },
            { "skill_name":"MONGO DB", "level":"BEGINNER" },
            { "skill_name":"FLUTTER", "level":"BEGINNER" },
        ],
        interest_in_coding: true
    }
    console.log(data);  
}

bioData("Alam Raga Deva", 24);
