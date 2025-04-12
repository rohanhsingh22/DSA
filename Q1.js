// Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents & studentName) iterate over all students and find that specific user 'studentName'.

const students = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

function solve(allStudents, studentName) {
    for ( let i = 0; i< allStudents.length; i++) {
        if ( allStudents[i] === studentName) {
            console.log(`Found ${studentName} at index ${i}`);
            return;
        }
    }

    console.log(`${studentName} not found in the list`);
}

solve(students, 'Charlie');
solve(students, 'Frank');

