/**
 * https://www.youtube.com/watch?v=2JSQIhPcHQg&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=21
 * 
 * Given number of pages in n different books and m students. 
 * The books are arranged in ascending order of number of pages. 
 * Every student is assigned to read some consecutive books. 
 * The task is to assign books in such a way that the maximum number of pages 
 * assigned to a student is minimum. 
 */
const allocateMinimumNumberOfPages = (numberOfPagesList, numberOfStudents) => {
    let start = 0, end = numberOfPagesList.reduce((total, pages) => total + pages);
    let maxNumOfPagesAStudentCanRead = -1;
    while(start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        let maxPages = 0;
        if(isValidMaxPages(numberOfPagesList, numberOfStudents, mid)) {
            maxNumOfPagesAStudentCanRead = mid;
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    console.log(maxNumOfPagesAStudentCanRead);
}

const isValidMaxPages = (numberOfPagesList, numberOfStudentsAvailable, maxNumberOfPagesAStudentCanTake) => {
    let numberOfStudentsRequired = 1;
    let tempPageSum = 0;
    for(let pages of numberOfPagesList) {
        tempPageSum += pages;
        if(tempPageSum > maxNumberOfPagesAStudentCanTake) {
            numberOfStudentsRequired++;
            tempPageSum = pages;
        }
        if(numberOfStudentsRequired > numberOfStudentsAvailable) return false;
    }
    return true;
}

let numberOfPagesList = [10, 20, 30, 40], numberOfStudents = 2;
// numberOfPagesList = [12, 34, 67, 90], numberOfStudents = 2;
allocateMinimumNumberOfPages(numberOfPagesList, numberOfStudents);