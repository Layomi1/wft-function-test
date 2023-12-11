// ?write a  function that ley persons to be inited to a party. The first three  should be family members the remaining seven should chosen at random


const persons = [
     {
        "name": "Hope",
       "age": "19",
       "gender" : 'female',
       "id":"friend"
    },
     {
        "name": "Gib",
       'age': "29",
       "gender" : 'male',
       "id":"co-worker"
    },
    {
        "name": "James",
       'age': "27",
       "gender" : 'male',
       "id":"buddy"
    },
     {
        "name": "Glory",
       'age': "15",
       "gender" : 'female',
       "id":"buddy"
    },
     {
        "name": "Anonymous",
       'age': "22",
       "gender" : 'male',
       "id":"family"
    },
     {
        "name": "Tade",
       'age': "20",
       "gender" : 'male',
       "id":"friend"
    },
     {
        "name": "Dapo",
       'age': "35",
       "gender" : 'male',
       "id":"family"
    },
     {
        "name": "Cynthia",
       'age': "40",
       "gender" : 'female',
       "id":"co-worker"
    },
     {
        "name": "Annah",
       'age': "30",
       "gender" : 'female',
       "id":"friend"
    },
    {
        "name": "John",
       'age': "28",
       "gender" : 'male',
       "id":"family"
    }
]



function randomGuest(){
    let personIndex= persons[(Math.floor(Math.random()* persons.length))];
    return personIndex;
}
randomGuest();