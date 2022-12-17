// 2037. Minimum Number of Moves to Seat Everyone;
let seats = [3, 1, 5];
let students = [2, 7, 4];
let mid = 0;

for (let i = 0; i < seats.length; i++) {
    for (let j = i + 1; j < seats.length; j++) {
        if (seats[i] > seats[j]) {
            mid = seats[i];
            seats[i] = seats[j];
            seats[j] = mid;
        }
    }
}
console.log('seats:', seats);
for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
        if (students[i] > students[j]) {
            mid = students[i];
            students[i] = students[j];
            students[j] = mid;
        }
    }
}
console.log('students:', students);
let finalCount = 0;
// seats 1 ,8, 12  
let i = 0;        // studs 3, 4, 7
while (i < 1) {    // students
    for (let j = 0; j < seats.length; j++) {  // seats
        let count = 0;
        if (students[i] > seats[j]) {
            count += 1;
            console.log('count2:', count - 1);
            finalCount += count - 1;
            console.log('fincount2:', finalCount);
            if (students[i] == j) {
                // i++;
            console.log('count:', count - 1);
            finalCount += count - 1;
            console.log('fincount:', finalCount);
            break;
        }

        }
        // if(students[i] == seats[j]){
        //     count =0;
        //     finalCount +=count;
        //     // i++;
        // }
        // if(students[i]< seats[j]){
        //     count+=1
        //     if(seats[j]==i){

        //     }
        //     finalCount+=count;
        //     // i++;
        // }
    }
}
console.log('fincount:', finalCount);